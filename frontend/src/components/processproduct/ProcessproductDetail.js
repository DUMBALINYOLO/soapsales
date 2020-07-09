import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getProcessproduct } from '..//../actions/processproducts';





class ProcessproductDetail extends Component {

	static propTypes = {
        getProcessproduct: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getProcessproduct(this.props.match.params.id);
    }

	render() {
		const { processproduct } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Process Product Details</h1>
	            	<h1>ID: { processproduct.id } </h1>
                    <h1>NAME: { processproduct.name } </h1>
                    <h1>DESCRIPTION: { processproduct.description } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    processproduct: state.processproducts.processproduct
})

export default connect(mapStateToProps, {getProcessproduct} ) (ProcessproductDetail);
