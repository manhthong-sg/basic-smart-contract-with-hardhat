// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Thong is ERC20 {
    string public message;
    
    constructor(string memory _message) ERC20("Thong", "TTG"){
        message=_message;
        _mint(msg.sender, 1000*(10**decimals()));
    }
    function sendMessage() public view returns (string memory){
        return message;
    }
    function updateMessage(string memory _msg) public {
        message=_msg;
    }
}
