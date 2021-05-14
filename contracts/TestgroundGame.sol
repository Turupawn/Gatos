// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract TestgroundGame {
  uint256 public dogs = 0;
  uint256 public cats = 0;

  function voteDogs() public {
    dogs+=1;
  }

  function voteCats() public {
    cats+=1;
  }
}