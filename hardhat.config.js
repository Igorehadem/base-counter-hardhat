require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.25",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  networks: {
    base: {
      url: "https://mainnet.base.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    },
    baseSepolia: {
      url: "https://sepolia.base.org",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : []
    }
  }
};
