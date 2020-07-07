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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Invoice Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ invoice.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CUSTOMER: <span className="text-uppercase">{ invoice.customer }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PURCHASE ORDER NUMBER: <span className="text-uppercase">{ invoice.purchase_order_number }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					QUOTATION DATE: <span className="text-uppercase">{ invoice.quotation_date }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DRAFT: <span className="text-uppercase">{ invoice.draft }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					STATUS: <span className="text-uppercase">{ invoice.status }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DUE: <span className="text-uppercase">{ invoice.due }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SHIP FROM: <span className="text-uppercase">{ invoice.ship_from }</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					COST OF GOODS SOLD : <span>$</span>
					{ invoice.cost_of_goods_sold }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL : <span>$</span>
					{ invoice.total }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					RETURNED TOTAL : <span>$</span>
					{ invoice.returned_total }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL DUE : <span>$</span>
					{ invoice.total_due }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					ON CREDIT : <span>$</span>
					{ invoice.on_credit }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					OVER DUE : <span>$</span>
					{ invoice.overdue }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL PAID : <span>$</span>
					{ invoice.total_paid }
					</strong>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					LINES: <span className="text-uppercase">{ invoice.lines }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					OVER DUE DAYS: <span className="text-uppercase">{ invoice.overdue_days }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SALES PERSON: <span className="text-uppercase">{ invoice.salesperson }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					TERMS :</p>
					<p className="text-muted lead">{ invoice.terms }</p>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					COMMENTS :</p>
					<p className="text-muted lead">{ invoice.comments }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    invoice: state.invoices.invoice
})

export default connect(mapStateToProps, {getInvoice} ) (InvoiceDetail);
