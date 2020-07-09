import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBookkeeper } from '..//../actions/bookkeepers';
import "./index.css";
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


class BookkeeperDetail extends Component {

	static propTypes = {
        getBookkeeper: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getBookkeeper(this.props.match.params.id);
    }

	render() {
		const { bookkeeper } = this.props;
		const footer = (
            <span>
                <Button label="Edit" icon="pi pi-pencil" style={{marginRight: '3.5em'}} className="p-button-warning p-button-rounded" />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger p-button-rounded" />
            </span>
        );

        return (
			<div className="main">
                <Card style={{color: '#666699',width: '400px', borderRadius: '25px', height: '500px', padding: '20px'}} footer={footer}>
					<h2 style={{textShadow: "2px 2px teal"}}>Bookkeeper Details</h2>
					<div style={{margin: '4em', fontSize: '14px'}}>ID: { bookkeeper.id }</div>
					<div style={{margin: '1em'}}>EMPLOYEE: { bookkeeper.employee }</div>
					<div  style={{margin: '1em'}}>CAN CREATE JOURNALS: { bookkeeper.can_create_journals }</div>
					<div style={{margin: '1em'}}>CAN CREATE ORDERS AND INVOICES: { bookkeeper.can_create_orders_and_invoices }</div>
					<div style={{margin: '1em'}}>CAN RECORD EXPENSES: { bookkeeper.can_record_expenses }</div>
					<div style={{margin: '1em'}}>CAN RECORD ASSETS: { bookkeeper.can_record_assets }</div>
                </Card>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    bookkeeper: state.bookkeepers.bookkeeper
})

export default connect(mapStateToProps, {getBookkeeper} ) (BookkeeperDetail);
