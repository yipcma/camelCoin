pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/token/ERC20/MintableToken.sol";

contract CamelCoin is MintableToken {
    string public name = "CAMEL COIN";
    string public symbol = "CAM";
    uint8 public decimals = 18;
}