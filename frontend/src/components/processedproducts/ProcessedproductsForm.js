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
import {Dropdown} from 'primereact/dropdown';
import {Checkbox} from 'primereact/checkbox';



export class ProcessedproductForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                category: null,
                product: null,
                location: null,
                quantity: '',
                status: null,
                product_component: null,
                unit: null,
                updated: '',
                review_needed: false,
                minimum_order_level: '',
                maximum_stock_level: '',
                notes: '',

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleReviewNeeded = this.handleReviewNeeded.bind(this);
        this.onCategory = this.onCategory.bind(this);
        this.onProduct = this.onProduct.bind(this);
        this.onLocation = this.onLocation.bind(this);
        this.onStatus = this.onStatus.bind(this);
        this.onProductComponent = this.onProductComponent.bind(this);
        this.onUnit = this.onUnit.bind(this);
    }

    onCategory (e){
      this.setState({category: e.value})
    }
    
    onProduct (e){
      this.setState({product: e.value})
    }
    
    onLocation (e){
      this.setState({location: e.value})
    }

    onStatus (e){
      this.setState({status: e.value})
    }

    onProductComponent (e){
      this.setState({product_component: e.value})
    }

    onUnit (e){
      this.setState({unit: e.value})
    }

    handleReviewNeeded() {
      this.setState({
        review_needed: !this.state.checked
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
                <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                  <label>REVIEW NEEDED :</label>
                  <Checkbox
                    inputId="working"
                    onChange={this.handleReviewNeeded}
                    checked={this.state.review_needed}
                  /> 
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT PRODUCT"
                    value={product}
                    onChange={this.onProduct}
                    options={processproducts}
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
                    placeholder ="SELECT STATUS"
                    value={status}
                    onChange={this.onStatus}
                    options={processedproductstockstatuschoices}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="value" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT PRODUCT COMPONENT"
                    value={product_component}
                    onChange={this.onProductComponent}
                    options={processedproductcomponents}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="sku" 
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
