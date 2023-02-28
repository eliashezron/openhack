import { Hyperspace } from './hyperspace'

export const DAPP_CONFIG = {
  readOnlyChainId: Hyperspace.chainId,
  readOnlyUrls: {
    [Hyperspace.chainId]: `https://api.hyperspace.node.glif.io/rpc/v1`,
  },
  noMetamaskDeactivate: true,
}
