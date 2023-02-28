const { ethers } = require("hardhat")
const { expect } = require("chai")
const { readFileSync } = require("fs")

require("dotenv").config()

function getInstance(name) {
  const address = JSON.parse(readFileSync("deployVerifier.json"))[name]
  if (!address) throw new Error(`Contract ${name} not found in deploy.json`)
  return ethers.getContractFactory(name).then((f) => f.attach(address))
}

describe("verify", async () => {
  it("verify proof", async () => {
    const mainContract = await getInstance("Verifier")

    const verify = await mainContract.verifyTx(
      [
        [
          "0x0b038711ad3fe3743f0282b709f0ba110b2ab7d2e845285a474ef35e320e7de0",
          "0x02fd6c2fde59f0f0061e99fad9814207f7a27573989060f12f06de7dee1a56b0",
        ],
        [
          [
            "0x0f81500b59bcf153143bc791d79bc8692f6440c88758bae918058aa5b2070fcb",
            "0x257fc4f3a6aaa56e90c70184887f695fb2b77b9350faea913e29035cd704ba99",
          ],
          [
            "0x0a13327b326030e6aa474b036dc69a20b140f15df0df53def54295dec75ae01a",
            "0x1c90fb09a140ea7dfaa8ce789ece9421db826002932a739c261616f9707ffbf1",
          ],
        ],
        [
          "0x251b9f0c7d85dbcc63f17c61bf23b2f68aae136bc8184cf15e919c59e4840f58",
          "0x2b820d0207ddbf2964721c08c7a9831f8b0f9a9dfe4906a1074d9dc398587be4",
        ],
      ],
      ["0x0000000000000000000000000000000000000000000000000000000000000002"]
    )

    expect(verify).to.be.equal(true)
  })
})
