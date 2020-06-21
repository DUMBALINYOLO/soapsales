import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcessproducts, deleteProcessproduct } from "../../actions/processedproducts";


class Processproduct extends Component {
    static propTypes = {
        processproducts : PropTypes.array.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
        deleteProcessproduct: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProcessproducts();
    }

	render(){
		return (
			<Fragment>
                <h1>PROCESSED PRODUCT COMPONENTS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>DIRECT PRICE</th>
                        <th>MARGIN</th>
                        <th>MARKUP</th>
                        <th>SKU</th>
                        <th>PRICING METHOD</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.processproducts.map(processproduct =>(
                            <tr key={processproduct.id}>
                                <td>{ processproduct.id }</td>
                                <td>{ processproduct.direct_price }</td>
                                <td>{ processproduct.margin }</td>
                                <td>{processproduct.markup}</td>
                                <td>{ processproduct.sku }</td>
                                <td>{processproduct.pricing_method}</td>
                                <td><button onClick={this.props.deleteProcessproduct.bind(this, processproduct.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    processproducts: state.processproducts.processproducts
})

export default connect(mapStateToProps, { getProcessproducts, deleteProcessproduct} ) (Processproduct);
