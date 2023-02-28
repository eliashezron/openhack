import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core'
import React, { useEffect, useState } from 'react'

const LayoutComponent = ({ children }) => {
  const [rendered, setRendered] = useState('')
  const { ens } = useLookupAddress()
  const { account, activateBrowserWallet, deactivate } = useEthers()
  useEffect(() => {
    if (ens) {
      setRendered(ens)
    } else if (account) {
      setRendered(shortenAddress(account))
    } else {
      setRendered('')
    }
  }, [account, ens, setRendered])
  return (
    <div className="flex flex-1 flex-col relative bg-primaryBg w-full">
      <nav className="w-full h-16 px-10 flex top-0 left-0 right-0 fixed bg-primaryBg shadow-sm border-b-1 border-primaryLight flex-row items-center justify-end">
        <button
          className="bg-primaryLight px-4 py-2 rounded-md text-primaryText font-medium "
          onClick={() => {
            if (!account) {
              activateBrowserWallet()
            } else {
              deactivate()
            }
          }}
        >
          {rendered === '' && 'Connect Wallet'}
          {rendered !== '' && rendered}
        </button>

        {/* <div className="bg-pink-300 px-4 py-2 rounded-md text-white font-medium ">
          <h4>0xAddress</h4>
        </div> */}
      </nav>
      <div className="mt-16">{children}</div>
    </div>
  )
}

export default LayoutComponent
