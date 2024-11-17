const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const INITIAL_SUPPLY = 100_000;
module.exports = buildModule("FakeTokenModule", (m) => {
    const initialSupply = m.getParameter("initialSupply", INITIAL_SUPPLY);

    const fakeToken = m.contract("FakeToken", [initialSupply]);

    return { fakeToken };
})