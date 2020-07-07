import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '..//../actions/accounts';
import PropTypes from 'prop-types';
import axios from 'axios';
import { accounttypesURL } from '../../constants';
import { getAccountTypes} from '..//../actions/accounttypes';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {InputTextarea} from 'primereact/inputtextarea';


class AccountForm extends Component{
      state = {
          account_type: '',
          name: '',
          description: '',
          initial_balance: '',
          is_active: '',
          is_contra: '',
          order: '',


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
      this.setState({
          account_type: '',
          name: '',
          description: '',
          initial_balance: '',
          is_active: '',
          is_contra: '',
          order: '',

        });
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
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>Name</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>Initial-Balance</label>
                    <InputText
                      className="form-control"
                      type="number"
                      name="initial_balance"
                      onChange={this.onChange}
                      value={initial_balance}
                    />
                  </div>


                  <div className="p-field p-col-12 p-md-12">
                    <label>Description</label>
                    <InputTextarea
                      row="3"
                      className="form-control"
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      value={description}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>IS-ACTIVE</label>
                    <InputText
                      className="form-control"
                      type="checkbox"
                      name="is_active"
                      onChange={this.onChange}
                      value={is_active}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>IS-CONTRA</label>
                    <InputText
                      className="form-control"
                      type="checkbox"
                      name="is_contra"
                      onChange={this.onChange}
                      value={is_contra}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-12">
                    <label>Order</label>
                    <InputText
                      className="form-control"
                      type="number"
                      name="order"
                      onChange={this.onChange}
                      value={order}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-4">
                    <Dropdown
                        id="statusInLineEdit"
                        filter={true}
                        optionLabel="account_type.name"
                        optionValue="account_type.id"
                        inputId="account_type"
                        value={account_type.id }
                        options={this.props.accounttypes}
                        onChange={this.onChange}
                        placeholder="Select AcoountType"
                        optionLabel="name"
                        filterBy={account_type.id}
                        showClear= {true}
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


const mapStateToProps = state =>({
    accounttypes: state.accounttypes.accounttypes
})


export default connect(mapStateToProps, {getAccountTypes, addAccount})(AccountForm);
