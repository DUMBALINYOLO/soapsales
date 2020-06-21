import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductline } from '..//../actions/productlines';
import PropTypes from 'prop-types';

export class ProductlineForm extends Component{
    state = {
        product: '',
        unit_price: '',
        valu: '',
        quantity: ''
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
    }


    render() {
        const { product, unit_price, value, quantity } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Product Line</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Product</label>
                  <input
                    className="form-control"
                    type="text"
                    name="product"
                    onChange={this.onChange}
                    value={product}
                  />
                </div>
                <div className="form-group">
                  <label>Unit Price</label>
                  <input
                    className="form-control"
                    type="number"
                    name="unit price"
                    onChange={this.onChange}
                    value={unit_price}
                  />
                </div>
                <div className="form-group">
                  <label>Value</label>
                  <input
                    className="form-control"
                    type="text"
                    name="value"
                    onChange={this.onChange}
                    value={value}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name="qty"
                    onChange={this.onChange}
                    value={quantity}
                  />
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


export default connect(null, { addProductline })(ProductlineForm);
