import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

describe("User Creation", function () {
	it("Should register a new identity", async function () {
		const IdentityRegistry = await ethers.getContractFactory(
			"IdentityRegistry"
		);
		const registry = await IdentityRegistry.deploy();
		await registry.waitForDeployment();

		const [owner] = await ethers.getSigners();
		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await expect(registry.registerIdentity(did, didDocument))
			.to.emit(registry, "IdentityRegistered")
			.withArgs(did, owner.address);

		expect(await registry.isDidRegistered(did)).to.equal(true);
	});

	it("Should fail to register an already registered DID", async function () {
		const IdentityRegistry = await ethers.getContractFactory(
			"IdentityRegistry"
		);
		const registry = await IdentityRegistry.deploy();
		await registry.waitForDeployment();

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		// First registration
		await registry.registerIdentity(did, didDocument);

		// Attempt to re-register
		await expect(
			registry.registerIdentity(did, didDocument)
		).to.be.revertedWith("DID already registered");
	});
});
