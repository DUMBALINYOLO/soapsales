import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {InputNumber} from 'primereact/inputnumber';
import {Button} from 'primereact/button';
import { addPricinggroup } from '../../actions/pricinggroup';
import PropTypes from 'prop-types';

export class PricinggroupForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            group_pricing_unit_sales_price: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, group_pricing_unit_sales_price } = this.state;
      const pricinggroup = { name, group_pricing_unit_sales_price };
      this.props.addPricinggroup(pricinggroup);
      this.setState({
            name: '',
            group_pricing_unit_sales_price: '',
        });
      this.props.history.push('/pricinggroups');
    };

    static propTypes = {
        addPricinggroup: PropTypes.func.isRequired,
    }


    render() {
        const { name, group_pricing_unit_sales_price } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Sales Group </h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Name</label>
                  <InputText
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>GROUP PRICING UNIT SALES PRICE</label>
                  <InputNumber
                    name="group_pricing_unit_sales_price"
                    onChange={this.onChange}
                    value={group_pricing_unit_sales_price}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="p-button-danger"
                    incrementButtonClassName="p-button-success"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    step={1}
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


export default connect(null, { addPricinggroup })(PricinggroupForm);
