import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessedproduct } from '../../actions/processedproducts';
import { getProcessedProductsStockStatusChoices } from '..//../actions/choices';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import { getProcessproducts } from '../../actions/processproducts';
import { getWarehouses } from '..//../actions/warehouses';
import { getProcessedproductcomponents } from '../../actions/processedproductcomponents';
import PropTypes from 'prop-types';

export class ProcessedproductForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                product: '',
                location: '',
                quantity: '',
                status: '',
                product_component: '',
                unit: '',
                minimum_order_level: '',
                maximum_stock_level: '',
                products: [],
                locations: [],
                statuses: [],
                components: [],
                units: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          product,
          location,
          quantity,
          status,
          product_component,
          unit,
          minimum_order_level,
          maximum_stock_level,
        } = this.state;
      const processedproduct = {
          product,
          location,
          quantity,
          status,
          product_component,
          unit,
          minimum_order_level,
          maximum_stock_level,
        };
      this.props.addProcessedproduct(processedproduct);
    };

    static propTypes = {
        addProcessedproduct: PropTypes.func.isRequired,
        getProcessedProductsStockStatusChoices: PropTypes.func.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
        getWarehouses: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
        getProcessedproductcomponents: PropTypes.func.isRequired,
    }
    componentDidMount() {
      this.props.getProcessedProductsStockStatusChoices();
      this.props.getProcessproducts();
      this.props.getWarehouses();
      this.props.getUnitmeasures();
      this.props.getProcessedproductcomponents();
    }

    render() {
        const {
            product,
            location,
            quantity,
            status,
            product_component,
            unit,
            minimum_order_level,
            maximum_stock_level,
        } = this.state;

        const {processedproductstockstatuschoices} = this.props;
        console.log(processedproductstockstatuschoices)

        let statuses = processedproductstockstatuschoices.length > 0
            && processedproductstockstatuschoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {processproducts} = this.props;
        console.log(processproducts)

        let products = processproducts.length > 0
            && processproducts.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {warehouses} = this.props;
        console.log(warehouses)

        let locations = warehouses.length > 0
            && warehouses.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {processedproductcomponents} = this.props;
        console.log(processedproductcomponents)

        let components = processedproductcomponents.length > 0
            && processedproductcomponents.map((item, index) => {
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
              <h2>Add Processed Product </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Minimum Order Level</label>
                  <input
                    className="form-control"
                    type="number"
                    name="minimum_order_level"
                    onChange={this.onChange}
                    value={minimum_order_level}
                  />
                </div>
                <div className="form-group">
                  <label>Maximum Stock Level</label>
                  <input
                    className="form-control"
                    type="number"
                    name="maximum_stock_level"
                    onChange={this.onChange}
                    value={maximum_stock_level}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name="quantity"
                    onChange={this.onChange}
                    value={quantity}
                  />
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="product"
                        value={product}
                        onChange={this.onChange}
                    >
                        {products}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="location"
                        value={location}
                        onChange={this.onChange}
                    >
                        {locations}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="status"
                        value={status}
                        onChange={this.onChange}
                    >
                        {statuses}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="product_component"
                        value={product_component}
                        onChange={this.onChange}
                    >
                        {components}
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
    processedproductstockstatuschoices: state.processedproductstockstatuschoices.processedproductstockstatuschoices,
    warehouses: state.warehouses.warehouses,
    processedproductcomponents: state.processedproductcomponents.processedproductcomponents,
    unitmeasures: state.unitmeasures.unitmeasures,
    processproducts: state.processproducts.processproducts,
})

export default connect(mapStateToProps, {getProcessedProductsStockStatusChoices, getWarehouses, getProcessproducts, getUnitmeasures, getProcessedproductcomponents, addProcessedproduct })(ProcessedproductForm);
