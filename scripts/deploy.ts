import { ethers } from "hardhat";

async function main() {
	const [deployer] = await ethers.getSigners();

	console.log("Deploying contracts with the account:", deployer.address);

	const identityRegistry = await ethers.deployContract("IdentityRegistry");

	console.log("IdentityRegistry address:", await identityRegistry.getAddress());
	console.log("IdentityRegistry deployed");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
	.then(() => process.exit(0))
	.catch((error) => {
		console.error(error);
		process.exitCode = 1;
	});
