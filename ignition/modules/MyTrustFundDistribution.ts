const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("MyTrustFundDistributionModule", (m) => {
  const MyTrustFundDistribution = m.contract("MyTrustFundDistribution", [], {});

  return { MyTrustFundDistribution };
});

// deployed address: 0x355586040dADAE6eB96f2837b13003dD6a527BFb
