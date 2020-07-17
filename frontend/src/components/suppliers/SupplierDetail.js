import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getSupplier } from '..//../actions/suppliers';


class SupplierDetail extends Component {

	static propTypes = {
        getSupplier: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getSupplier(this.props.match.params.id);
    }

	render() {
		const { supplier } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Supplier Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ supplier.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					NAME: <span className="text-uppercase">{ supplier.name }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					IS ORGANIZATION: <span className="text-uppercase">{ supplier.is_organization }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					IS INDIVIDUAL: <span className="text-uppercase">{ supplier.is_individual }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BANKING DETAILS: <span className="text-uppercase">{ supplier.business_address }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BP NUMBER: <span className="text-uppercase">{ supplier.bp_number }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					WEBSITE:</p>
					<p className="text-muted lead">{ supplier.website }</p>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					EMAIL:</p>
					<p className="text-muted lead">{ supplier.email }</p>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PHONE: <span className="text-uppercase">{ supplier.phone }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CONTACT PERSON: <span className="text-uppercase">{ supplier.contact_person }</span>
					</h4>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    supplier: state.suppliers.supplier
})

export default connect(mapStateToProps, {getSupplier} ) (SupplierDetail);
