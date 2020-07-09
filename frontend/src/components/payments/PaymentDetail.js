import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getPayment } from '..//../actions/payments';





class PaymentDetail extends Component {

	static propTypes = {
        getPayment: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getPayment(this.props.match.params.id);
    }

	render() {
		const { payment } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Payment Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase"> { payment.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SALES REP: <span className="text-uppercase">{ payment.sales_rep }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					REFERENCE NUMBER: <span className="text-uppercase">{ payment.reference_number }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					AMOUNT: <span className="text-uppercase">payment.amount }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					INVOICE: <span className="text-uppercase">{ payment.invoice }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					METHOD: <span className="text-uppercase">{ payment.method }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DUE: <span className="text-uppercase">{ payment.due }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DATE: <span className="text-uppercase">{ payment.date }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					COMMENTS :</p>
					<p className="text-muted lead">{ payment.comments }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    payment: state.payments.payment
})

export default connect(mapStateToProps, {getPayment} ) (PaymentDetail);
