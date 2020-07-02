import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getAccountConfig } from '..//../actions/accountingConfig';





class AccountingConfigDetail extends Component {

	static propTypes = {
        getAccountConfig: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getAccountConfig(this.props.match.params.id);
    }

	render() {
		const { accountconfig } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Accounting Config Details</h1>
	            	<h1> Account ID: { accountconfig.id } </h1>
                    <h1> Account START OF FINANCIAL YEAR: { accountconfig.start_of_financial_year } </h1>
                    <h1> Account EQUIPMENT CAPITALIZATION LIMIT: { accountconfig.equipment_capitalization_limit } </h1>
                    <h1> Account BOOK KEEPER: { accountconfig.default_bookkeeper } </h1>
                    <h1> Account ACCOUNTING PERIOD: { accountconfig.defaul_accounting_period } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    accountconfig: state.accountingConfig.accountconfig
})

export default connect(mapStateToProps, {getAccountConfig} ) (AccountingConfigDetail);
