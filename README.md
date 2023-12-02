# PulsePersona

PulsePersona is a decentralized application (dApp) designed to empower users with control over their personal data and credentials through a secure and user-centric platform. Built upon the robust Ethereum blockchain, it leverages the InterPlanetary File System (IPFS) for decentralized data storage, ensuring that users' information remains accessible and tamper-resistant.

The essence of PulsePersona is captured in its name—a blend of 'pulse', symbolizing the vital, rhythmic essence of life, and 'persona', the aspect of an individual's character that is presented to or perceived by others. This synergy reflects our commitment to creating a platform where self-sovereign identity is as intrinsic and dynamic as the heartbeat itself.

At its core, PulsePersona embodies an identity system that resonates with the user's individuality, mirroring their personal beat within the digital ecosystem. The platform not only facilitates the active participation and representation of one’s digital self but does so with a commitment to maintaining the authenticity and vibrancy of user identities. With PulsePersona, your digital identity is poised to stay as lively and unique as your physical presence in the world.

## Technology Stack

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [Ethereum](https://ethereum.org/en/) - Blockchain network
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/) - Programming language for writing smart contracts

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

The project is split into three parts: `issuer`, `verifier`, `wallet`. Each part contains a separate application that can be run independently and is aimed at representing a different user role in the context of self-sovereign identity (SSI).

This repository contains the backend of PulsePersona--the smart contract.

For the frontend, please refer to the following repositories:

- [Issuer](https://github.com/ffeew/PulsePersona_Issuer)
- [Verifier](https://github.com/ffeew/PulsePersona_Verifier)
- [Wallet](https://github.com/ffeew/PulsePersona_Wallet)

### Prerequisites

- [Node.js](https://nodejs.org/en/) - v18.17.0 or higher

### Installation

1. Clone the repository

```bash
git clone https://github.com/ffeew/PulsePersona
```

2. Install NPM packages

```bash
npm install
```

3. Run the application

```bash
npm run dev
```
