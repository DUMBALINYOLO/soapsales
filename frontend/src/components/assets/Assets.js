import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAssets, deleteAsset } from '..//../actions/assets';


class Assets extends Component {
    static propTypes = {
        assets : PropTypes.array.isRequired,
        getAssets: PropTypes.func.isRequired,
        deleteAsset: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getAssets();
    }

	render(){
		return (
			<Fragment>
                <h1>Assets</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>CATEGORY</th>
                        <th>INIT VALUE</th>
                        <th>DEPRECIATION PERIOD</th>
                        <th>INIT DATE</th>
                        <th>DEPRECIATION METHOD</th>
                        <th>SALVAGE VALUE</th>
                        <th>CREDIT ACCOUNT</th>
                        <th>CREATED BY</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.assets.map(asset =>(
                            <tr key={asset.id}>
                                <td>{ asset.id }</td>
                                <td>{ asset.name }</td>
                                <td>{ asset.description }</td>
                                <td>{asset.category}</td>
                                <td>{asset.initial_value}</td>
                                <td>{asset.depreciation_period}</td>
                                <td>{asset.init_date}</td>
                                <td>{asset.depreciation_method}</td>
                                <td>{asset.salvage_value}</td>
                                <td>{asset.credit_account}</td>
                                <td>{asset.created_by}</td>
                                <td><button onClick={this.props.deleteAsset.bind(this, asset.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    assets: state.assets.assets
})

export default connect(mapStateToProps, {getAssets, deleteAsset} ) (Assets);
