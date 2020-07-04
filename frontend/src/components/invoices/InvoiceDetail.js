import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getInvoice } from '..//../actions/invoices';





class InvoiceDetail extends Component {

	static propTypes = {
        getInvoice: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getInvoice(this.props.match.params.id);
    }

	render() {
		const { invoice } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Invoice Details</h1>
	            	<h1>ID: { invoice.id } </h1>
                    <h1>INVOICE NUMBER: { invoice.invoice_number } </h1>
                    <h1>CUSTOMER: { invoice.customer } </h1>
                    <h1>PURCHASE ORDER NUMBER: { invoice.purchase_order_number } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    invoice: state.invoices.invoice
})

export default connect(mapStateToProps, {getInvoice} ) (InvoiceDetail);
