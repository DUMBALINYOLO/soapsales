import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getDebitnote } from '..//../actions/debitnotes';





class DebitnoteDetail extends Component {

	static propTypes = {
        getDebitnote: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getDebitnote(this.props.match.params.id);
    }

	render() {
		const { debitnote } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Debit Note Details</h1>
	            	<h1>ID: { debitnote.id } </h1>
                    <h1>DATE: { debitnote.date } </h1>
                    <h1>ORDER: { debitnote.order } </h1>
                    <h1>ENTRY: {debitnote.entry}</h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    debitnote: state.debitnotes.debitnote
})

export default connect(mapStateToProps, {getDebitnote} ) (DebitnoteDetail);
