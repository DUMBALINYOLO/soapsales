import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessedproduct } from '..//../actions/processedproducts';





class ProcessedproductsDetail extends Component {

	static propTypes = {
        getProcessedproduct: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessedproduct(this.props.match.params.id);
    }

	render() {
		const { processedproduct } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Processed Product Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ processedproduct.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PRODUCT: <span className="text-uppercase">{ processedproduct.product }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					LOCATION: <span className="text-uppercase">{ processedproduct.location }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					QUANTITY: <span className="text-uppercase">{ processedproduct.quantity }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					STATUS: <span className="text-uppercase">{ processedproduct.status }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					NOTES: <span className="text-uppercase">{ processedproduct.notes }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					UP DATED: <span className="text-uppercase">{ processedproduct.updated }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PRODUCT COMPONENT: <span className="text-uppercase">{ processedproduct.product_component }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CATEGORY: <span className="text-uppercase">{ processedproduct.category }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					UNIT: <span className="text-uppercase">{ processedproduct.unit }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					REVIEW NEEDED: <span className="text-uppercase">{ processedproduct.review_needed }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					MINIMUM ORDER LEVEL: <span className="text-uppercase">{ processedproduct.minimum_order_level }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					MINIMUM STOCK LEVEL: <span className="text-uppercase">{ processedproduct.maximum_stock_level }</span>
					</h4>
                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					UNIT SALES PRICE: <span className="text-uppercase">{ processedproduct.unit_sales_price }</span>
					</h4>
	            </div>
	            </div>
            </div>
        );
    }
}



const mapStateToProps = state =>({
    processedproduct: state.processedproducts.processedproduct
})

export default connect(mapStateToProps, {getProcessedproduct} ) (ProcessedproductsDetail);
