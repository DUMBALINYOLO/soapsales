import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessproduct } from '..//../actions/processedproducts';





class ProcessproductDetail extends Component {

	static propTypes = {
        getProcessproduct: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessproduct(this.props.match.params.id);
    }

	render() {
		const { processproduct } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Processed Product Details</h1>
	            	<h1>ID: { processproduct.id } </h1>
                    <h1>DIRECT PRICE: { processproduct.direct_price } </h1>
                    <h1>MARGIN: { processproduct.margin } </h1>
                    <h1>MARKUP: { processproduct.markup } </h1>
                    <h1>SKU: { processproduct.sku } </h1>
                    <h1>PRICING METHOD: { processproduct.pricing_method } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processproduct: state.processproducts.processproduct
})

export default connect(mapStateToProps, {getProcessproduct} ) (ProcessproductDetail);
