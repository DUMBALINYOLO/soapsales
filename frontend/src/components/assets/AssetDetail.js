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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Asset Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{asset.id}</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Name: <span className="text-uppercase">{asset.name}</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Category: <span className="text-uppercase">{asset.category}</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					Initial Value : <span>$</span>
					{asset.initial_value}
					</strong>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Depreciation Period: <span className="text-uppercase">{ asset.depreciation_period }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Init Date: <span className="text-uppercase">{ asset.init_date }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DEPRECIATION METHOD: <span className="text-uppercase">{ asset.depreciation_method }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SALVAGE VALUE: <span className="text-uppercase">{ asset.salvage_value }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CREDIT ACCOUNT: <span className="text-uppercase">{ asset.credit_account }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CREATED BY: <span className="text-uppercase">{ asset.created_by }</span>
					</h4>
	            </div>
	            </div>
            </div>
        );
    }
}



const mapStateToProps = state =>({
    asset: state.assets.asset
})

export default connect(mapStateToProps, {getAsset} ) (AssetDetail);
