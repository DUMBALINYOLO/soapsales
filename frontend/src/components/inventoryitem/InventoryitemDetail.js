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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Inventory Item Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3">
					<img src={inventoryitem.image} className="img-fluid" alt="product"/>
				</div>
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ inventoryitem.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					TYPE: <span className="text-uppercase">{ inventoryitem.type }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					SUPPLIER: <span className="text-uppercase">{ inventoryitem.supplier }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CATEGORY: <span className="text-uppercase">{ inventoryitem.category }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					LENGTH: <span className="text-uppercase">{ inventoryitem.length }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					WIDTH: <span className="text-uppercase">{ inventoryitem.width }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					HEIGHT: <span className="text-uppercase">{ inventoryitem.height }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					UNIT: <span className="text-uppercase">{ inventoryitem.unit }</span>
					</h4>
					<h4 className="text-blue">
					<strong>
					UNIT PURCHASE PRICE : <span>$</span>
					{ inventoryitem.unit_purchase_price }
					</strong>
					</h4>
					<h4 className="text-blue">
					<strong>
					UNIT SALES PRICE : <span>$</span>
					{ inventoryitem.unit_sales_price }
					</strong>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					MINIMUM ORDER LEVEL: <span className="text-uppercase">{ inventoryitem.minimum_order_level }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					MAXIMUM STOCK LEVEL: <span className="text-uppercase">{ inventoryitem.maximum_stock_level }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					EQUIPMENT COMPONENT: <span className="text-uppercase">{ inventoryitem.equipment_component }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					PRODUCT COMPONENT: <span className="text-uppercase">{ inventoryitem.product_component }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CONSUMABLE VALUE: <span className="text-uppercase">{ inventoryitem.consumable_value }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CONSUMABLE UNIT VALUE: <span className="text-uppercase">{ inventoryitem.consumable_unit_value }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					QUANTITY: <span className="text-uppercase">{ inventoryitem.quantity }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					LOCATIONS: <span className="text-uppercase">{ inventoryitem.locations }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					some info about the products: :</p>
					<p className="text-muted lead">{ inventoryitem.description }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    inventoryitem: state.inventoryitems.inventoryitem
})

export default connect(mapStateToProps, {getInventoryitem} ) (InventoryitemDetail);
