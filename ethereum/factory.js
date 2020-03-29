import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
    JSON.parse(CampaignFactory.interface),
    '0x00ecaA77f15F2c272eBCFB482767843840FB014A'
)

export default instance;