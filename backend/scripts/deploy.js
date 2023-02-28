// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat")
const { writeFileSync } = require("fs")

async function main() {
  const Verifier = await hre.ethers.getContractFactory("Verifier")
  const verifier = await Verifier.deploy()

  await verifier.deployed()

  console.log(`contract deployed to ${verifier.address}`)
  writeFileSync(
    "deployVerifier.json",
    JSON.stringify(
      {
        Verifier: verifier.address,
      },
      null,
      2
    )
  )
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error)
  process.exitCode = 1
})
