import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getPricinggroup } from '..//../actions/pricinggroup';





class PricinggroupDetail extends Component {

	static propTypes = {
        getPricinggroup: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getPricinggroup(this.props.match.params.id);
    }

	render() {
		const { pricinggroup } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Pricing Group Details</h1>
	            	<h1>ID: { pricinggroup.id } </h1>
                    <h1>NAME: { pricinggroup.name } </h1>
                    <h1>UNIT SALES PRICE: { pricinggroup.group_pricing_unit_sales_price } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    pricinggroup: state.pricinggroups.pricinggroup
})

export default connect(mapStateToProps, {getPricinggroup} ) (PricinggroupDetail);
