import React,{Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';

class CamapignIndex extends Component {
    static async getInitialProps() {
        const camapigns = await factory.methods.getDeployedCampaigns().call();
        return { camapigns }; 
    }

    renderCampaigns(){
        const items = this.props.camapigns.map( address =>{
            return{
                header : address,
                description : <a>View Campaign</a>,
                fluid : true
            };
        });

        return <Card.Group items={items} />;
    }

    render(){
    return <div>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
        {this.renderCampaigns()}
        <Button content="Create Campaign" icon="add" secondary></Button>
        </div>
    }
}

export default CamapignIndex;
