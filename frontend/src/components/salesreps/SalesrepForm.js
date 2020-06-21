import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSalesrep } from '../../actions/salesrep';
import PropTypes from 'prop-types';

export class SalesrepForm extends Component{
    state = {
        employee: '',
        can_offer_discounts: '',
        can_offer_invoices: '',
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
                <div className="form-group">
                  <label>Employee</label>
                  <input
                    className="form-control"
                    type="text"
                    name="employee"
                    onChange={this.onChange}
                    value={employee}
                  />
                </div>
                <div className="form-group">
                  <label>Can Offer Invoices</label>
                  <input
                    className="form-control"
                    type="choice-field"
                    name="can offer invoices"
                    onChange={this.onChange}
                    value={can_offer_invoices}
                  />
                </div>
                <div className="form-group">
                  <label>Can Offer Discounts</label>
                  <input
                    className="form-control"
                    type="choice-field"
                    name="can offer discounts"
                    onChange={this.onChange}
                    value={can_offer_discounts}
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


export default connect(null, { addSalesrep })(SalesrepForm);
