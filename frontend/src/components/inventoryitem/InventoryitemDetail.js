import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getInventoryitem } from '..//../actions/inventoryitems';





class InventoryitemDetail extends Component {

	static propTypes = {
        getInventoryitem: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getInventoryitem(this.props.match.params.id);
    }

	render() {
		const { inventoryitem } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Inventory Controller Details</h1>
	            	<h1>ID: { inventoryitem.id } </h1>
                    <h1>NAME: { inventoryitem.name } </h1>
                    <h1>TYPE: { inventoryitem.type } </h1>
                    <h1>CATEGORY: { inventoryitem.category } </h1>
                    <h1>UNIT: { inventoryitem.unit } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    inventoryitem: state.inventoryitems.inventoryitem
})

export default connect(mapStateToProps, {getInventoryitem} ) (InventoryitemDetail);
