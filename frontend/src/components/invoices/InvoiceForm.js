import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInvoice } from '..//../actions/invoices';
import PropTypes from 'prop-types';

export class InvoiceForm extends Component{
    state = {
        status: '',
        customer: '',
        purchase_order_number: '',
        invoice_validated_by: '',
        draft: '',
        sales_person: '',
        due: '',
        terms: '',
        comments: '',
        ship_from: ''
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
      } = this.state;

      const invoice = {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
      };

      this.props.addInvoice(invoice);

    };

    static propTypes = {
        addInvoice: PropTypes.func.isRequired,
    }


    render() {
        const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Invoice</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Status</label>
                  <input
                    className="form-control"
                    type="text"
                    name="status"
                    onChange={this.onChange}
                    value={status}
                  />
                </div>

                <div className="form-group">
                  <label>Customer</label>
                  <input
                    className="form-control"
                    type="text"
                    name="customer"
                    onChange={this.onChange}
                    value={customer}
                  />
                </div>

                <div className="form-group">
                  <label>Purchase Order Number</label>
                  <input
                    className="form-control"
                    type="number"
                    name="purchase order number"
                    onChange={this.onChange}
                    value={purchase_order_number}
                  />
                </div>
                <div className="form-group">
                  <label>Invoice validated by</label>
                  <input
                    className="form-control"
                    type="text"
                    name="invoice validated by"
                    onChange={this.onChange}
                    value={invoice_validated_by}
                  />
                </div>

                <div className="form-group">
                  <label>Draft</label>
                  <input
                    className="form-control"
                    type="text"
                    name="draft"
                    onChange={this.onChange}
                    value={draft}
                  />
                </div>

                <div className="form-group">
                  <label>Sales Person</label>
                  <input
                    className="form-control"
                    type="text"
                    name="sales person"
                    onChange={this.onChange}
                    value={sales_person}
                  />
                </div>
                <div className="form-group">
                  <label>Due</label>
                  <input
                    className="form-control"
                    type="date"
                    name="due"
                    onChange={this.onChange}
                    value={due}
                  />
                </div>

                <div className="form-group">
                  <label>Terms</label>
                  <input
                    className="form-control"
                    type="text"
                    name="terms"
                    onChange={this.onChange}
                    value={terms}
                  />
                </div>

                <div className="form-group">
                  <label>Comments</label>
                  <input
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>

                <div className="form-group">
                  <label>Ship from</label>
                  <input
                    className="form-control"
                    type="text"
                    name="ship from"
                    onChange={this.onChange}
                    value={ship_from}
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

export default connect(null, { addInvoice })(InvoiceForm);
