import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessRate } from '..//../actions/processRates';





class ProcessRateDetail extends Component {

	static propTypes = {
        getProcessRate: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessRate(this.props.match.params.id);
    }

	render() {
		const { processrate } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Process Rate Details</h1>
	            	<h1>ID: { processrate.id } </h1>
                    <h1>UNIT: { processrate.unit } </h1>
                    <h1>UNIT TIME: { processrate.unit_time } </h1>
                    <h1>QUANTITY: { processrate.quantity } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processrate: state.processrates.processrate
})

export default connect(mapStateToProps, {getProcessRate} ) (ProcessRateDetail);
