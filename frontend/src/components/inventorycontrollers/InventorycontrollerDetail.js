import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getInventorycontroller } from '..//../actions/inventorycontrollers';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './index.css';
import {Card} from 'primereact/card';
import {Button} from 'primereact/button';


class InventorycontrollerDetail extends Component {

	static propTypes = {
        getInventorycontroller: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getInventorycontroller(this.props.match.params.id);
    }

	render() {
		const { inventorycontroller } = this.props;
		const footer = (
            <span>
                <Button label="Edit" icon="pi pi-pencil" style={{marginRight: '3.5em'}} className="p-button-warning p-button-rounded" />
                <Button label="Delete" icon="pi pi-trash" className="p-button-danger p-button-rounded" />
            </span>
        );

        return (
			<div className="main">
                <Card style={{color: '#666699',width: '400px', borderRadius: '25px', height: '500px', padding: '20px'}} footer={footer}>
					<h2 style={{textShadow: "2px 2px teal"}}>Inventory Controller Details</h2>
					<div style={{margin: '4em', fontSize: '14px'}}>ID: { inventorycontroller.id }</div>
					<div style={{margin: '4em'}}>EMPLOYEE: { inventorycontroller.employee }</div>
					<div style={{margin: '4em'}}>CAN AUTHORIZE EQUIPMENT REQUISITIONS: { inventorycontroller.can_authorize_equipment_requisitions }</div>
					<div style={{margin: '4em'}}>CAN AUTHORIZE CONSUMABLE REQUISITIONS: { inventorycontroller.can_authorize_consumable_requisitions }</div>
                </Card>
			</div>
        );
    }
}


const mapStateToProps = state =>({
    inventorycontroller: state.inventorycontrollers.inventorycontroller
})

export default connect(mapStateToProps, {getInventorycontroller} ) (InventorycontrollerDetail);
