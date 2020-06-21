import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcess, deleteProcess } from "../../actions/process";


class Process extends Component {
    static propTypes = {
        process : PropTypes.array.isRequired,
        getProcess: PropTypes.func.isRequired,
        deleteProcess: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProcess();
    }

	render(){
		return (
			<Fragment>
                <h1>PROCESS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>PARENT PROCESS</th>
                        <th>PROCESS EQUIPMENT</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>BILL OF MATERIALS</th>
                        <th>TYPE</th>
                        <th>DURATION</th>
                        <th>RATE</th>
                        <th>PRODUCT LIST</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.process.map(process =>(
                            <tr key={process.id}>
                                <td>{ process.id }</td>
                                <td>{ process.parent_process }</td>
                                <td>{ process.process_equipment }</td>
                                <td>{process.name}</td>
                                <td>{ process.description }</td>
                                <td>{process.bill_of_materials}</td>
                                <td>{process.type}</td>
                                <td>{process.duration}</td>
                                <td>{process.rate}</td>
                                <td>{process.product_list}</td>
                                <td><button onClick={this.props.deleteProcess.bind(this, process.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    process: state.process.process
})

export default connect(mapStateToProps, { getProcess, deleteProcess} ) (Process);
