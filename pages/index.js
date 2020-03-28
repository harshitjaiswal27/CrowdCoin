import React,{Component} from 'react';
import { Card, Button } from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout'

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
    return (
        <Layout>
            <div>
                <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <h3>OPEN CAMPAIGNS</h3>
                {this.renderCampaigns()}
                <Button content="Create Campaign" icon="add" primary></Button>
            </div>
        </Layout>
        );
    }
}

export default CamapignIndex;
