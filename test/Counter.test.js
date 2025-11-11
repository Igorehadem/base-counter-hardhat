const { expect } = require("chai");

describe("Counter", function () {
  let counter, owner;

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    [owner] = await ethers.getSigners();
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  it("should start from zero", async function () {
    expect(await counter.count()).to.equal(0);
  });

  it("should increment the counter", async function () {
    await counter.increment();
    expect(await counter.count()).to.equal(1);
  });

  it("should decrement the counter", async function () {
    await counter.increment();
    await counter.decrement();
    expect(await counter.count()).to.equal(0);
  });

  it("should revert when decrementing below zero", async function () {
    await expect(counter.decrement()).to.be.revertedWith("Counter: below zero");
  });
});
