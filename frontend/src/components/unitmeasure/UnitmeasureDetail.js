import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getUnitmeasure } from '..//../actions/unitmeasure';





class UnitmeasureDetail extends Component {

	static propTypes = {
        getUnitmeasure: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getUnitmeasure(this.props.match.params.id);
    }

	render() {
		const { unitmeasure } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Unit Measure Details</h1>
	            	<h1>ID: { unitmeasure.id } </h1>
                    <h1>NAME: { unitmeasure.name } </h1>
                    <h1>EVAL STRING: { unitmeasure.eval_string } </h1>
                    <h1>IS DELIVERED: { unitmeasure.is_delivered } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    unitmeasure: state.unitmeasures.unitmeasure
})

export default connect(mapStateToProps, {getUnitmeasure} ) (UnitmeasureDetail);
