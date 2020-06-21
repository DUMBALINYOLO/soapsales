import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInvoices, deleteInvoice } from '..//../actions/invoices';


class Invoice extends Component {
    static propTypes = {
        invoices : PropTypes.array.isRequired,
        getInvoices: PropTypes.func.isRequired,
        deleteInvoice: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getInvoices();
    }

    render(){
        return (
            <Fragment>
                <h1>INVOICE</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>CUSTOMER</th>
                        <th>PURCHASE ORDER NUMBER</th>
                        <th>INVOICE VALIDATED BY</th>
                        <th>DRAFT</th>
                        <th>SALES PERSON</th>
                        <th>DUE</th>
                        <th>TERMS</th>
                        <th>COMMENTS</th>
                        <th>SHIP FROM</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.inventorycategories.map(invoice =>(
                            <tr key={invoice.id}>
                                <td>{ invoice.id }</td>
                                <td>{ invoice.status }</td>
                                <td>{ invoice.customer }</td>
                                <td>{ invoice.purchase_order_number }</td>
                                <td>{ invoice.invoice_validated_by }</td>
                                <td>{ invoice.draft }</td>
                                <td>{ invoice.sales_person }</td>
                                <td>{ invoice.due }</td>
                                <td>{ invoice.terms }</td>
                                <td>{ invoice.comments }</td>
                                <td>{ invoice.ship_from }</td>
                                <td><button onClick={this.props.deleteInvoices.bind(this, invoice.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    invoices: state.invoices.invoices
})

export default connect(mapStateToProps, {getInvoices, deleteInvoice} ) (Invoice);
