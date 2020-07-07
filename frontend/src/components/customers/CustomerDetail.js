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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Customer Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ customer.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					IS ORGANIZATION: <span className="text-uppercase">{ customer.is_organization }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BANKING DETAILS: <span className="text-uppercase">{ customer.banking_details }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BILLING ADDRESS: <span className="text-uppercase">{ customer.billing_address }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BP NUMBER: <span className="text-uppercase">{ customer.bp_number }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					WEBSITE:</p>
					<p className="text-muted lead">{ customer.website }</p>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					EMAIL:</p>
					<p className="text-muted lead">{ customer.email }</p>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PHONE: <span className="text-uppercase">{ customer.phone }</span>
					</h4>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    customer: state.customers.customer
})

export default connect(mapStateToProps, {getCustomer} ) (CustomerDetail);
