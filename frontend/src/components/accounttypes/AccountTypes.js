import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccountTypes, deleteAccountType } from '..//../actions/accounttypes';


class AccountTypes extends Component {
    static propTypes = {
        accounttypes : PropTypes.array.isRequired,
        getAccountTypes: PropTypes.func.isRequired,
        deleteAccountType: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getAccountTypes();
    }

    render(){
        return (
            <Fragment>
                <h1>ACCOUNT-TYPES</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>CATEGORY</th>
                        <th>CLASSIFICATION</th>
                        <th>NAME</th>
                        <th>ORDER</th>
                        <th>STARTING-NUMBER</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.accounttypes.map(accounttype =>(
                            <tr key={accounttype.id}>
                                <td>{ accounttype.id }</td>
                                <td>{ accounttype.category }</td>
                                <td>{ accounttype.classification }</td>
                                <td>{ accounttype.name }</td>
                                <td>{ accounttype.order }</td>
                                <td>{ accounttype.starting_number }</td>
                              
                                <td><button onClick={this.props.deleteAccountType.bind(this, accounttype.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    accounttypes: state.accounttypes.accounttypes
})

export default connect(mapStateToProps, {getAccountTypes, deleteAccountType} ) (AccountTypes);
