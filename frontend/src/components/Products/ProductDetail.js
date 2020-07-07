import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProduct } from '..//../actions/products';


class ProductDetail extends Component {

	static propTypes = {
        getProduct: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProduct(this.props.match.params.id);
    }

	render() {
		const { product } = this.props;

        return (
			<div className="card py-5">
				<div className="row">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Product Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{product.id}</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Name: <span className="text-uppercase">{product.name}</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					some info about the products:</p>
					<p className="text-muted lead">{product.description}</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    product: state.products.product
})

export default connect(mapStateToProps, {getProduct} ) (ProductDetail);
