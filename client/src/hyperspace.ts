import { Chain } from '@usedapp/core'

const getAddressLink = (explorerUrl: string) => (address: string) =>
  `${explorerUrl}/address/${address}`

const getTransactionLink = (explorerUrl: string) => (txnId: string) =>
  `${explorerUrl}/tx/${txnId}`

const hyperspaceExplorerUrl = 'https://hyperspace.filfox.info/en'

export const Hyperspace: Chain = {
  chainId: 3141,
  chainName: 'Hyperspace',
  isTestChain: true,
  isLocalChain: false,
  multicallAddress: '0x0000000000000000000000000000000000000000',
  // Optional parameters:
  rpcUrl: 'https://api.hyperspace.node.glif.io/rpc/v1',
  nativeCurrency: {
    name: 'FILECOIN',
    symbol: 'tFIL',
    decimals: 18,
  },
  blockExplorerUrl: hyperspaceExplorerUrl,
  getExplorerAddressLink: getAddressLink(hyperspaceExplorerUrl),
  getExplorerTransactionLink: getTransactionLink(hyperspaceExplorerUrl),
}

const networks = { Hyperspace}

export default networks
