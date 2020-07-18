import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductcomponent } from '../../actions/productcomponents';
import { getProductComponentPricingChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';

export class ProductcomponentForm extends Component{
    state = {
        direct_price: '',
        margin: '',
        markup: '',
        sku: '',
        pricing_method: '',
        pricing: [],
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { direct_price, margin, markup, sku, pricing_method } = this.state;
      const productcomponent = { direct_price, margin, markup, sku, pricing_method };
      this.props.addProductcomponent(productcomponent);
    };

    static propTypes = {
        addProductcomponent: PropTypes.func.isRequired,
        getProductComponentPricingChoices: PropTypes.func.isRequired,

    }
    componentDidMount() {
      this.props.getProductComponentPricingChoices();
    }

    render() {
        const { direct_price, margin, markup, sku, pricing_method } = this.state;

        const {productcomponentpricingchoices} = this.props;
        console.log(productcomponentpricingchoices)

        let pricing = productcomponentpricingchoices.length > 0
            && productcomponentpricingchoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Product Component </h2>
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
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="pricing_method"
                        value={pricing_method}
                        onChange={this.onChange}
                    >
                        {pricing}
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
    productcomponentpricingchoices: state.productcomponentpricingchoices.productcomponentpricingchoices,
})

export default connect(mapStateToProps, {getProductComponentPricingChoices, addProductcomponent })(ProductcomponentForm);
