import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getTax } from '..//../actions/taxes';





class TaxDetail extends Component {

	static propTypes = {
        getTax: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getTax(this.props.match.params.id);
    }

	render() {
		const { tax } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Tax Details</h1>
	            	<h1>ID: { tax.id } </h1>
                    <h1>NAME: { tax.name } </h1>
                    <h1>RATE: { tax.rate } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    tax: state.taxes.tax
})

export default connect(mapStateToProps, {getTax} ) (TaxDetail);
