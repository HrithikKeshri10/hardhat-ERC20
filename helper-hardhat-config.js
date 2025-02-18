const { ethers } = require("hardhat");

const networkConfig = {
  11155111: {
    name: "Sepolia",
    vrfCoordinatorV2: "0x8103B0A8A00be2DDC778e6e7eaa21791Cd364625",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c",
    subscriptionId: "10542",
    callbackGasLimit: "5000000",
    interval: "30",
  },

  31337: {
    name: "hardhat",
    subscriptionId: "588",
    gasLane:
      "0x474e34a077df58807dbe9c96d3c009b23b3c6d0cce433e59bbf5b34f823bc56c", // This doesn't matter as we are deploying on local host
    callbackGasLimit: "500000",
    interval: "30",
  },
};

const developmentChains = ["hardhat", "localhost"];
const INITIAL_SUPPLY = "1000000000000000000000000";

module.exports = {
  networkConfig,
  developmentChains,
  INITIAL_SUPPLY,
};
