const { expect } = require("chai");
const { ethers } = require("hardhat");
const { loadFixture } = require("@nomicfoundation/hardhat-toolbox/network-helpers");

describe("FakeToken", function () {
    const INITIAL_SUPPLY = 1_000_000;
    async function deployFakeTokenFixture() {

        const [owner] = await ethers.getSigners();

        const FakeToken = await ethers.getContractFactory("FakeToken");
        const fakeToken = await FakeToken.deploy(INITIAL_SUPPLY);

        return {fakeToken, owner}
    }

    describe("Deployment", function () {
        it("Should set the correct total supply", async function () {
            const { fakeToken } = await loadFixture(deployFakeTokenFixture);

            expect(await fakeToken.totalSupply()).to.equal(INITIAL_SUPPLY);
        });
    })
})
