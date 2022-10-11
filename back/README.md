<div align="right">
  <img src="https://raw.githubusercontent.com/r32mcastillo/reactpractico/main/src/assets/logos/log-2.png" alt="logo" width="50" height="auto" />
</div>

**Puedes ver el resultado en:** [https://r32mcastillo.github.io/eth-nft/](https://r32mcastillo.github.io/eth-nft/).
<!-- About the Project -->
## :star2: Practica de Web3
<div align="center">
  <img src="https://github.com/r32mcastillo/punks-interface-01/blob/master/src/assets/demo2.png" alt="demo2" width="70%" height="auto" />
</div>
<div align="center">
Conectar con MetaMask
<br/><br/>
</div>
<div align="center">
  <img src="https://github.com/r32mcastillo/punks-interface-01/blob/master/src/assets/demo1.png" alt="demo1" width="70%" height="auto" />
</div>

**Contrato**
- [rinkeby.etherscan.io](https://rinkeby.etherscan.io/address/0x89c6ddd84c02e39b4e9ce923b26f15ca7a92d84e#readContract)


### :bangbang: Prerrequisitos
**Ambiente de desarrollo.**
- node v16.17.0
- yarn 1.22.19
- hardhat 2.11.2

### :gear: 
**Comandos al crear el proyecto.**
Si está usando hardhat-waffle Migración a Hardhat Toolbox
```
yarn init  -y
yarn add -D hardhat
yarn add -D @nomicfoundation/hardhat-toolbox
yarn add -D @nomicfoundation/hardhat-toolbox @nomicfoundation/hardhat-network-helpers @nomicfoundation/hardhat-chai-matchers @nomiclabs/hardhat-ethers @nomiclabs/hardhat-etherscan chai ethers hardhat-gas-reporter solidity-coverage @typechain/hardhat typechain @typechain/ethers-v5 @ethersproject/abi @ethersproject/providers
yarn add -D dotenv
yarn add @openzeppelin/contracts

npx hardhat
npx hardhat compile
npx hardhat test
npx hardhat run .\scripts\deploy.js
npx hardhat run .\scripts\deploy.js --network rinkeby

//verificar contrato
npx hardhat flatten > Flattened.sol

```

**Link para fondear su cuenta:**
- [https://faucets.chain.link/](https://faucets.chain.link/)

**¿Que es un ERC?**
Es una propuesta preliminar para un EIP, se discute en el GitHub oficial de los EIPs y significa Ethereum Request for Comments

**¿Qué son las EIP?**
Las propuestas de mejora de Ethereum (EIPs) son estándares que especifican nuevas características o procesos potenciales para Ethereum. Las EIP contienen especificaciones técnicas para los cambios propuestos y actúan como “fuente de verdad” para la comunidad. Las actualizaciones de la red y los estándares de aplicación para Ethereum se debaten y desarrollan a través del proceso de las EIP.

**Recursos.**
- [Platzi - Curso de Dapps: Introducción al Desarrollo de Aplicaciones Descentralizadas](https://platzi.com/cursos/intro-dapps/)
- [Platzi - Curso de Desarrollo Frontend de Aplicaciones Descentralizadas con Web3.Js](https://platzi.com/cursos/frontend-dapps/)
- [gitignore](https://github.com/github/gitignore/blob/main/Node.gitignore)
- [EIP-721: Non-Fungible Token Standard](https://eips.ethereum.org/EIPS/eip-721)
- [docs.opensea.io](https://docs.opensea.io/docs/metadata-standards)
- [docs.openzeppelin.com](https://docs.openzeppelin.com/contracts/4.x/wizard)
- [https://geth.ethereum.org/](https://geth.ethereum.org/)



**Puedes ver el resultado en:** [https://r32mcastillo.github.io/eth-nft/](https://r32mcastillo.github.io/eth-nft/).


