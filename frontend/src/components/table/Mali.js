import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import React, { Component } from 'react';
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from 'primereact/calendar';
import {MultiSelect} from 'primereact/multiselect';
import {ProgressBar} from 'primereact/progressbar';
import classNames from 'classnames';
import { getAccounts} from '..//../actions/accounts';

export class Mali extends Component {

    constructor() {
            super();
            // this.state = {};
            // this.accounts = getAccounts();
        }

    componentDidMount() {
        this.props.getAccounts();
    }

    render() {
            let cols = [
                {field: 'id', header: 'ID'},
                {field: 'account-type', header: 'Account-Type'},
                {field: 'name', header: 'Name'},
                {field: 'initial_balance', header: 'Initial Balance'},
                {field: 'balance', header: 'Balance'},
                {field: 'created_date', header: 'Created Date'},
                {field: 'order', header: 'Order'},

            ];

            let dynamicColumns = cols.map((col,i) => {
                return <Column key={col.field} field={col.field} header={col.header} />;
            });

            return (
                <DataTable value={this.props.accounts}>
                    {dynamicColumns}
                </DataTable>
            );
        }
    }
                
const mapStateToProps = state =>({
    accounts: state.accounts.accounts
})

export default connect(mapStateToProps, {getAccounts} ) (Mali);