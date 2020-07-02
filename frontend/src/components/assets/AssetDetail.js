import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getAsset } from '..//../actions/assets';





class AssetDetail extends Component {

	static propTypes = {
        getAsset: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getAsset(this.props.match.params.id);
    }

	render() {
		const { asset } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Asset Details</h1>
	            	<h1>ID: { asset.id } </h1>
                    <h1>NAME: { asset.name } </h1>
                    <h1>CATEGORY: { asset.category } </h1>
                    <h1>INITIAL VALUE: { asset.initial_value } </h1>
                    <h1>DEPRECIATION PERIOD: { asset.depreciation_period } </h1>
                    <h1>DATE: { asset.init_date } </h1>
                    <h1>DEPRECIATION METHOD: { asset.depreciation_method } </h1>
                    <h1>SALVAGE VALUE: { asset.salvage_value } </h1>
                    <h1>CREDIT ACCOUNT: { asset.credit_account } </h1>
                    <h1>CREATED BY: { asset.created_by } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    asset: state.assets.asset
})

export default connect(mapStateToProps, {getAsset} ) (AssetDetail);
