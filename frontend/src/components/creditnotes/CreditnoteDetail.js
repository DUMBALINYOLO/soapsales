import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getCreditnote } from '..//../actions/creditnotes';





class CreditnoteDetail extends Component {

	static propTypes = {
        getCreditnote: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getCreditnote(this.props.match.params.id);
    }

	render() {
		const { creditnote } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Credit Note Details</h1>
	            	<h1>ID: { creditnote.id } </h1>
                    <h1>DATE: { creditnote.date } </h1>
                    <h1>INVOICE: { creditnote.invoice } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    creditnote: state.creditnotes.creditnote
})

export default connect(mapStateToProps, {getCreditnote} ) (CreditnoteDetail);
