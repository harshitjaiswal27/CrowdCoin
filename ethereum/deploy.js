const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json')

const provider = new  HDWalletProvider(
    '#PASTE YOUR ACCOUNT MNEMONIC SEED WORDS HERE#',
    'https://rinkeby.infura.io/v3/a02e8aeac81f41cca74aa1260ad4fde2'
);

const web3 = new Web3(provider);

const deploy = async ()=>{
    const accounts = await web3.eth.getAccounts();
    console.log('Attempting to deploy contract from account : ' , accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({ data : compiledFactory.bytecode })
    .send({ from : accounts[0] , gas : '1000000'})

    console.log('Contract deployed at address :',result.options.address);
};

deploy();

