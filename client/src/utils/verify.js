import createInstance from '../hooks/useContract'
// import contract from '../contracts/contract.json'
import abi from '../contracts/contractABI.json'

const contractAddress = '0x9BC6b2edc0C93e6CA73E5715aE9abf61053377fb'
export async function verify(provider, proof, input) {
  if (!window.ethereum) throw new Error(`User wallet not found`)
  const signer = provider.getSigner()
  const mainContract = createInstance(contractAddress, abi, signer)
  console.log(mainContract)
  const verify = await mainContract.verifyTx(proof, input)
  console.log(verify)
  return verify
}
