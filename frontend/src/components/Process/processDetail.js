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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Process Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase"> { process.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					NAME: <span className="text-uppercase">{ process.name }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					TYPE: <span className="text-uppercase">{ process.type }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					BILL OF MATERIALS: <span className="text-uppercase">{ process.bill_of_materials }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PROCESS EQUIPMENT: <span className="text-uppercase">{ process.process_equipment }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PRODUCT LIST: <span className="text-uppercase">{ process.product_list }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PARENT PROCESS: <span className="text-uppercase">{ process.parent_process } </span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CHILD PROCESS: <span className="text-uppercase">{ process.child_processes } </span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					RATE: <span className="text-uppercase">{ process.rate }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DURATION: <span className="text-uppercase">{ process.duration }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PROCESS TYPE STRING: <span className="text-uppercase">{ process.process_type_string }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					IS SUBPROCESS: <span className="text-uppercase">{ process.is_subprocess }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					DESCRIPTION :</p>
					<p className="text-muted lead">{ process.description }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    process: state.processes.process
})

export default connect(mapStateToProps, {getProcess} ) (ProcessDetail);
