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
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Order Payment Details</h1>
	            	<h1>ID: { orderpayment.id } </h1>
                    <h1>DATE: { orderpayment.date } </h1>
                    <h1>AMOUNT: { orderpayment.amount } </h1>
                    <h1>ORDER: { orderpayment.order } </h1>
                    <h1>ENTRY: { orderpayment.entry } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    orderpayment: state.orderpayments.orderpayment
})

export default connect(mapStateToProps, {getOrderpayment} ) (OrderpaymentDetail);
