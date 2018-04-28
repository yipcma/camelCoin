const CamelCoinCrowdsale = artifacts.require('./CamelCoinCrowdsale.sol');
const CamelCoin = artifacts.require('./CamelCoin.sol');

module.exports = function(deployer, network, accounts) {
    const openingTime = web3.eth.getBlock('latest').timestamp + 2; // open 2 seconds after migration
    const closingTime = openingTime + 86400 * 20; // open for 20 days
    const rate = new web3.BigNumber(10);  // 1 ETH = 10 CAM (~ 65 USD/CAM on Apr 28, a fancy 20 minute camel ride)
    const wallet = accounts[1];

    return deployer
        .then(() => {
            return deployer.deploy(CamelCoin);
        })
        .then(() => {
            return deployer.deploy(
                CamelCoinCrowdsale,
                openingTime,
                closingTime,
                rate,
                wallet,
                CamelCoin.address
            );
        });
};