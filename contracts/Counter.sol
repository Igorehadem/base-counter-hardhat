// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

/// @title Counter
/// @notice Simple counter example for Base Hardhat template.
contract Counter {
    uint256 public count;

    /// @notice Increment counter by 1
    function increment() external {
        count += 1;
    }

    /// @notice Decrement counter by 1 (reverts if already zero)
    function decrement() external {
        require(count > 0, "Counter: below zero");
        count -= 1;
    }
}
