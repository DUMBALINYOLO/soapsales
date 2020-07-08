import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSalesrep } from '../../actions/salesrep';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';

export class SalesrepForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee: '',
            employeeOption: [],
            can_offer_discounts: true,
            can_offer_invoices: true,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDiscounts = this.handleDiscounts.bind(this);
        this.handleInvoices = this.handleInvoices.bind(this);
    }
    handleDiscounts(event) {
      const target = event.target;
      const value = target.name === 'can_offer_discounts' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleInvoices(event) {
      const target = event.target;
      const value = target.name === 'can_offer_invoices' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { employee, can_offer_discounts, can_offer_invoices } = this.state;
      const salesrep = { employee, can_offer_discounts, can_offer_invoices };
      this.props.addSalesrep(salesrep);
    };

    static propTypes = {
        addSalesrep: PropTypes.func.isRequired,
    }


    render() {
        const { employee, can_offer_discounts, can_offer_invoices } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Sales Rep</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Employee</label>
                  <input
                    className="form-control"
                    type="text"
                    name="employee"
                    onChange={this.onChange}
                    value={employee}
                  />
                </div>

                <label>
                    Can Offer Invoices:
                    <input
                      name="can_offer_invoices"
                      type="checkbox"
                      checked={can_offer_invoices}
                      onChange={this.handleInvoices} />
                  </label>
                  <label>
                      Can Offer Discounts:
                      <input
                        name="can_offer_discounts"
                        type="checkbox"
                        checked={can_offer_discounts}
                        onChange={this.handleDiscounts} />
                    </label>

                    <div className="p-field p-col-12 p-md-6">
                      <Button label="Submit" className="p-button-success p-button-rounded" />
                    </div>
                  </div>
             </form>
         </div>
        );
    }
}


export default connect(null, { addSalesrep })(SalesrepForm);
