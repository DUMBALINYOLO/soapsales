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
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Product Details</h1>
	            	<h1>ID: { product.id } </h1>
                    <h1>NAME: { product.name } </h1>
                    <h1>DESCRIPTION: { product.description } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    product: state.products.product
})

export default connect(mapStateToProps, {getProduct} ) (ProductDetail);
