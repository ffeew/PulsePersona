import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const INFURA_API_KEY = process.env.INFURA_API_KEY || "API Key";
const SEPOLIA_PRIVATE_KEY = process.env.SEPOLIA_PRIVATE_KEY || "Private Key";

const config: HardhatUserConfig = {
	solidity: "0.8.20",
	networks: {
		sepolia: {
			url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
			accounts: [SEPOLIA_PRIVATE_KEY],
		},
	},
	gasReporter: {
		enabled: process.env.REPORT_GAS ? true : false,
		currency: "USD",
		gasPrice: 67,
	},
};
export default config;
