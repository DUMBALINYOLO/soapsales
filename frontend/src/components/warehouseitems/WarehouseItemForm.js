import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWarehouses } from '..//../actions/warehouses';
import { getInventoryitems } from '..//../actions/inventoryitems';
import { getStoragemedias } from '..//../actions/storagemedia';
import { getProcessedproducts } from '..//../actions/processedproducts';
import { addWarehouseitem } from '..//../actions/warehouseitems';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputNumber} from 'primereact/inputnumber';
import {Button} from 'primereact/button';



export class WarehouseItemForm extends Component{
   constructor(props){
      super(props);
      this.state = {
          is_inventory_item: true,
          item: '',
          is_manufactured_item: true,
          processed_item: '',
          quantity: '',
          warehouse: '',
          location: '',
          verified: true,
          locations: [],
          processedProducts: [],
          inventoryItems: [],
          wareHouses: []

      }
      this.handleVerified = this.handleVerified.bind(this);
      this.handleIsInventoryItem = this.handleIsInventoryItem.bind(this);
      this.handleIsManufacturedItem = this.handleIsManufacturedItem.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
  }

    handleIsInventoryItem(event) {
      const target = event.target;
      const value = target.name === 'is_inventory_item' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleIsManufacturedItem(event) {
      const target = event.target;
      const value = target.name === 'is_manufactured_item' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleVerified(event) {
      const target = event.target;
      const value = target.name === 'verified' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }





    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        is_inventory_item,
        item,
        is_manufactured_item,
        processed_item,
        quantity,
        warehouse,
        location,
        verified,
      } = this.state;
      const warehouseitem = { 
        is_inventory_item,
        item,
        is_manufactured_item,
        processed_item,
        quantity,
        warehouse,
        location,
        verified,
      };
      this.props.addWarehouseitem(warehouseitem);
      this.setState({
        is_inventory_item: true,
        item: '',
        is_manufactured_item: true,
        processed_item: '',
        quantity: '',
        warehouse: '',
        location: '',
        verified: true,
        });
      this.props.history.push('/warehouseitems');

    };

    static propTypes = {
        addWarehouseitem : PropTypes.func.isRequired,
        getWarehouses : PropTypes.func.isRequired,
        getProcessedproducts : PropTypes.func.isRequired,
        getStoragemedias : PropTypes.func.isRequired,
        getInventoryitems : PropTypes.func.isRequired,      
    }

    componentDidMount() {
      this.props.getWarehouses();
      this.props.getProcessedproducts();
      this.props.getStoragemedias();
      this.props.getInventoryitems();
      
    }
    render() {
        const { 
          is_inventory_item,
          item,
          is_manufactured_item,
          processed_item,
          quantity,
          warehouse,
          location,
          verified,
        } = this.state;

        const { warehouses } = this.props;
        const { inventoryitems } = this.props;
        const { processedproducts } = this.props;
        const { storagemedias } = this.props;

        let wareHouses = warehouses.length > 0
          && warehouses.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);

        let inventoryItems = inventoryitems.length > 0
          && inventoryitems.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);

        let locations = storagemedias.length > 0
          && storagemedias.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);

        let processedProducts = processedproducts.length > 0
          && processedproducts.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.product}</option>
          )
        }, this);



        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Asset</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid"> 
                  <div className="p-field p-col-12 p-md-12">
                    <label>QUANTITY</label>
                    <InputNumber
                      name="quantity"
                      onChange={this.onChange}
                      value={quantity}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Is Inventory Item ?:
                        <input
                          name="is_inventory_item"
                          type="checkbox"
                          checked={this.state.is_inventory_item}
                          onChange={this.handleIsInventoryItem} />
                      </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Is Manufactured Item ?:
                        <input
                          name="is_manufactured_item"
                          type="checkbox"
                          checked={this.state.is_manufactured_item}
                          onChange={this.handleIsManufacturedItem} />
                      </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Is Verified ?:
                        <input
                          name="verified"
                          type="checkbox"
                          checked={this.state.verified}
                          onChange={this.handleVerified} />
                      </label>
                  </div>
                  
                  <div className="p-field p-col-12 p-md-6">
                    <label> IF INVENTORY ITEM => </label>
                    <select
                      name ='item'
                      value={item}
                      onChange={this.onChange}
                    >
                      {inventoryItems}
                    </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label> IF MANUFACTURED ITEM => </label>
                    <select
                      name ='processed_item'
                      value={processed_item}
                      onChange={this.onChange}
                    >
                      {processedProducts}
                    </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label> WAREHOUSE </label>
                    <select
                      name ='warehouse'
                      value={warehouse}
                      onChange={this.onChange}
                    >
                      {wareHouses}
                    </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label> STORAGE MEDIA | OPTIONAL </label>
                    <select
                      name ='location'
                      value={location}
                      onChange={this.onChange}
                    >
                      {locations}
                    </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
                </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
  inventoryitems: state.inventoryitems.inventoryitems,
  warehouses: state.warehouses.warehouses,
  storagemedias: state.storagemedias.storagemedias,
  processedproducts: state.processedproducts.processedproducts,

})

export default connect(
        mapStateToProps, 
        { getInventoryitems, getWarehouses, getStoragemedias, getProcessedproducts,  addWarehouseitem })
        (WarehouseItemForm );
 