import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBillMaterials, deleteBillMaterial } from "../../actions/billMaterials.js";


class BillMaterials extends Component {
    static propTypes = {
        billMaterials : PropTypes.array.isRequired,
        getBillMaterials: PropTypes.func.isRequired,
        deleteBillMaterial: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getBillMaterials();
    }

	render(){
		return (
			<Fragment>
                <h1>Bill Materials</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Bill</th>
                        <th>Type</th>
                        <th>Raw Materials</th>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.billMaterials.map(billMaterial =>(
                            <tr key={billMaterial.id}>
                                <td>{ billMaterial.id }</td>
                                <td>{ billMaterial.bill }</td>
                                <td>{billMaterial.type}</td>
                                <td>{ billMaterial.raw_materials }</td>
                                <td>{billMaterial.product}</td>
                                <td>{billMaterial.quantity}</td>
                                <td>{billMaterial.unit}</td>
                                <td><button onClick={this.props.deleteBillMaterial.bind(this, billMaterial.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    billMaterials: state.billMaterials.billMaterials
})

export default connect(mapStateToProps, { getBillMaterials, deleteBillMaterial} ) (BillMaterials);
