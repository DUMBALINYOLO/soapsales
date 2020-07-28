import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventoryitem } from '..//../actions/inventoryitems';
import { getInventoryTypeChoices } from '..//../actions/choices';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import { getSuppliers } from '..//../actions/suppliers';
import { getEquipmentComponents } from '..//../actions/equipmentcomponents';
import { getProductcomponents } from '..//../actions/productcomponents';
import { getInventorycategories } from '..//../actions/inventorycategory';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';

export class InventoryitemForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          name: '',
          type: null,
          category: null,
          length: '',
          width: '',
          height: '',
          description: '',
          unit: null,
          unit_purchase_price: '',
          supplier: null,
          minimum_order_level: '',
          maximum_stock_level: '',
          equipment_component: null,
          product_component: null,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onType = this.onType.bind(this);
        this.onCategory = this.onCategory.bind(this);
        this.onUnit = this.onUnit.bind(this);
        this.onSupplier = this.onSupplier.bind(this);
        this.onEquipmentComponent = this.onEquipmentComponent.bind(this);
        this.onProductComponent = this.onProductComponent.bind(this);
    }
    onType (e){
      this.setState({type: e.value})
    }

    onCategory (e){
      this.setState({category: e.value})
    }

    onUnit (e){
      this.setState({unit: e.value})
    }

    onSupplier (e){
      this.setState({supplier: e.value})
    }

    onEquipmentComponent (e){
      this.setState({equipment_component: e.value})
    }

    onProductComponent (e){
      this.setState({product_component: e.value})
    }
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          name,
          type,
          category,
          length,
          width,
          height,
          description,
          unit,
          unit_purchase_price,
          supplier,
          minimum_order_level,
          maximum_stock_level,
          equipment_component,
          product_component,
      } = this.state;

      const inventoryitem = {
          name,
          type,
          category,
          length,
          width,
          height,
          description,
          unit,
          unit_purchase_price,
          supplier,
          minimum_order_level,
          maximum_stock_level,
          equipment_component,
          product_component,
      };

      this.props.addInventoryitem(inventoryitem);
      this.setState({
          name: '',
          type: '',
          category: '',
          length: '',
          width: '',
          height: '',
          description: '',
          unit: '',
          unit_purchase_price: '',
          supplier: '',
          minimum_order_level: '',
          maximum_stock_level: '',
          equipment_component: '',
          product_component: '',

        });
      this.props.history.push('/inventoryitems');

    };

    static propTypes = {
        addInventoryitem: PropTypes.func.isRequired,
        getInventoryTypeChoices: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
        getSuppliers: PropTypes.func.isRequired,
        getEquipmentComponents: PropTypes.func.isRequired,
        getProductcomponents: PropTypes.func.isRequired,
        getInventorycategories: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getInventoryTypeChoices();
      this.props.getUnitmeasures();
      this.props.getSuppliers();
      this.props.getEquipmentComponents();
      this.props.getProductcomponents();
      this.props.getInventorycategories();
    }

    render() {
        const {
            name,
            type,
            category,
            length,
            width,
            height,
            description,
            unit,
            unit_purchase_price,
            supplier,
            minimum_order_level,
            maximum_stock_level,
            equipment_component,
            product_component,
        } = this.state;

        const {inventorytypechoices} = this.props;
        const {inventorycategories} = this.props;
        const {unitmeasures} = this.props;
        const {suppliers} = this.props;
        const {productcomponents} = this.props;
        const {equipmentcomponents} = this.props;    

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Inventory Item</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>Name</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Description</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>LENGTH</label>
                  <InputNumber
                    name="length"
                    onChange={this.onChange}
                    value={length}
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
                  <label>WIDTH</label>
                  <InputNumber
                    name="width"
                    onChange={this.onChange}
                    value={width}
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
                  <label>HEIGHT</label>
                  <InputNumber
                    name="height"
                    onChange={this.onChange}
                    value={height}
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
                  <label>MAXIMUM STOCK LEVEL</label>
                  <InputNumber
                    name="maximum_stock_level"
                    onChange={this.onChange}
                    value={maximum_stock_level}
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
                  <label>UNIT PURCHASE PRICE</label>
                  <InputNumber
                    name="unit_purchase_price"
                    onChange={this.onChange}
                    value={unit_purchase_price}
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
                  <label>MINIMUM ORDER LEVEL</label>
                  <InputNumber
                    name="minimum_order_level"
                    onChange={this.onChange}
                    value={minimum_order_level}
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
                    placeholder ="SELECT TYPE"
                    value={type}
                    onChange={this.onType}
                    options={inventorytypechoices}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="value" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT CATEGORY"
                    value={category}
                    onChange={this.onCategory}
                    options={inventorycategories}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT UNIT"
                    value={unit}
                    onChange={this.onUnit}
                    options={unitmeasures}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT SUPPLIER"
                    value={supplier}
                    onChange={this.onSupplier}
                    options={suppliers}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT EQUIPMENT COMPONENT"
                    value={equipment_component}
                    onChange={this.onEquipmentComponent}
                    options={equipmentcomponents}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT PRODUCT COMPONENT"
                    value={product_component}
                    onChange={this.onProductComponent}
                    options={productcomponents}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
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
    inventorytypechoices: state.inventorytypechoices.inventorytypechoices,
    unitmeasures: state.unitmeasures.unitmeasures,
    suppliers: state.suppliers.suppliers,
    equipmentcomponents: state.equipmentcomponents.equipmentcomponents,
    inventorycategories: state.inventorycategories.inventorycategories,
    productcomponents: state.productcomponents.productcomponents,
})

export default connect(
      mapStateToProps, 
      {getInventoryTypeChoices, getInventorycategories, getUnitmeasures, getSuppliers, getEquipmentComponents, getProductcomponents, addInventoryitem })
      (InventoryitemForm);
