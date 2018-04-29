// Buy camelCoins
buyer = web3.eth.accounts[2]

// save the crowdsale instance
CamelCoinCrowdsale.deployed().then(inst => crowdsale = inst)

// get the address of the tokenContract
crowdsale.token().then(addr => tokenAddress = addr)

camelCoinInstance = CamelCoin.at(tokenAddress)

// change tokenOwnership to the crowdsale address (so the crowdsale contract can mint)
camelCoinInstance.transferOwnership(crowdsale.address)

// check buyer's balance
camelCoinInstance.balanceOf(buyer).then(balance => balance.toString(10))

// buyer buys camel coins ()
CamelCoinCrowdsale.deployed().then(inst => inst.sendTransaction({ from: buyer, value: web3.toWei(5, "ether")}))

// Check the amount of GUS tokens for buyer again. It should have some now.
camelCoinInstance.balanceOf(buyer).then(balance => buyerCamTokenBalance = balance.toString(10))

// When we created our token we made it with 18 decimals, which the same as what ether has. That's a lot of zeros, let's display without the decimals:
web3.fromWei(buyerCamTokenBalance, "ether")
