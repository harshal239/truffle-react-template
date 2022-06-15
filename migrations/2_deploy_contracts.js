var Greeting = artifacts.require("./Greeting.sol");

module.exports = function (deployer) {
  deployer.deploy(Greeting);
};
