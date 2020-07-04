import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcess } from '..//../actions/process';





class ProcessDetail extends Component {

	static propTypes = {
        getProcess: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcess(this.props.match.params.id);
    }

	render() {
		const { process } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Process Details</h1>
	            	<h1>ID: { process.id } </h1>
                    <h1>PARENT PROCESS: { process.parent_process } </h1>
                    <h1>PROCESS EQUIPMENT: { process.process_equipment } </h1>
                    <h1>NAME: { process.name } </h1>
                    <h1>BILL OF MATERIAL: { process.bill_of_materials } </h1>
                    <h1>TYPE: { process.type } </h1>
                    <h1>DURATION: { process.duration } </h1>
                    <h1>RATE: { process.rate } </h1>
                    <h1>PRODUCT LIST: { process.product_list } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    process: state.processes.process
})

export default connect(mapStateToProps, {getProcess} ) (ProcessDetail);
