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
			<div className="card py-5">
				<div className="row">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Waste Report Details</h1>
					</div>
				</div>
				<table className="table">
					<thead>
						<th>ID</th>
						<th>NAME</th>
						<th>ACCOUNT TYPE</th>
						<th>INIT BALANCE</th>
						<th>ORDER</th>
						<th />
					</thead>
					<tbody>
						<tr>
							<td>{ account.id }</td>
							<td>{ account.name }</td>
							<td>{ account.account_type }</td>
							<td>{ account.initial_balance }</td>
							<td>{ account.order }</td>
						</tr>
					</tbody>
				</table>
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					SOME MORE INFO ABOUT THE ACCOUNT :</p>
					<p className="text-muted lead">{ account.description }</p>
				</div>
			</div>
        );
    }
}


const mapStateToProps = state =>({
    account: state.accounts.account
})

export default connect(mapStateToProps, {getAccount} ) (AccountDetail);
