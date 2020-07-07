import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getCurrency } from '..//../actions/currencies';
import "./index.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


class CurrencyDetail extends Component {

	static propTypes = {
        getCurrency: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getCurrency(this.props.match.params.id);
    }

	render() {
		const { currency } = this.props;
		const footer = (
            <span>
                <Button label="Edit" icon="pi pi-pencil" style={{marginRight: '3.5em'}} className="p-button-warning p-button-rounded" />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger p-button-rounded" />
            </span>
        );

        return (
			<div className="main">
                <Card style={{color: '#666699',width: '400px', borderRadius: '25px', height: '500px', padding: '20px'}} footer={footer}>
					<h2 style={{textShadow: "2px 2px teal"}}>Currency Details</h2>
					<div style={{margin: '4em', fontSize: '14px'}}>ID: {currency.id}</div>
					<div style={{margin: '4em'}}>NAME: {currency.name}</div>
					<div  style={{margin: '4em'}}>SYMBOL: {currency.symbol}</div>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    currency: state.currencies.currency
})

export default connect(mapStateToProps, {getCurrency} ) (CurrencyDetail);
