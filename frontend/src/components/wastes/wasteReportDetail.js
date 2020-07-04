import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getWasteReport } from '..//../actions/wasteReports';





class WasteReportDetail extends Component {

	static propTypes = {
        getWasteReport: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getWasteReport(this.props.match.params.id);
    }

	render() {
		const { wastereport } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Waste Report Details</h1>
	            	<h1>ID: { wastereport.id } </h1>
                    <h1>PRODUCTS: { wastereport.product } </h1>
                    <h1>UNIT: { wastereport.unit } </h1>
                    <h1>QUANTITY: { wastereport.quantity } </h1>
                    <h1>RECORDED BY: { wastereport.recorded_by } </h1>
                    <h1>COMMENTS: { wastereport.comments } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    wastereport: state.wastereports.wastereport
})

export default connect(mapStateToProps, {getWasteReport} ) (WasteReportDetail);
