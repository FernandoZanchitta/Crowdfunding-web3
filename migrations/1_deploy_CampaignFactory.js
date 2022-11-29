// import web3 from 'web3';
// const Campaign = artifacts.require("Campaign");
const CampaignFactory = artifacts.require("CampaignFactory");

module.exports = function (deployer) {
    deployer.deploy(CampaignFactory);

    //get the address of the factory
    // const accounts = await web3.eth.getAccounts();
    // const owner = accounts[0];
    // const requiredAm
    // deployer.deploy(Campaign);

};