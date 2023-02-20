import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.ethereumTestnet,
  mainnet: Networks.ethereumMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'GigaBrainGorillaz',
  tokenName: 'Giga Brain Gorillaz',
  tokenSymbol: 'GBG',
  hiddenMetadataUri: 'ipfs://QmNpTVjiYiyJRK6Ekyp8vSHbZLFJKr4UqcZM2jDJcBa4cD/hidden.json',
  maxSupply: 20,
  whitelistSale: {
    price: 0.0005,
    maxMintAmountPerTx: 1,
  },
  preSale: {
    price: 0.0007,
    maxMintAmountPerTx: 2,
  },
  publicSale: {
    price: 0.0009,
    maxMintAmountPerTx: 5,
  },
  contractAddress: '0xbEaeBdcaC8c3F42461ab4735F3ddD2DF6EE2B10D',
  marketplaceIdentifier: 'Giga-Brain-Gorillaz',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses: whitelistAddresses,
};

export default CollectionConfig;
