# PulsePersona

PulsePersona is a decentralised application (dApp) aimed at providing a platform for users to create and manage their own personal data and credentials. The dApp is built on the Ethereum blockchain and uses the InterPlanetary File System (IPFS) to store the users' data.

The name "PulsePersona" is a fusion of 'pulse,' evoking the essential, rhythmic beat of a heart, and 'persona,' reflecting an individual's social identity. Together, they create a vivid metaphor for a self-sovereign identity that is as fundamental and dynamic as one's own heartbeat. "PulsePersona" suggests an identity that beats in harmony with its user, vibrant and adaptable, yet intrinsically individualized. It stands for a platform that ensures a user's identity remains actively engaged and authentically represented across the digital realm.

## Technology Stack

- [Node.js](https://nodejs.org/en/) - JavaScript runtime environment
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Ethereum](https://ethereum.org/en/) - Blockchain network
- [Solidity](https://docs.soliditylang.org/en/v0.8.11/) - Programming language for writing smart contracts

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. The project is split into three subdirectories: `issuer`, `verifier`, `wallet`. Each subdirectory contains a separate application that can be run independently and is aimed at representing a different user role in the context of self-sovereign identity (SSI).

### Prerequisites

- [Node.js](https://nodejs.org/en/) - v18.15.0 or higher

### Installation

1. Clone the repository

```
git clone https://github.com/ffeew/PulsePersona
```

2. Install NPM packages for each of the subdirectories: `issuer`, `verifier`, `wallet`

```
npm install
```

3. Run the application

```
npm run dev
```
