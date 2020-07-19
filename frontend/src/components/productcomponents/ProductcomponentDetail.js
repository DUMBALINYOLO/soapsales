import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProductcomponent } from '..//../actions/productcomponents';





class ProductcomponentDetail extends Component {

	static propTypes = {
        getProductcomponent: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProductcomponent(this.props.match.params.id);
    }

	render() {
		const { productcomponent } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Product Component Details</h1>
	            	<h1>ID: { productcomponent.id } </h1>
                    <h1>DIRECT PRICE: { productcomponent.direct_price } </h1>
                    <h1>MARGIN: { productcomponent.margin } </h1>
                    <h1>MARKUP: { productcomponent.markup } </h1>
                    <h1>SKU: { productcomponent.sku } </h1>
                    <h1>PRICING METHOD: { productcomponent.pricing_method } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    productcomponent: state.productcomponents.productcomponent
})

export default connect(mapStateToProps, {getProductcomponent} ) (ProductcomponentDetail);
