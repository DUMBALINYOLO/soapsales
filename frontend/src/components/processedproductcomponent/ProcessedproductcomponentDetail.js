import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessedproductcomponent } from '..//../actions/processedproductcomponents';





class ProcessedproductcomponentDetail extends Component {

	static propTypes = {
        getProcessedproductcomponent: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessedproductcomponent(this.props.match.params.id);
    }

	render() {
		const { processedproductcomponent } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Processed Product Component Details</h1>
	            	<h1>ID: { processedproductcomponent.id } </h1>
                    <h1>NAME: { processedproductcomponent.name } </h1>
                    <h1>DESCRIPTION: { processedproductcomponent.description } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processedproductcomponent: state.processproducts.processedproductcomponent
})

export default connect(mapStateToProps, {getProcessedproductcomponent} ) (ProcessedproductcomponentDetail);
