import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProductline } from '..//../actions/productlines';





class ProductlineDetail extends Component {

	static propTypes = {
        getProductline: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProductline(this.props.match.params.id);
    }

	render() {
		const { productline } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Product Line Details</h1>
	            	<h1>ID: { productline.id } </h1>
                    <h1>PRODUCT: { productline.product } </h1>
                    <h1>UNIT PRICE: { productline.unit_price } </h1>
                    <h1>VALUE: { productline.value } </h1>
                    <h1>QUANTITY: { productline.quantity } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    productline: state.productlines.productline
})

export default connect(mapStateToProps, {getProductline} ) (ProductlineDetail);
