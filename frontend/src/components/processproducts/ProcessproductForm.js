import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Checkbox} from 'primereact/checkbox';
import {Dropdown} from 'primereact/dropdown';
import { addProcessproduct } from '../../actions/processproducts';
import { getManufacturingProductTypeChoices } from '..//../actions/choices';
import { getInventoryitems } from '..//../actions/inventoryitems';
import { getProducts } from '..//../actions/products';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import PropTypes from 'prop-types';

export class ProcessproductForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            type: null,
            unit: null,
            finished_goods: false,
            inventory_product: null,
            product_list: null,

        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFinished = this.handleFinished.bind(this);
        this.onType = this.onType.bind(this);
        this.onUnit = this.onUnit.bind(this);
        this.onInventoryProduct = this.onInventoryProduct.bind(this);
        this.onProductList = this.onProductList.bind(this);
    }

    handleFinished() {
      this.setState({
        finished_goods: !this.state.checked
      });
    }

    onType (e){
      this.setState({type: e.value})
    } 

    onUnit (e){
      this.setState({unit: e.value})
    } 

    onInventoryProduct (e){
      this.setState({inventory_product: e.value})
    } 

    onProductList (e){
      this.setState({product_list: e.value})
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          name,
          description,
          type,
          unit,
          finished_goods,
          inventory_product,
          product_list
        } = this.state;
      const processproduct = {
          name,
          description,
          type,
          unit,
          finished_goods,
          inventory_product,
          product_list
        };
      this.props.addProcessproduct(processproduct);
      console.log(processproduct)
      this.setState({
          name: '',
          description: '',
          type: '',
          unit: '',
          finished_goods: true,
          inventory_product:'',
          product_list: '',
        });
      this.props.history.push('/processproducts');
    };

    static propTypes = {
        addProcessproduct: PropTypes.func.isRequired,
        getManufacturingProductTypeChoices: PropTypes.func.isRequired,
        getInventoryitems: PropTypes.func.isRequired,
        getProducts: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
    }
    componentDidMount() {
      this.props.getManufacturingProductTypeChoices();
      this.props.getInventoryitems();
      this.props.getProducts();
      this.props.getUnitmeasures();
    }

    render() {
        const {
            name,
            description,
            type,
            unit,
            finished_goods,
            inventory_product,
            product_list
        } = this.state;

        const {manufacturingproducttypechoices} = this.props;
        const {inventoryitems} = this.props;
        const {products} = this.props;
        const {unitmeasures} = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process Product </h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>Name</label>
                  <InputText
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Description</label>
                  <InputTextarea
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                  <label>FINISHED GOODS :</label>
                  <Checkbox
                    inputId="working"
                    onChange={this.handleFinished}
                    checked={this.state.finished_goods}
                  /> 
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT TYPE"
                    value={type}
                    onChange={this.onType}
                    options={manufacturingproducttypechoices}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="value" 
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
                    placeholder ="SELECT INVENTORY PRODUCT"
                    value={inventory_product}
                    onChange={this.onInventoryProduct}
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
                    placeholder ="SELECT PRODUCT LIST"
                    value={product_list}
                    onChange={this.onProductList}
                    options={products}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
            </div>
            </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    manufacturingproducttypechoices: state.manufacturingproducttypechoices.manufacturingproducttypechoices,
    products: state.products.products,
    unitmeasures: state.unitmeasures.unitmeasures,
    inventoryitems: state.inventoryitems.inventoryitems,
})

export default connect(mapStateToProps, {getManufacturingProductTypeChoices, getProducts, getUnitmeasures, getInventoryitems, addProcessproduct })(ProcessproductForm);
