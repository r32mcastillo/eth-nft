require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */

const projectId = process.env.INFURA_PROJECT_ID;
const privateKey = process.env.DEPLOYER_SIGNER_PRIVATE_KEY;


module.exports = {
  solidity: "0.8.17",
  networks:{
    goerli:{
      url: `https://goerli.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      chainId:5
    },
    rinkeby:{
      url: `https://rinkeby.infura.io/v3/${projectId}`,
      accounts: [privateKey],
      chainId:4
    },
    localhost: {
      //hardhat
      url: "http://127.0.0.1:8545",
      chainId:31337
    }
  }
};
