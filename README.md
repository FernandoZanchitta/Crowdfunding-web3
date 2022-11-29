# Crowdfunding-web3
Crowdfunding platform using web3, and solidity smart contracts for learning purposes.

In order to run this project you must follow this instructions:

install _node.js_ by downloading directly from this link https://nodejs.org/en/download/
```
npm install -g truffle
truffle compile
```

## Front

### Setup
```
cd frontend/
npm install
```

### Rodar

```
cd frontend/
npm start
```

### Testar a Blockchain:

```
truffle compile
truffle migrate
truffe console
```
Tenha o ganache aberto e conectado com sua metamask. Dentro do console podemos fazer:
```
let instance = await CampaignFactory.deployed()
instance
instance.createCampaign("CampanhaTeste",20,"ImgURL","Category","Story")
instance.deployedCampaigns(0)
```
