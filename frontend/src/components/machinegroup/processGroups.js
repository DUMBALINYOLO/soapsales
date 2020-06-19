import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProcessGroups, deleteProcessGroup } from "../../actions/processGroups";


class ProcessGroups extends Component {
    static propTypes = {
        processGroups : PropTypes.array.isRequired,
        getProcessGroups: PropTypes.func.isRequired,
        deleteProcessGroup: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getProcessGroups();
    }

	render(){
		return (
			<Fragment>
                <h1>PROCESS GROUPS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.processGroups.map(process =>(
                            <tr key={process.id}>
                                <td>{ process.id }</td>
                                <td>{ process.name }</td>
                                <td>{ process.description }</td>
                                <td><button onClick={this.props.deleteProcessGroup.bind(this, process.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    processGroups: state.processGroups.processGroups
})

export default connect(mapStateToProps, { getProcessGroups, deleteProcessGroup} ) (ProcessGroups);
