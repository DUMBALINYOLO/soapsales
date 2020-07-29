import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { addCustomer } from '..//../actions/customers';
import PropTypes from 'prop-types';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {InputTextarea} from 'primereact/inputtextarea';




export class CustomerForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        is_organization: false,
        billing_address: '',
        banking_details: '',
        website: '',
        bp_number: '',
        email: '',
        phone: ''
    }
    this.handleIsOrganization = this.handleIsOrganization.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

    handleIsOrganization() {
      this.setState({
        is_organization: !this.state.checked
      });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        name, 
        is_organization, 
        billing_address, 
        banking_details, 
        website, 
        bp_number, 
        email, 
        phone 
      } = this.state;
      const customer = { 
        name, 
        is_organization, 
        billing_address, 
        banking_details, 
        website, 
        bp_number, 
        email, 
        phone 
      };
      this.props.addCustomer(customer);
      console.log(customer);
      this.setState({
        name: '',
        is_organization: false,
        billing_address: '',
        banking_details: '',
        website: '',
        bp_number: '',
        email: '',
        phone: ''

        });
      this.props.history.push('/customers');
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
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                      <label>Name</label>
                      <InputText
                        className="form-control"
                        type="text"
                        name="name"
                        onChange={this.onChange}
                        value={name}
                      />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>Email</label>
                      <InputText
                        className="form-control"
                        type="email"
                        name="email"
                        onChange={this.onChange}
                        value={email}
                      />
                  </div>

                  <div className="p-field p-col-12">
                    <label>Billing Address</label>
                    <InputTextarea
                      rows="3" 
                      className="form-control"
                      type="text"
                      name="billing_address"
                      onChange={this.onChange}
                      value={billing_address}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>Website</label>
                    <InputText 
                      className="form-control"
                      type="text"
                      name="website"
                      onChange={this.onChange}
                      value={website}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>Bp Number</label>
                    <InputText 
                      name="bp_number"
                      onChange={this.onChange}
                      value={bp_number}
                    />
                  </div>
                  <div className="p-field p-col-12">
                    <label>Banking Details</label>
                    <InputTextarea
                      rows="3"
                      name="banking_details"
                      onChange={this.onChange}
                      value={banking_details}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>Phone</label>
                    <InputText 
                      className="form-control"
                      type="text"
                      name="phone"
                      onChange={this.onChange}
                      value={phone}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>IS ORGANIZATION :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleIsOrganization}
                      checked={this.state.is_organization}
                    />                        
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


export default connect(null, { addCustomer })(CustomerForm);
