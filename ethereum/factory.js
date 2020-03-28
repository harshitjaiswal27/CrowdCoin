import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0xaE2321BD029e28E7A6b963ff6aCFC36522C2540d'
)

export default instance;