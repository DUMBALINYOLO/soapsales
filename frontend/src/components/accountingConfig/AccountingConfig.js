import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAccountingConfig, deleteAccountingConfig } from '..//../actions/accountingConfig';


class AccountingConfig extends Component {
    static propTypes = {
        accountingConfig : PropTypes.array.isRequired,
        getAccountingConfig: PropTypes.func.isRequired,
        deleteAccountingConfig: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getAccountingConfig();
    }

    render(){
        return (
            <Fragment>
                <h1>ACCOUNTING CONFIGURATIONS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>START OF FINANCIAL YEAR</th>
                        <th>DEFAULT ACCOUNTING PERIOD</th>
                        <th>DEFAULT BOOKKEEPER</th>
                        <th>EQUIPMENT CAPITALIZATION LIMIT</th>
                        <th>IS CONFIGURED</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.accountingConfig.map(accountingConfig =>(
                            <tr key={accountingConfig.id}>
                                <td>{ accountingConfig.id }</td>
                                 <td>{ accountingConfig.start_of_financial_year }</td>
                                <td>{ accountingConfig.default_accounting_period }</td>
                                <td>{ accountingConfig.default_bookkeeper }</td>
                                <td>{ accountingConfig.equipment_capitalization_limit }</td>
                                <td>{ accountingConfig.is_configured }</td>
                                <td><button onClick={this.props.deleteAccountingConfig.bind(this, accountingConfig.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    accountingConfig: state.accountingConfig.accountingConfig
})

export default connect(mapStateToProps, {getAccountingConfig, deleteAccountingConfig} ) (AccountingConfig);
