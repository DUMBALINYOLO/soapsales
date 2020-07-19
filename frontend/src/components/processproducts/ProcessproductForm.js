import React, { Component } from 'react';
import { connect } from 'react-redux';
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
                inventory: [],
                product: [],
                units: []
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
        console.log(manufacturingproducttypechoices)

        let types = manufacturingproducttypechoices.length > 0
            && manufacturingproducttypechoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {inventoryitems} = this.props;
        console.log(inventoryitems)

        let inventory = inventoryitems.length > 0
            && inventoryitems.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {products} = this.props;
        console.log(products)

        let product = products.length > 0
            && products.map((item, index) => {
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

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process Product </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <label>
                    Finished Goods:
                    <input
                      name="finished_goods"
                      type="checkbox"
                      checked={this.state.finished_goods}
                      onChange={this.handleFinished} />
                 </label>

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
                        name="inventory_product"
                        value={inventory_product}
                        onChange={this.onChange}
                    >
                        {inventory}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="product_list"
                        value={product_list}
                        onChange={this.onChange}
                    >
                        {product}
                    </select>
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
