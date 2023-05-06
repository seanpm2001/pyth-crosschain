export enum NETWORK {
  DEVNET = "DEVNET",
  TESTNET = "TESTNET",
  MAINNET = "MAINNET",
}

export const REGISTRY = {
  DEVNET: {
    PYTH_PACKAGE_ID:
      "0xcd7f3fe6338a618e3d8df8445cd8e8daa0af35c956c4d35cbac78d63d7869ece",
    PYTH_STATE_ID:
      "0x5a7ef4ddaa1035448f11644f1eb0c4ca26f6bf094c8ee5c3309ddbed386b03fa",
    WORMHOLE_PACKAGE_ID:
      "0xef530c697826910f09c82292a0344d11e8371f9462d0d1f470b79cde92311188",
    WORMHOLE_STATE_ID:
      "0xd7e478de3e6925127da439586a64867ada00405fa683e3ab9c4359c3bbcfd9ca",
    RPC_URL: "http://0.0.0.0:9000",
  },
  TESTNET: {
    PYTH_PACKAGE_ID:
      "0x4eb4b9b5f3ca3293d3b92898ebb54f4a8705cc6c1fb2a0d2b7ec69388c7f14e4",
    PYTH_STATE_ID:
      "0xe96526143f8305830a103331151d46063339f7a9946b50aaa0d704c8c04173e5",
    WORMHOLE_PACKAGE_ID:
      "0x80c60bff35fe5026e319cf3d66ae671f2b4e12923c92c45df75eaf4de79e3ce7",
    WORMHOLE_STATE_ID:
      "0x79ab4d569f7eb1efdcc1f25b532f8593cda84776206772e33b490694cb8fc07a",
    RPC_URL: "https://fullnode.testnet.sui.io:443",
  },
  MAINNET: {
    PYTH_PACKAGE_ID:
      "0xa446c4a37c0bb69d03357c1a52d60da0b434048226d5f3feffdb693586bea861",
    PYTH_STATE_ID:
      "0x428b5795904d5256d1eea5991df672934315fb8dcf8f6111134c1a52afd005ca",
    WORMHOLE_PACKAGE_ID:
      "0x5306f64e312b581766351c07af79c72fcb1cd25147157fdc2f8ad76de9a3fb6a",
    WORMHOLE_STATE_ID:
      "0xaeab97f96cf9877fee2883315d459552b2b921edc16d7ceac6eab944dd88919c",
    RPC_URL: "https://fullnode.mainnet.sui.io:443",
  },
};

export const INITIAL_DATA_SOURCES = {
  // Devnet params are same as testnet.
  DEVNET: {
    GOVERNANCE_ADDRESS:
      "63278d271099bfd491951b3e648f08b1c71631e4a53674ad43e8f9f98068c385",
    GOVERNANCE_CHAIN: 1,
    DATA_SOURCE_ADDRESSES: [
      "f346195ac02f37d60d4db8ffa6ef74cb1be3550047543a4a9ee9acf4d78697b0",
      "a27839d641b07743c0cb5f68c51f8cd31d2c0762bec00dc6fcd25433ef1ab5b6",
    ],
    DATA_SOURCE_CHAINS: [1, 26],
  },
  TESTNET: {
    GOVERNANCE_ADDRESS:
      "63278d271099bfd491951b3e648f08b1c71631e4a53674ad43e8f9f98068c385",
    GOVERNANCE_CHAIN: 1,
    DATA_SOURCE_ADDRESSES: [
      "f346195ac02f37d60d4db8ffa6ef74cb1be3550047543a4a9ee9acf4d78697b0",
      "a27839d641b07743c0cb5f68c51f8cd31d2c0762bec00dc6fcd25433ef1ab5b6",
    ],
    DATA_SOURCE_CHAINS: [1, 26],
  },
  MAINNET: {
    GOVERNANCE_ADDRESS:
      "5635979a221c34931e32620b9293a463065555ea71fe97cd6237ade875b12e9e",
    GOVERNANCE_CHAIN: 1,
    DATA_SOURCE_ADDRESSES: [
      "6bb14509a612f01fbbc4cffeebd4bbfb492a86df717ebe92eb6df432a3f00a25",
      "f8cd23c2ab91237730770bbea08d61005cdda0984348f3f6eecb559638c0bba0",
    ],
    DATA_SOURCE_CHAINS: [1, 26],
  },
};
