import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getInventorycontroller } from '..//../actions/inventorycontrollers';





class InventorycontrollerDetail extends Component {

	static propTypes = {
        getInventorycontroller: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getInventorycontroller(this.props.match.params.id);
    }

	render() {
		const { inventorycontroller } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Inventory Controller Details</h1>
	            	<h1>ID: { inventorycontroller.id } </h1>
                    <h1>EMPLOYEE: { inventorycontroller.employee } </h1>
                    <h1>CAN AUTHORIZE EQUIPMENT REQUISITIONS: { inventorycontroller.can_authorize_equipment_requisitions } </h1>
                    <h1>CAN AUTHORIZE CONSUMABLE REQUISITIONS: { inventorycontroller.can_authorize_consumable_requisitions } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    inventorycontroller: state.inventorycontrollers.inventorycontroller
})

export default connect(mapStateToProps, {getInventorycontroller} ) (InventorycontrollerDetail);
