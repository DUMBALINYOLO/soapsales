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

export class InventoryitemForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                name: '',
                type: '',
                category: '',
                length: '',
                width: '',
                height: '',
                image: '',
                description: '',
                unit: '',
                unit_purchase_price: '',
                supplier: '',
                minimum_order_level: '',
                maximum_stock_level: '',
                equipment_component: '',
                product_component: '',
                types: [],
                categories: [],
                units: [],
                supplierz: [],
                equipment: [],
                product: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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
          image,
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
          image,
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
            image,
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
        console.log(inventorytypechoices)

        let types = inventorytypechoices.length > 0
            && inventorytypechoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {inventorycategory} = this.props;
        console.log(inventorycategory)

        let categories = inventorycategory.length > 0
            && inventorycategory.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {unitmeasures} = this.props;
        console.log(unitmeasures)

        let units = unitmeasures.length > 0
            && unitmeasures.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {suppliers} = this.props;
        console.log(suppliers)

        let supplierz = suppliers.length > 0
            && suppliers.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {productcomponents} = this.props;
        console.log(productcomponents)

        let product = productcomponents.length > 0
            && productcomponents.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {equipmentcomponents} = this.props;
        console.log(equipmentcomponents)

        let equipment = equipmentcomponents.length > 0
            && equipmentcomponents.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);


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
                  <label>Length</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="length"
                    onChange={this.onChange}
                    value={length}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Width</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="width"
                    onChange={this.onChange}
                    value={width}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Height</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="height"
                    onChange={this.onChange}
                    value={height}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Image</label>
                  <InputText
                    className="form-control"
                    type="image"
                    name="image"
                    onChange={this.onChange}
                    value={image}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Unit Purchase Price</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="unit_purchase_price"
                    onChange={this.onChange}
                    value={unit_purchase_price}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Minimum Order Level</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="minimun_order_level"
                    onChange={this.onChange}
                    value={minimum_order_level}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Maximum Stock Level</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="maximum_stock_level"
                    onChange={this.onChange}
                    value={maximum_stock_level}
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
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="type"
                        value={type}
                        onChange={this.onChange}
                    >
                        {types}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="unit"
                        value={unit}
                        onChange={this.onChange}
                    >
                        {units}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="supplier"
                        value={supplier}
                        onChange={this.onChange}
                    >
                        {supplierz}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="equipment_component"
                        value={equipment_component}
                        onChange={this.onChange}
                    >
                        {equipment}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="product_component"
                        value={product_component}
                        onChange={this.onChange}
                    >
                        {product}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="category"
                        value={category}
                        onChange={this.onChange}
                    >
                        {categories}
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
    inventorytypechoices: state.inventorytypechoices.inventorytypechoices,
    unitmeasures: state.unitmeasures.unitmeasures,
    suppliers: state.suppliers.suppliers,
    equipmentcomponents: state.equipmentcomponents.equipmentcomponents,
    inventorycategory: state.inventorycategory.inventorycategory,
    productcomponents: state.productcomponents.productcomponents,
})

export default connect(mapStateToProps, {getInventoryTypeChoices, getInventorycategories, getUnitmeasures, getSuppliers, getEquipmentComponents, getProductcomponents, addInventoryitem })(InventoryitemForm);
