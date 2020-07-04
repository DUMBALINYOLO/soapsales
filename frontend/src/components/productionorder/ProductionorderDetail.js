import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProductionorder } from '..//../actions/productionorders';





class ProductionorderDetail extends Component {

	static propTypes = {
        getProductionorder: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProductionorder(this.props.match.params.id);
    }

	render() {
		const { productionorder } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Production Order Details</h1>
	            	<h1>ID: { productionorder.id } </h1>
                    <h1>DUE: { productionorder.due } </h1>
                    <h1>CUSTOMER: { productionorder.customer } </h1>
                    <h1>PROCESS: { productionorder.process } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    productionorder: state.productionorders.productionorder
})

export default connect(mapStateToProps, {getProductionorder} ) (ProductionorderDetail);
