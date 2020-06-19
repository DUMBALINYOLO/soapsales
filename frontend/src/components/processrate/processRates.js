import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcessRates, deleteProcessRate } from "../../actions/processRates";


class ProcessRates extends Component {
    static propTypes = {
        processRates : PropTypes.array.isRequired,
        getProcessRates: PropTypes.func.isRequired,
        deleteProcessRate: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProcessRates();
    }

	render(){
		return (
			<Fragment>
                <h1>PROCESS MACHINE</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Unit</th>
                        <th>Unit Time</th>
                        <th>Quantity</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.processRates.map(process =>(
                            <tr key={process.id}>
                                <td>{ process.id }</td>
                                <td>{ process.unit }</td>
                                <td>{ process.unit_time }</td>
                                <td>{process.quantity}</td>
                                <td><button onClick={this.props.deleteProcessRate.bind(this, process.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    processRates: state.processRates.processRates
})

export default connect(mapStateToProps, { getProcessRates, deleteProcessRate} ) (ProcessRates);
