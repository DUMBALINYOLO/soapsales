import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBillpayment } from '..//../actions/billpayments';





class BillPaymentDetail extends Component {

	static propTypes = {
        getBillpayment: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getBillpayment(this.props.match.params.id);
    }

	render() {
		const { billpayment } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Bill Payment Details</h1>
	            	<h1>ID: { billpayment.id } </h1>
                    <h1>DATE: { billpayment.date } </h1>
                    <h1>ACCOUNT: { billpayment.account } </h1>
                    <h1>BILL: { billpayment.bill } </h1>
                    <h1>AMOUNT: { billpayment.amount } </h1>
                    <h1>MEMO: { billpayment.memo } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    billpayment: state.billpayments.billpayment
})

export default connect(mapStateToProps, {getBillpayment} ) (BillPaymentDetail);
