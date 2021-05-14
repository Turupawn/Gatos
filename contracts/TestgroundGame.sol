// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;

contract TestgroundGame {
  uint256 public cats;
  uint256 public dogs;

  function voteCats() public {
    cats+=1;
  }

  function voteDogs() public {
    dogs+=1;
  }
}