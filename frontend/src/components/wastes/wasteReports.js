import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWasteReports, deleteWasteReport } from "../../actions/wasteReports";


class WasteReports extends Component {
    static propTypes = {
        wasteReports : PropTypes.array.isRequired,
        getWasteReports: PropTypes.func.isRequired,
        deleteWasteReport: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getWasteReports();
    }

	render(){
		return (
			<Fragment>
                <h1>PRODUCTS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Unit</th>
                        <th>Quantity</th>
                        <th>Comments</th>
                        <th>Recorded By</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.wasteReports.map(wasteReport =>(
                            <tr key={wasteReport.id}>
                                <td>{ wasteReport.id }</td>
                                <td>{ wasteReport.product }</td>
                                <td>{ wasteReport.unit }</td>
                                <td>{wasteReport.quantity}</td>
                                <td>{wasteReport.comments}</td>
                                <td>{wasteReport.recorded_by}</td>
                                <td><button onClick={this.props.deleteWasteReport.bind(this, wasteReport.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    wasteReports: state.wasteReports.wasteReports
})

export default connect(mapStateToProps, { getWasteReports, deleteWasteReport} ) (WasteReports);
