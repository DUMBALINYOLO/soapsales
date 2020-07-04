import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessGroup } from '..//../actions/processGroups';





class ProcessGroupDetail extends Component {

	static propTypes = {
        getProcessGroup: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessGroup(this.props.match.params.id);
    }

	render() {
		const { processgroup } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Process Group Details</h1>
	            	<h1>ID: { processgroup.id } </h1>
                    <h1>NAME: { processgroup.name } </h1>
                    <h1>MACHINES: { processgroup.machines } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processgroup: state.processgroups.processgroup
})

export default connect(mapStateToProps, {getProcessGroup} ) (ProcessGroupDetail);
