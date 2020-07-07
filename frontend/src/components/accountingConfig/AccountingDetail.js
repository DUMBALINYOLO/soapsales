import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getAccountConfig } from '..//../actions/accountingConfig';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './index.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';

class AccountingConfigDetail extends Component {

	static propTypes = {
        getAccountConfig: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getAccountConfig(this.props.match.params.id);
    }

	render() {
		const { accountconfig } = this.props;
		const footer = (
            <span>
                <Button label="Edit" icon="pi pi-pencil" style={{marginRight: '3.5em'}} className="p-button-warning p-button-rounded" />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger p-button-rounded" />
            </span>
        );

        return (
			<div className="main">
                <Card style={{color: '#666699',width: '400px', borderRadius: '25px', height: '500px', padding: '20px'}} footer={footer}>
					<h2 style={{textShadow: "2px 2px teal"}}>Accounting Config Details</h2>
					<div style={{margin: '1em', fontSize: '14px'}}>ID: { accountconfig.id }</div>
					<div style={{margin: '2em'}}>FINANCIAL YEAR: { accountconfig.start_of_financial_year }</div>
					<div  style={{margin: '2em'}}>CAPITALIZATION LIMIT: { accountconfig.equipment_capitalization_limit }</div>
					<div style={{margin: '2em'}}>BOOK KEEPER: { accountconfig.default_bookkeeper }</div>
					<div style={{margin: '2em'}}>ACCOUNTING PERIOD: { accountconfig.defaul_accounting_period }</div>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    accountconfig: state.accountingConfig.accountconfig
})

export default connect(mapStateToProps, {getAccountConfig} ) (AccountingConfigDetail);
