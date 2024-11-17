require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();
const privatekey = process.env.PRIVATE_KEY;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://sepolia.infura.io/v3/" + process.env.INFURA_ID,
      accounts: [privatekey]
    },
  }
};
