import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getCurrency } from '..//../actions/currencies';





class CurrencyDetail extends Component {

	static propTypes = {
        getCurrency: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getCurrency(this.props.match.params.id);
    }

	render() {
		const { currency } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Currency Details</h1>
	            	<h1>ID: { currency.id } </h1>
                    <h1>NAME: { currency.name } </h1>
                    <h1>SYMBOL: { currency.symbol } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    currency: state.currencies.currency
})

export default connect(mapStateToProps, {getCurrency} ) (CurrencyDetail);
