import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPayment } from '..//../actions/payments';
import PropTypes from 'prop-types';

export class PaymentForm extends Component{
    state = {
        date: '',
        amount: '',
        invoice: '',
        method: '',
        sales_rep: '',
        comments: '',
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          date,
          amount,
          invoice,
          method,
          sales_rep,
          comments,
      } = this.state;

      const payment = {
          date,
          amount,
          invoice,
          method,
          sales_rep,
          comments,
      };

      this.props.addPayment(payment);

    };

    static propTypes = {
        addPayment: PropTypes.func.isRequired,
    }


    render() {
        const {
            date,
            amount,
            invoice,
            method,
            sales_rep,
            comments,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Payment</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    name="amount"
                    onChange={this.onChange}
                    value={amount}
                  />
                </div>
                <div className="form-group">
                <label>Date</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={date}
                />
                </div>
                <div className="form-group">
                  <label>Invoice</label>
                  <input
                    className="form-control"
                    type="text"
                    name="invoice"
                    onChange={this.onChange}
                    value={invoice}
                  />
                </div>
                <div className="form-group">
                  <label>Method</label>
                  <input
                    className="form-control"
                    type="text"
                    name="method"
                    onChange={this.onChange}
                    value={method}
                  />
                </div>
                <div className="form-group">
                  <label>Sales Rep</label>
                  <input
                    className="form-control"
                    type="text"
                    name="sales rep"
                    onChange={this.onChange}
                    value={sales_rep}
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
             </form>
         </div>
        );
    }
}

export default connect(null, { addPayment })(PaymentForm);
