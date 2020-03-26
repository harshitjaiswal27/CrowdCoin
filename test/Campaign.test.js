const Web3 = require('web3');
const ganache = require('ganache-cli');
const assert = require('assert');
const web3 = new Web3(ganache.provider());

const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

let accounts;
let factory;
let campaignAddress;
let campaign;

beforeEach(async()=>{
    accounts = await web3.eth.getAccounts();

    factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
        .deploy({ data : compiledFactory.bytecode})
        .send({ from : accounts[0] , gas : '1000000'}); 

    await factory.methods.createCampaign('100').send({
        from : accounts[0],
        gas : '1000000'
    });

    [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
    campaign = await new web3.eth.Contract(
        JSON.parse(compiledCampaign.interface),
        campaignAddress
    );
})

describe('Campaigns',()=>{
    it('deploys a factory and a campaign',()=>{
        assert.ok(factory.options.address);
        assert.ok(factory.options.address);        
    });

    it('marks caller as the campaign manager', async()=>{
        const manager = await campaign.methods.manager().call();
        assert.equal(accounts[0], manager);
    });

    it('allows pople to contribute money and mark them as approver', async()=>{
        await campaign.methods.contribute().send({
            from : accounts[1],
            value : '200'
        });
        const isApprover = campaign.methods.approvers(accounts[1]).call();
        assert(isApprover);
    });

    it('requires a minimum contribution', async()=>{
        try{
            await campaign.methods.contribute.send({
                from: accounts[1],
                value : '50'
            });
            assert(false);
        }
        catch(err){
            assert(err);
        }
    });

    it('allows manager to create a payment request', async()=>{
        await campaign.methods
        .createRequest('Buy batteries','100',accounts[1])
        .send({
            from : accounts[0],
            gas : '1000000'
        });
        const request = await campaign.methods.requests(0).call();
        assert('Buy batteries', request.description);
    });

    


})