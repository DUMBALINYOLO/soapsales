import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAccounts, deleteAccount } from '..//../actions/accounts';


class Accounts extends Component {
    // static propTypes = {
    //     accounts : PropTypes.array.isRequired,
    //     getAccounts: PropTypes.func.isRequired,
    //     deleteAccount: PropTypes.func.isRequired,
    // };

    componentDidMount(){
        this.props.getAccounts();
    }
    

    render(){
        return (
            <Fragment>
                <h1>ACCOUNTS</h1>
                 <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>ACCOUNT-TYPE</th>
                        <th>NAME</th>
                        <th>INITIAL-BALANCE</th>
                        <th>BALANCE</th>
                        <th>CREATED-DATE</th>
                        <th>ORDER</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.accounts.map(account =>(
                            <tr key={account.id}>
                                <td>{ account.id }</td>
                                 <td>{ account.type }</td>
                                <td>{ account.name }</td>
                                <td>{ account.initial_balance }</td>
                                <td>{ account.balance }</td>
                                <td>{ account.created_date }</td>
                                <td>{ account.order }</td>
                              
                                <td><button onClick={this.props.deleteAccount.bind(this, account.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    accounts: state.accounts.accounts
})

export default connect(mapStateToProps, {getAccounts, deleteAccount} ) (Accounts);
