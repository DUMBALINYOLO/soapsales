import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessproduct } from '../../actions/processedproducts';
import PropTypes from 'prop-types';

export class ProcessproductForm extends Component{
    state = {
        direct_price: '',
        margin: '',
        markup: '',
        sku: '',
        pricing_method: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { direct_price, margin, markup, sku, pricing_method } = this.state;
      const processproduct = { direct_price, margin, markup, sku, pricing_method };
      this.props.addProcessproduct(processproduct);
    };

    static propTypes = {
        addProcessproduct: PropTypes.func.isRequired,
    }


    render() {
        const { direct_price, margin, markup, sku, pricing_method } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Processed Product Component </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Direct Price</label>
                  <input
                    className="form-control"
                    type="text"
                    name="direct price"
                    onChange={this.onChange}
                    value={direct_price}
                  />
                </div>
                <div className="form-group">
                  <label>Margin</label>
                  <input
                    className="form-control"
                    type="text"
                    name="margin"
                    onChange={this.onChange}
                    value={margin}
                  />
                </div>
                <div className="form-group">
                  <label>Markup</label>
                  <input
                    className="form-control"
                    type="text"
                    name="markup"
                    onChange={this.onChange}
                    value={markup}
                  />
                </div>
                <div className="form-group">
                  <label>Sku</label>
                  <input
                    className="form-control"
                    type="text"
                    name="sku"
                    onChange={this.onChange}
                    value={sku}
                  />
                </div>
                <div className="form-group">
                  <label>Pricing Method</label>
                  <input
                    className="form-control"
                    type="price"
                    name="pricing method"
                    onChange={this.onChange}
                    value={pricing_method}
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


export default connect(null, { addProcessproduct })(ProcessproductForm);
