import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

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
};
export default config;
