import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getCustomer } from '..//../actions/customers';





class CustomerDetail extends Component {

	static propTypes = {
        getCustomer: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getCustomer(this.props.match.params.id);
    }

	render() {
		const { customer } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Customer Details</h1>
	            	<h1>ID: { customer.id } </h1>
                    <h1>IS ORGANIZATION: { customer.is_organization } </h1>
                    <h1>BILLING ADDRESS: { customer.billing_address } </h1>
                    <h1>BANKING DETAILS: { customer.banking_details } </h1>
                    <h1>WEBSITE: { customer.website } </h1>
                    <h1>BP NUMBER: { customer.bp_number } </h1>
                    <h1>EMAIL: { customer.email } </h1>
                    <h1>PHONE: { customer.phone } </h1>            
                </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    customer: state.customers.customer
})

export default connect(mapStateToProps, {getCustomer} ) (CustomerDetail);
