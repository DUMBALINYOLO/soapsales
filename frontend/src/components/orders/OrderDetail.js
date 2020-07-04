import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getOrder } from '..//../actions/orders';





class OrderDetail extends Component {

	static propTypes = {
        getOrder: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getOrder(this.props.match.params.id);
    }

	render() {
		const { order } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Order  Details</h1>
	            	<h1>ID: { order.id } </h1>
                    <h1>RECEIVEDD TO DATE: { order.received_to_date } </h1>
                    <h1>STATUS: { order.status } </h1>
                    <h1>SUPPLIER: { order.supplier } </h1>
                    <h1>TRACKER NUMBER: { order.tracker_number } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    order: state.orders.order
})

export default connect(mapStateToProps, {getOrder} ) (OrderDetail);
