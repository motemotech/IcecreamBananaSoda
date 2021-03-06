require("@nomiclabs/hardhat-waffle");
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");


const API_KOVAN_URL = "https://eth-kovan.alchemyapi.io/v2/y_IC01MbHRhEpdmsumCRa-ZsYY9ThxRg";
const PRIVATE_KEY_DEV = "";

module.exports = {
  solidity: {
     version: "0.8.4",
     settings: {
        optimizer: {
           enabled: true,
           runs: 200
        },
     },
   },
  defaultNetwork: "hardhat",
    networks: {
       hardhat: {},
       kovan: {
        url: API_KOVAN_URL,
        accounts: [`0x${PRIVATE_KEY_DEV}`]
      },
    },
    /*
    etherscan: {
       apiKey: process.env.ETHERSCAN_API_KEY
    },
    */
    mocha: {
      timeout: 100000
    }
 };
