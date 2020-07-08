import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductline } from '..//../actions/productlines';
import { getProcessproducts } from '..//../actions/processproducts';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

export class ProductlineForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            product: '',
            productOption: [],
            unit_price: '',
            value: '',
            quantity: ''
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

}

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { product, unit_price, value, quantity } = this.state;
      const productline = { product, unit_price, value, quantity };
      this.props.addProductline(productline);
    };

    static propTypes = {
        addProductline: PropTypes.func.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
    }
    componentDidMount() {
      this.props.getProcessproducts();
    }

    render() {
        const { product, unit_price, value, quantity } = this.state;
        const {processproducts} = this.props;
        let productOption = processproducts.length > 0
            && processproducts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Product Line</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Unit Price</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="unit_price"
                    onChange={this.onChange}
                    value={unit_price}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>Value</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="value"
                    onChange={this.onChange}
                    value={value}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Quantity</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="quantity"
                    onChange={this.onChange}
                    value={quantity}
                  />
                </div>
                <div className="p-field p-col-12 p-md-4">
                  <label>Product</label>
                  <select
                      name="product"
                      value={product}
                      onChange={this.onChange}
                  >
                      {productOption}
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
    processproducts: state.processproducts.processproducts
})

export default connect(mapStateToProps, { getProcessproducts, addProductline })(ProductlineForm);
