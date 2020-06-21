import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrderpayment } from '..//../actions/orderpayments';
import PropTypes from 'prop-types';

export class OrderpaymentForm extends Component{
    state = {
        date: '',
        ammount: '',
        order: '',
        comments: '',
        entry: '',
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        date,
        ammount,
        order,
        comments,
        entry,
      } = this.state;

      const orderpayments = {
          date,
          ammount,
          order,
          comments,
          entry,
      };

      this.props.addOrderpayment(orderpayments);

    };

    static propTypes = {
        addOrderpayment: PropTypes.func.isRequired,
    }


    render() {
        const {
            date,
            ammount,
            order,
            comments,
            entry,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Order Payment</h2>
              <form onSubmit={this.onSubmit}>
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
                <label>Ammount</label>
                <input
                  className="form-control"
                  type="text"
                  name="ammount"
                  onChange={this.onChange}
                  value={ammount}
                />
                </div>
                <div className="form-group">
                  <label>Order</label>
                  <input
                    className="form-control"
                    type="text"
                    name="order"
                    onChange={this.onChange}
                    value={order}
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
                  <label>Entry</label>
                  <input
                    className="form-control"
                    type="text"
                    name="entry"
                    onChange={this.onChange}
                    value={entry}
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

export default connect(null, { addOrderpayment })(OrderpaymentForm);
