# camelCoin

# Setup

## Before everything

You'll need node and npm https://nodejs.org

## Setup ganache

Either download the GUI from http://truffleframework.com/ganache/ and run that

or get the CLI

```
npm i -g ganache-cli
```

And run it (on a separate terminal)

```
ganache-cli
```

## Setup your solidity

We will use the truffle framework to make life easier.

```
npm i -g truffle
```

## Setup the project

Install git if you don't have it at https://git-scm.com/downloads

```
git clone https://github.com/yipcma/camelCoin.git
cd camelCoin
npm i
```

# Play local blockchain and smart contract

## Compile your smart contracts

Before you compile make sure you are connecting to the right port in truffle.js
Ganache is 7545
Ganache-cli is 8545

```
truffle compile
```

## Deploy the smart contract to ganache

```
truffle migrate
```

## Try out interaction with the play.js script

First, run

```
truffle console
```

then try out commands from play.js in the interactive truffle console in the terminal.
