import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCustomer } from '..//../actions/customers';
import PropTypes from 'prop-types';

export class CustomerForm extends Component{
    state = {
        name: '',
        is_organization: '',
        billing_address: '',
        banking_details: '',
        website: '',
        bp_number: '',
        email: '',
        phone: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, is_organization, billing_address, banking_details, website, bp_number, email, phone } = this.state;
      const customer = { name, is_organization, billing_address, banking_details, website, bp_number, email, phone };
      this.props.addCustomer(customer);
    };

    static propTypes = {
        addCustomer: PropTypes.func.isRequired,
    }


    render() {
        const { name, is_organization, billing_address, banking_details, website, bp_number, email, phone } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Customer</h2>
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
                    <label>Is Organization</label>
                    <input
                      className="form-control"
                      type="choice"
                      name="is organization"
                      onChange={this.onChange}
                      value={is_organization}
                    />
                </div>
                <div className="form-group">
                  <label>Billing Address</label>
                  <input
                    className="form-control"
                    type="text"
                    name="billing address"
                    onChange={this.onChange}
                    value={billing_address}
                  />
                </div>
                <div className="form-group">
                  <label>Banking Details</label>
                  <input
                    className="form-control"
                    type="text"
                    name="banking details"
                    onChange={this.onChange}
                    value={banking_details}
                  />
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <input
                    className="form-control"
                    type="text"
                    name="website"
                    onChange={this.onChange}
                    value={website}
                  />
                </div>
                <div className="form-group">
                  <label>Bp Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="bp number"
                    onChange={this.onChange}
                    value={bp_number}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    value={email}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    className="form-control"
                    type="text"
                    name="phone"
                    onChange={this.onChange}
                    value={phone}
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


export default connect(null, { addCustomer })(CustomerForm);
