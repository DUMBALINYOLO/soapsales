import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
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
                type: '',
                unit: '',
                finished_goods: true,
                inventory_product:'',
                product_list: '',
                types: [],
                inventoryItems: [],
                productList: [],
                unitOfMeasure: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleFinished = this.handleFinished.bind(this);
    }

    handleFinished(event) {
      const target = event.target;
      const value = target.name === 'finished_goods' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
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

        let types = manufacturingproducttypechoices.length > 0
            && manufacturingproducttypechoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        let inventoryItems = inventoryitems.length > 0
            && inventoryitems.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let productList = products.length > 0
            && products.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let unitOfMeasure = unitmeasures.length > 0
            && unitmeasures.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

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
                <div className="p-field p-col-12 p-md-12">
                    <label>
                        Finished Goods:
                        <input
                          name="finished_goods"
                          type="checkbox"
                          checked={this.state.finished_goods}
                          onChange={this.handleFinished} />
                     </label>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>TYPE</label>
                    <select
                        name="type"
                        value={type}
                        onChange={this.onChange}
                    >
                        {types}
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
                    <label>INVENTORY PRODUCT</label>
                    <select
                        name="inventory_product"
                        value={inventory_product}
                        onChange={this.onChange}
                    >
                        {inventoryItems}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <label>PRODUCT LIST</label>
                    <select
                        name="product_list"
                        value={product_list}
                        onChange={this.onChange}
                    >
                        {productList}
                    </select>
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
