import React, { Component } from 'react';
import { Grid, Card, Button} from 'semantic-ui-react';
import web3 from '../../ethereum/web3'
import Layout from '../../components/Layout';
import ContributeForm from '../../components/ContributeForm'
import Campaign from '../../ethereum/campaign';
import { Link } from '../../routes'

class CampaignShow extends Component {
    static async getInitialProps(props){
        const campaign = Campaign(props.query.address);
        const summary = await campaign.methods.getSummary().call();
        return{
            address : props.query.address,
            minimumContribution : summary[0],
            balance : summary[1],
            requestsCount : summary[2],
            approversCount : summary[3],
            manager : summary[4]
        };
    }

    renderCards(){
        const items = [
            {
                header : this.props.manager,
                meta : 'Address of Manager',
                description : 'The manager created this Campaign and can request to withdraw money',
                style : { overflowWrap : 'break-word' }
            },
            {
                header : this.props.minimumContribution,
                meta : 'Minimum Contribution (wei)',
                description : 'You must contribute at least this much amount of wei to become an approver'
            },
            {
                header : this.props.requestsCount,
                meta : 'Number of  Requests',
                description : 'A requests to withdraw money from the contract. Requests must be approved by approvers'
            },
            {
                header : this.props.approversCount,
                meta : 'Number of Approvers',
                description : 'Number of people who have already donated to this campaign'
            },
            {
                header : web3.utils.fromWei(this.props.balance,'ether'),
                meta : 'Campaign Balance (ether)',
                description : 'The balance is how much money the campaign has left to spend'
            }
        ];
        return <Card.Group items={items} />;
    }

    render(){
        return (
            <Layout>
                <h3>Campaign Details</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCards()}
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <h3>Contribute to this Campaign</h3>
                            <ContributeForm address={this.props.address}/>
                        </Grid.Column>  
                    </Grid.Row> 

                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a><Button primary>View Requests</Button></a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                 </Grid>
                 
            </Layout>
        );
    }
}

export default CampaignShow;