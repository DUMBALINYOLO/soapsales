import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '..//../actions/accounts';
import PropTypes from 'prop-types';
import axios from 'axios';
import { accounttypesURL } from '../../constants';
import { getAccountTypes} from '..//../actions/accounttypes';
import {Dropdown} from 'primereact/dropdown';





export class AccountForm extends Component{
  constructor(props, context) {
      super(props, context)
      this.state = {
          account_type: '',
          name: '',
          description: '',
          initial_balance: '',
          is_active: '',
          is_contra: '',
          order: '',
          selectedAccountType: null,

      }
    }


  // onAccountTypeChange(e) {
  //       this.setState({selectedAccountType: e.value});
  //   }


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
        getAccountTypes: PropTypes.func.isRequired,

    }

    componentDidMount() {
      this.props.getAccountTypes()
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
        const { inputValue } = this.state;


        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Account</h2>
              <form onSubmit={this.onSubmit}>

                <div className="form-group">
                  <Dropdown optionValue="account_type.id" inputId="account_type" value={this.state.selectedAccountType} options={this.props.accounttypes} onChange={this.onChange} placeholder="Select AcoountType" optionLabel="name"/>
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


const mapStateToProps = state =>({
    accounttypes: state.accounttypes.accounttypes
})


export default connect(mapStateToProps, {getAccountTypes, addAccount})(AccountForm);
