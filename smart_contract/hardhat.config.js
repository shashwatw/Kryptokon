//https://eth-goerli.g.alchemy.com/v2/4P0_i4Fjm48GkTb8JPLa-1m4UFueEF7p

require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/4P0_i4Fjm48GkTb8JPLa-1m4UFueEF7p',
      accounts: [ '07f6caf777e824b7243540500c996da3c8641782c10e3b3a891d395048c4c63d'  ]
    }
  }
}