import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPricinggroup } from '../../actions/pricinggroup';
import PropTypes from 'prop-types';

export class PricinggroupForm extends Component{
    state = {
        name: '',
        group_pricing_unit_sales_price: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, group_pricing_unit_sales_price } = this.state;
      const pricinggroup = { name, group_pricing_unit_sales_price };
      this.props.addPricinggroup(pricinggroup);
    };

    static propTypes = {
        addPricinggroup: PropTypes.func.isRequired,
    }


    render() {
        const { name, group_pricing_unit_sales_price } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Group Pricing Unit Sales Price </h2>
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
                  <label>Group Pricing Unit</label>
                  <input
                    className="form-control"
                    type="text"
                    name="group pricing unit sales price"
                    onChange={this.onChange}
                    value={group_pricing_unit_sales_price}
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


export default connect(null, { addPricinggroup })(PricinggroupForm);
