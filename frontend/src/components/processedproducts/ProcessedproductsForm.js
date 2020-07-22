import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Calendar} from "primereact/calendar";
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import { addProcessedproduct } from '../../actions/processedproducts';
import { getProcessedProductsStockStatusChoices } from '..//../actions/choices';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import { getProcessproducts } from '../../actions/processproducts';
import { getWarehouses } from '..//../actions/warehouses';
import { getInventorycategories } from '..//../actions/inventorycategory';
import { getProcessedproductcomponents } from '../../actions/processedproductcomponents';
import PropTypes from 'prop-types';

export class ProcessedproductForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                category: '',
                product: '',
                location: '',
                quantity: '',
                status: '',
                product_component: '',
                unit: '',
                updated: '',
                review_needed: true,
                minimum_order_level: '',
                maximum_stock_level: '',
                notes: '',
                ProcessedProductList: [],
                wahouseList: [],
                statuses: [],
                ProcessedProductComponent: [],
                unitOfMeasure: [],
                inventoryCategory: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReviewNeeded = this.handleReviewNeeded.bind(this);
    }

    handleReviewNeeded(event) {
      const target = event.target;
      const value = target.name === 'review_needed' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          category,
          product,
          location,
          quantity,
          status,
          product_component,
          unit,
          updated,
          review_needed,
          minimum_order_level,
          maximum_stock_level,
          notes,
        } = this.state;
      const processedproduct = {
          category,
          product,
          location,
          quantity,
          status,
          product_component,
          unit,
          updated,
          review_needed,
          minimum_order_level,
          maximum_stock_level,
          notes,
        };
      this.props.addProcessedproduct(processedproduct);
      this.setState({
            category: '',
            product: '',
            location: '',
            quantity: '',
            status: '',
            product_component: '',
            unit: '',
            updated: '',
            review_needed: true,
            minimum_order_level: '',
            maximum_stock_level: '',
            notes: '',
        });
      this.props.history.push('/processedproducts');
    };

    static propTypes = {
        addProcessedproduct: PropTypes.func.isRequired,
        getProcessedProductsStockStatusChoices: PropTypes.func.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
        getWarehouses: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
        getProcessedproductcomponents: PropTypes.func.isRequired,
        getInventorycategories: PropTypes.func.isRequired,
    }
    componentDidMount() {
      this.props.getProcessedProductsStockStatusChoices()
      this.props.getInventorycategories()
      this.props.getProcessproducts()
      this.props.getWarehouses()
      this.props.getUnitmeasures()
      this.props.getProcessedproductcomponents()
    }

    render() {
        const {
            category,
            product,
            location,
            quantity,
            status,
            product_component,
            unit,
            updated,
            review_needed,
            minimum_order_level,
            maximum_stock_level,
            notes,
        } = this.state;

        const {processedproductstockstatuschoices} = this.props;
        const {unitmeasures} = this.props;
        const {processproducts} = this.props;
        const {warehouses} = this.props;
        const {processedproductcomponents} = this.props;
        const {inventorycategories} = this.props;

        let statuses = processedproductstockstatuschoices.length > 0
            && processedproductstockstatuschoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        let ProcessedProductList = processproducts.length > 0
            && processproducts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let warehouseList = warehouses.length > 0
            && warehouses.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let ProcessedProductComponent = processedproductcomponents.length > 0
            && processedproductcomponents.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.pricing_method}</option>
                )
            }, this);

        let unitOfMeasure = unitmeasures.length > 0
            && unitmeasures.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let inventoryCategory = inventorycategories.length > 0
            && inventorycategories.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Processed Product </h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>NOTES</label>
                  <InputText
                    name="notes"
                    onChange={this.onChange}
                    value={notes}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
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
                  <label>UPDATED</label>
                  <Calendar
                    showIcon={true}
                    name="updated"
                    onChange={this.onChange}
                    value={updated}
                    dateFormat="yy-mm-dd"
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                    <label>
                        REVIEW NEEDED:
                        <input
                          name="is_contra"
                          type="checkbox"
                          checked={this.state.is_contra}
                          onChange={this.handleContra} />
                    </label>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>PRODUCT</label>
                    <select
                        name="product"
                        value={product}
                        onChange={this.onChange}
                    >
                        {ProcessedProductList}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>LOCATION</label>
                    <select
                        name="location"
                        value={location}
                        onChange={this.onChange}
                    >
                        {warehouseList}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>STATUS</label>
                    <select
                        name="status"
                        value={status}
                        onChange={this.onChange}
                    >
                        {statuses}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>PRODUCT COMPONENT</label>
                    <select
                        name="product_component"
                        value={product_component}
                        onChange={this.onChange}
                    >
                        {ProcessedProductComponent}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>UNIT</label>
                    <select
                        name="unit"
                        value={unit}
                        onChange={this.onChange}
                    >
                        {unitOfMeasure}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>CATEGORY</label>
                    <select
                        name="category"
                        value={category}
                        onChange={this.onChange}
                    >
                        {inventoryCategory}
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
    processedproductstockstatuschoices: state.processedproductstockstatuschoices.processedproductstockstatuschoices,
    warehouses: state.warehouses.warehouses,
    processedproductcomponents: state.processedproductcomponents.processedproductcomponents,
    unitmeasures: state.unitmeasures.unitmeasures,
    processproducts: state.processproducts.processproducts,
    inventorycategories: state.inventorycategories.inventorycategories,
})

export default connect(mapStateToProps, {getProcessedProductsStockStatusChoices, getInventorycategories, getWarehouses, getProcessproducts, getUnitmeasures, getProcessedproductcomponents, addProcessedproduct })(ProcessedproductForm);
