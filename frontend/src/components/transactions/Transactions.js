import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getTransactions, deleteTransaction } from '..//../actions/transactions';


class Transactions extends Component {
    static propTypes = {
        transactions : PropTypes.array.isRequired,
        getTransactions: PropTypes.func.isRequired,
        deleteTransaction: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getTransactions();
    }

	render(){
		return (
			<Fragment>
                <h1>TRANSACTIONS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>VALUE</th>
                        <th>IS DEBIT</th>
                        <th>AFFECTED ACCOUNT</th>
                        <th>JOURNAL ENTRY</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.transactions.map(transaction =>(
                            <tr key={transaction.id}>
                                <td>{ transaction.id }</td>
                                <td>{ transaction.value }</td>
                                <td>{ transaction.is_debit }</td>
                                <td>{ transaction.affected_account }</td>
                                <td>{ transaction.journal_entry }</td>
                                <td><button onClick={this.props.deleteTransaction.bind(this, transaction.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    transactions: state.transactions.transactions
})

export default connect(mapStateToProps, {getTransactions, deleteTransaction} ) (Transactions);
