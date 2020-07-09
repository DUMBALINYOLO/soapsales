import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getOrderpayment } from '..//../actions/orderpayments';





class OrderpaymentDetail extends Component {

	static propTypes = {
        getOrderpayment: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getOrderpayment(this.props.match.params.id);
    }

	render() {
		const { orderpayment } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Order Payment Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ orderpayment.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ENTRY: <span className="text-uppercase">{ orderpayment.entry }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ORDER: <span className="text-uppercase">{ orderpayment.order }</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					AMOUNT: <span>$</span>
					{ orderpayment.amount }
					</strong>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DATE: <span className="text-uppercase">{ orderpayment.date }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					COMMENTS :</p>
					<p className="text-muted lead">{ orderpayment.comments }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    orderpayment: state.orderpayments.orderpayment
})

export default connect(mapStateToProps, {getOrderpayment} ) (OrderpaymentDetail);
