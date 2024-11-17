require('dotenv').config();
const hre = require("hardhat");
const { ethers } = require("ethers");

const INITIAL_SUPPLY = 100_000;
async function main() {
  let artifacts = await hre.artifacts.readArtifact("FakeToken");

  const provider = new ethers.JsonRpcProvider(hre.network.config.url);
  let wallet = new ethers.Wallet(hre.network.config.accounts[0], provider);
  let factory = new ethers.ContractFactory(artifacts.abi, artifacts.bytecode, wallet);
  let fakeToken = await factory.deploy(parseInt(INITIAL_SUPPLY));
  await fakeToken.waitForDeployment();
  console.log("FakeToken address:", await fakeToken.getAddress());
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });