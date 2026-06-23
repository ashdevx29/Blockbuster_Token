import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { bsc } from '@reown/appkit/networks'

const projectId = '052426e457c97ebb39a63930c3c08adb';

const networks = [bsc];

const metadata = {
  name: 'Blockbuster Presale',
  description: 'Blockbuster Presale',
  url: 'https://blockbuster.io/presale',
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

createAppKit({
  adapters: [new EthersAdapter()],
  networks,
  metadata,
  projectId,
  defaultOpen: false,
  features: {
    analytics: true 
  }
})

export default createAppKit;