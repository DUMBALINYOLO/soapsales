import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '..//../actions/accounts';
import PropTypes from 'prop-types';

export class AccountForm extends Component{
    state = {
        account_type: '',
        name: '',
        description: '',
        initial_balance: '',
        is_active: '',
        is_contra: '',
        order: '',
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        account_type,
        name,
        description,
        initial_balance,
        is_active,
        is_contra,
        order 
      } = this.state;

      const account = { 
        account_type,
        name,
        description,
        initial_balance,
        is_active,
        is_contra,
        order 
      };

      this.props.addAccount(account);

    };

    static propTypes = {
        addAccount: PropTypes.func.isRequired,
    }


    render() {
        const {  
          account_type,
          name,
          description,
          initial_balance,
          is_active,
          is_contra,
          order 
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Account</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Account Type</label>
                  <input
                    className="form-control"
                    type="select"
                    name="account_type"
                    onChange={this.onChange}
                    value={account_type}
                  />
                </div>

                <div class="form-group">
                  <label >Account-Type</label>
                  <select class="form-control">
                    <option selected>{account_type}</option>
                    <option>{account_type}</option>
                  </select>
                </div>
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
                  <label>Description</label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>

                <div className="form-group">
                  <label>Initial-Balance</label>
                  <input
                    className="form-control"
                    type="number"
                    name="initial_balance"
                    onChange={this.onChange}
                    value={initial_balance}
                  />
                </div>

                <div className="form-group">
                  <label>IS-ACTIVE</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="is_active"
                    onChange={this.onChange}
                    value={is_active}
                  />
                </div>

                <div className="form-group">
                  <label>IS-CONTRA</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="is_contra"
                    onChange={this.onChange}
                    value={is_contra}
                  />
                </div>

                <div className="form-group">
                  <label>Order</label>
                  <input
                    className="form-control"
                    type="number"
                    name="order"
                    onChange={this.onChange}
                    value={order}
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

export default connect(null, { addAccount })(AccountForm);
