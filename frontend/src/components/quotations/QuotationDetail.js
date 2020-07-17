import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getQuotation } from '..//../actions/quotations';





class QuotationDetail extends Component {

	static propTypes = {
        getQuotation: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getQuotation(this.props.match.params.id);
    }

	render() {
		const { quotation } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Quotation Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ quotation.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CUSTOMER: <span className="text-uppercase">{quotation.customer }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PURCHASE ORDER NUMBER: <span className="text-uppercase">{quotation.purchase_order_number }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					QUOTATION DATE: <span className="text-uppercase">{quotation.quotation_date }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DRAFT: <span className="text-uppercase">{quotation.draft }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					STATUS: <span className="text-uppercase">{quotation.status }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DUE: <span className="text-uppercase">{quotation.due }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SHIP FROM: <span className="text-uppercase">{quotation.ship_from }</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					COST OF GOODS SOLD : <span>$</span>
					{quotation.cost_of_goods_sold }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL : <span>$</span>
					{ quotation.total }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					RETURNED TOTAL : <span>$</span>
					{ quotation.returned_total }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL DUE : <span>$</span>
					{ quotation.total_due }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					ON CREDIT : <span>$</span>
					{ quotation.on_credit }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					OVER DUE : <span>$</span>
					{ quotation.overdue }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					TOTAL PAID : <span>$</span>
					{ quotation.total_paid }
					</strong>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					LINES: <span className="text-uppercase">{ quotation.lines }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					OVER DUE DAYS: <span className="text-uppercase">{ quotation.overdue_days }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SALES PERSON: <span className="text-uppercase">{ quotation.salesperson }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					TERMS :</p>
					<p className="text-muted lead">{ quotation.terms }</p>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					COMMENTS :</p>
					<p className="text-muted lead">{ quotation.comments }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    quotation: state.quotations.quotaion
})

export default connect(mapStateToProps, {getQuotation} ) (QuotationDetail);
