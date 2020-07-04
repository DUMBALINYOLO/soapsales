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
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Payment Details</h1>
	            	<h1>ID: { payment.id } </h1>
                    <h1>DATE: { payment.date } </h1>
                    <h1>AMOUNT: { payment.amount } </h1>
                    <h1>INVOICE: { payment.invoice } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    payment: state.payments.payment
})

export default connect(mapStateToProps, {getPayment} ) (PaymentDetail);
