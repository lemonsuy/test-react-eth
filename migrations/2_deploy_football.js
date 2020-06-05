const Football = artifacts.require("Football");

module.exports = function(deployer) {
  deployer.deploy(Football, "Real Madrid", "Zidane");
};
