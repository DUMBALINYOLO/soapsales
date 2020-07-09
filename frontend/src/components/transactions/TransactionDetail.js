import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getTransaction } from '..//../actions/transactions';





class TransactionDetail extends Component {

	static propTypes = {
        getTransaction: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getTransaction(this.props.match.params.id);
    }

	render() {
		const { transaction } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Transaction Details</h1>
	            	<h1>ID: { transaction.id } </h1>
                    <h1>VALUE: { transaction.value } </h1>
                    <h1>AFFECTED ACCOUNT: { transaction.affected_account } </h1>
                    <h1>JOURNAL ENTRY: { transaction.journal_entry } </h1>
                    <h1>IS DEBIT: { transaction.is_debit } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    transaction: state.transactions.transaction
})

export default connect(mapStateToProps, {getTransaction} ) (TransactionDetail);
