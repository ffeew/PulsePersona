import { expect } from "chai";
import { ethers } from "hardhat";
import { loadFixture } from "@nomicfoundation/hardhat-toolbox/network-helpers";

async function deployIdentityRegistryFixture() {
	const IdentityRegistry = await ethers.getContractFactory("IdentityRegistry");
	const registry = await IdentityRegistry.deploy();
	await registry.waitForDeployment();

	const [user1, user2] = await ethers.getSigners();

	return { registry, user1, user2 };
}

describe("Identity Creation", function () {
	it("Should register a new identity", async function () {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await expect(registry.connect(user1).registerIdentity(did, didDocument))
			.to.emit(registry, "IdentityRegistered")
			.withArgs(did, user1.address);

		expect(await registry.isDidRegistered(did)).to.equal(true);
	});

	it("Should fail to register an already registered DID", async function () {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		// First registration
		await registry.connect(user1).registerIdentity(did, didDocument);

		// Attempt to re-register
		await expect(
			registry.connect(user1).registerIdentity(did, didDocument)
		).to.be.revertedWith("DID already registered");
	});
});

describe("Identity Deactivation and Reactivation", () => {
	it("Should deactivate an identity", async () => {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await registry.connect(user1).deactivateIdentity(did);

		expect(await registry.isDidActive(did)).to.equal(false);
	});

	it("Should only allow the owner to deactivate an identity", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await expect(
			registry.connect(user2).deactivateIdentity(did)
		).to.be.revertedWith("Caller is not the owner of the identity");
	});

	it("Should reactivate an identity", async () => {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await registry.connect(user1).deactivateIdentity(did);
		await registry.connect(user1).reactivateIdentity(did);

		expect(await registry.isDidActive(did)).to.equal(true);
	});

	it("Only the owner should be able to reactivate an identity", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).deactivateIdentity(did);

		await expect(
			registry.connect(user2).reactivateIdentity(did)
		).to.be.revertedWith("Caller is not the owner of the identity");
	});
});

describe("Identity Update", () => {
	it("Should transfer identity to new owner", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await expect(registry.connect(user1).transferOwnership(did, user2.address))
			.to.emit(registry, "IdentityTransferred")
			.withArgs(did, user2.address);
	});

	it("Should only allow the owner to transfer identity", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await expect(
			registry.connect(user2).transferOwnership(did, user2.address)
		).to.be.revertedWith("Caller is not the owner of the identity");
	});

	it("Should be able to modify DID document", async () => {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const newDidDocument = "New DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).modifyDidDocument(did, newDidDocument);

		expect(await registry.getDidDocument(did)).to.equal(newDidDocument);
	});

	it("Should only allow owner to modify DID document", async () => {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const newDidDocument = "New DID Document";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).modifyDidDocument(did, newDidDocument);

		expect(await registry.getDidDocument(did)).to.equal(newDidDocument);
	});
});

describe("Claim Issuance", () => {
	it("Should issue a claim with increasing claimId", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);

		await expect(registry.connect(user1).issueClaim(did, claimHash))
			.to.emit(registry, "ClaimIssued")
			.withArgs(1, did, claimHash);

		// check if the claimId is increasing
		await expect(registry.connect(user2).issueClaim(did, claimHash))
			.to.emit(registry, "ClaimIssued")
			.withArgs(2, did, claimHash);
	});

	it("Should only allow the issuance of a claim to a valid identity", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).deactivateIdentity(did);

		// deactivated user
		await expect(
			registry.connect(user2).issueClaim(did, claimHash)
		).to.be.revertedWith("Identity is not active");

		// non-existent user
		await expect(
			registry.connect(user2).issueClaim("did:example:456", claimHash)
		).to.be.revertedWith("DID not registered");
	});
});

describe("Claim Verification", () => {
	it("Should verify a claim", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).issueClaim(did, claimHash);

		// check the validity of the claim by retrieving the claim hash and comparing it to the verfiable claim hash
		expect(await registry.getClaimHash(1)).to.equal(claimHash);
	});

	it("Should only return hash of a valid claim", async () => {
		const { registry, user1 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		// non-existent claim
		await expect(registry.getClaimHash(1)).to.be.revertedWith(
			"Claim does not exist"
		);

		// invalid claim
		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).issueClaim(did, claimHash);

		await registry.connect(user1).revokeClaim(1);

		await expect(registry.getClaimHash(1)).to.be.revertedWith(
			"Claim has been revoked"
		);
	});
});

describe("Claim Revocation", () => {
	it("Should revoke a claim", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).issueClaim(did, claimHash);

		await expect(registry.connect(user1).revokeClaim(1))
			.to.emit(registry, "ClaimRevoked")
			.withArgs(1);

		await expect(registry.getClaimHash(1)).to.be.revertedWith(
			"Claim has been revoked"
		);
	});

	it("Should only allow the issuer to revoke a claim", async () => {
		const { registry, user1, user2 } = await loadFixture(
			deployIdentityRegistryFixture
		);

		const did = "did:example:123";
		const didDocument = "Sample DID Document";
		const claimHash = "Sample Claim Hash";

		await registry.connect(user1).registerIdentity(did, didDocument);
		await registry.connect(user1).issueClaim(did, claimHash);

		await expect(registry.connect(user2).revokeClaim(1)).to.be.revertedWith(
			"Only the issuer can revoke the claim"
		);
	});
});
