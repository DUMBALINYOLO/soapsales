import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getAccount } from '..//../actions/accounts';





class AccountDetail extends Component {

	static propTypes = {
        getAccount: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getAccount(this.props.match.params.id);
    }

	render() {
		const { account } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>AccountDetail</h1>
	            	<h1> Account Name: { account.name } </h1>
              
                    <h1> Account ID: { account.id } </h1>
                    <h1> Account BALANCE: { account.balance } </h1>
	            	<ProgressSpinner/>
	            </div>
            </Fragment>
        );
    }
}
    

const mapStateToProps = state =>({
    account: state.accounts.account
})

export default connect(mapStateToProps, {getAccount} ) (AccountDetail);





           