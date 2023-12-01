import { ethers } from "hardhat";

async function main() {
	const identityRegistry = await ethers.deployContract("IdentityRegistry");

	await identityRegistry.waitForDeployment();

	console.log("IdentityRegistry deployed");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
