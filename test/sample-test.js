const { expect } = require("chai");
const { ethers } = require("hardhat");

// describe("Xin chao", () => {
//   const message = "xin chao";
//   it("test1", async () => {

//   })

// })
describe("Thong", async function () {
  const message = "Hello world !!!!"
  const updateMSG = "Kkk"
  
  it("Should return message correctly", async function () {
    const Helloworld = await ethers.getContractFactory('Thong')
    const helloworld = await Helloworld.deploy(message)
    await helloworld.deployed()
    expect(await helloworld.sendMessage()).to.be.equal(message)
  });
  
  it("update message", async function () {
    const Helloworld = await ethers.getContractFactory('Thong')
    const helloworld = await Helloworld.deploy(message)
    await helloworld.deployed()
    
    await helloworld.updateMessage(updateMSG)
    expect(await helloworld.sendMessage()).to.be.equal(updateMSG)
  });
});