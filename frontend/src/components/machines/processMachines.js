import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcessMachines, deleteProcessMachine } from "../../actions/processMachines";


class ProcessMachines extends Component {
    static propTypes = {
        processMachines : PropTypes.array.isRequired,
        getProcessMachines: PropTypes.func.isRequired,
        deleteProcessMachine: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProcessMachines();
    }

	render(){
		return (
			<Fragment>
                <h1>PROCESS MACHINE</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>DATE COMMISSIONED</th>
                        <th>MACHINE GROUP</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.processMachines.map(process =>(
                            <tr key={process.id}>
                                <td>{ process.id }</td>
                                <td>{ process.name }</td>
                                <td>{ process.description }</td>
                                <td>{process.date_commissioned}</td>
                                <td>{process.machine_group}</td>
                                <td><button onClick={this.props.deleteProcessMachine.bind(this, process.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    processMachines: state.processMachines.processMachines
})

export default connect(mapStateToProps, { getProcessMachines, deleteProcessMachine} ) (ProcessMachines);
