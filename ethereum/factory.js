import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x742a8BDaDbf60e765d482dA69202AB3384526f31'
)

export default instance;