import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessMachine } from '..//../actions/processmachines';





class ProcessMachineDetail extends Component {

	static propTypes = {
        getProcessMachine: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessMachine(this.props.match.params.id);
    }

	render() {
		const { processmachine } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Process Machine Details</h1>
	            	<h1>ID: { processmachine.id } </h1>
                    <h1>NAME: { processmachine.name } </h1>
                    <h1>DATE COMMISSIONED: { processmachine.date_commissioned } </h1>
                    <h1>MACHINE GROUP: { processmachine.machine_group } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processmachine: state.processmachines.processmachine
})

export default connect(mapStateToProps, {getProcessMachine} ) (ProcessMachineDetail);
