import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSupplier } from '..//../actions/suppliers';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Checkbox} from 'primereact/checkbox';

class SupplierForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            is_organization: false,
            is_individual: false,
            business_address: '',
            website: '',
            bp_number: '', 
            email: '',
            phone: '',
            contact_person: '',

        }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleIsOrganization = this.handleIsOrganization.bind(this);
      this.handleIsIndividual = this.handleIsIndividual.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleIsOrganization() {
      this.setState({
        is_organization: !this.state.checked
      });
    }

    handleIsIndividual() {
      this.setState({
        is_individual: !this.state.checked
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      const {
        name,
        is_organization,
        is_individual,
        business_address,
        website,
        bp_number, 
        email,
        phone,
        contact_person,

      } = this.state;

      const supplier = {
        name,
        is_organization,
        is_individual,
        business_address,
        website,
        bp_number, 
        email,
        phone,
        contact_person,
      };

      this.props.addSupplier(supplier);
      this.setState({
          name: '',
          is_organization: true,
          is_individual: true,
          business_address: '',
          website: '',
          bp_number: '', 
          email: '',
          phone: '',
          contact_person: '',

        });
      this.props.history.push('/suppliers');
    };

    static propTypes = {
        addSupplier: PropTypes.func.isRequired,


    }

    render() {
        const {
          name,
          is_organization,
          is_individual,
          business_address,
          website,
          bp_number, 
          email,
          phone,
          contact_person,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Account</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>NAME</label>
                    <InputText
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>WEBSITE</label>
                    <InputText
                      name="website"
                      onChange={this.onChange}
                      value={website}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>BP NUMBER</label>
                    <InputText
                      name="bp_number"
                      onChange={this.onChange}
                      value={bp_number}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>EMAIL</label>
                    <InputText
                      name="email"
                      onChange={this.onChange}
                      value={email}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>PHONE</label>
                    <InputText
                      name="phone"
                      onChange={this.onChange}
                      value={phone}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>CONTACT PERSON</label>
                    <InputText
                      name="contact_person"
                      onChange={this.onChange}
                      value={contact_person}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>BUSINESS ADDRESS</label>
                    <InputTextarea
                      row="3"
                      name="business_address"
                      onChange={this.onChange}
                      value={business_address}
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
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>IS INDIVIDUAL :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleIsIndividual}
                      checked={this.state.is_individual}
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

export default connect(null, { addSupplier})(SupplierForm);
