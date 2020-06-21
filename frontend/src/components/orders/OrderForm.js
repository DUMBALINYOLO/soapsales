import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addOrder } from '..//../actions/orders';
import PropTypes from 'prop-types';

export class OrderForm extends Component{
    state = {
        status: '',
        supplier: '',
        tracking_number: '',
        received_to_date: '',
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        status,
        supplier,
        tracking_number,
        received_to_date,
      } = this.state;

      const orders = {
          status,
          supplier,
          tracking_number,
          received_to_date,
      };

      this.props.addOrder(orders);

    };

    static propTypes = {
        addOrder: PropTypes.func.isRequired,
    }


    render() {
        const {
            status,
            supplier,
            tracking_number,
            received_to_date,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Order</h2>
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
                <label>Supplier</label>
                <input
                  className="form-control"
                  type="text"
                  name="supplier"
                  onChange={this.onChange}
                  value={supplier}
                />
                </div>
                <div className="form-group">
                  <label>Tracking Number</label>
                  <input
                    className="form-control"
                    type="text"
                    name="tracking number"
                    onChange={this.onChange}
                    value={tracking_number}
                  />
                </div>
                <div className="form-group">
                  <label>Received To Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="received to date"
                    onChange={this.onChange}
                    value={received_to_date}
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

export default connect(null, { addOrder })(OrderForm);
