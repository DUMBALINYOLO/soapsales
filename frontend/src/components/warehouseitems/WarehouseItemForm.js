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
import {Checkbox} from 'primereact/checkbox';
import {Dropdown} from 'primereact/dropdown';

export class WarehouseItemForm extends Component{
   constructor(props){
      super(props);
      this.state = {
          is_inventory_item: false,
          item: null,
          is_manufactured_item: false,
          processed_item: null,
          quantity: '',
          warehouse: null,
          location: null,
          verified: false,

      }
      this.handleVerified = this.handleVerified.bind(this);
      this.handleIsInventoryItem = this.handleIsInventoryItem.bind(this);
      this.handleIsManufacturedItem = this.handleIsManufacturedItem.bind(this);
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onItems = this.onItems.bind(this);
      this.onProcessedItem = this.onProcessedItem.bind(this);
      this.onWarehouse = this.onWarehouse.bind(this);
      this.onLocation = this.onLocation.bind(this);
  }

    onItems (e){
      this.setState({item: e.value})
    }

    onProcessedItem (e){
      this.setState({processed_item: e.value})
    }

    onWarehouse (e){
      this.setState({warehouse: e.value})
    }

    onLocation (e){
      this.setState({location: e.value})
    }

    handleIsInventoryItem() {
      this.setState({
        is_inventory_item: !this.state.checked
      });
    }

    handleIsManufacturedItem() {
      this.setState({
        is_manufactured_item: !this.state.checked
      });
    }

    handleVerified() {
      this.setState({
        verified: !this.state.checked
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
                    <Dropdown 
                      placeholder ="SELECT ITEM"
                      value={item}
                      onChange={this.onItems}
                      options={inventoryitems}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT LOCATION"
                      value={location}
                      onChange={this.onLocation}
                      options={storagemedias}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT WAREHOUSE"
                      value={warehouse}
                      onChange={this.onWarehouse}
                      options={warehouses}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT PROCESSED ITEM"
                      value={processed_item}
                      onChange={this.onProcessedItem}
                      options={processedproducts}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="product" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>IS INVENTORY ITEM :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleIsInventoryItem}
                      checked={this.state.is_inventory_item}
                    /> 
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>IS MANUFACTURED ITEM :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleIsManufacturedItem}
                      checked={this.state.is_manufactured_item}
                    /> 
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>IS VERIFIED :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleVerified}
                      checked={this.state.verified}
                    /> 
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
 