import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccount } from '..//../actions/accounts';
import PropTypes from 'prop-types';
import { accounttypesURL } from '../../constants';
import { getAccountTypes} from '..//../actions/accounttypes';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';



class AccountForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            account_type: '',
            name: '',
            description: '',
            initial_balance: '',
            is_active: true,
            is_contra: true,
            order: '',
      }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleContra = this.handleContra.bind(this);
      this.handleActive = this.handleActive.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleContra(event) {
      const target = event.target;
      const value = target.name === 'is_contra' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleActive(event) {
      const target = event.target;
      const value = target.name === 'is_active' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

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
          is_active: true,
          is_contra: true,
          order: '',

        });
      this.props.history.push('/accounts');
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
        
        const {accounttypes} = this.props;
        let typesOptions = accounttypes.length > 0
            && accounttypes.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

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

                  <label>
                      Is Contra:
                      <input
                        name="is_contra"
                        type="checkbox"
                        checked={this.state.is_contra}
                        onChange={this.handleContra} />
                    </label>
                    <label>
                        Is Active:
                        <input
                          name="is_active"
                          type="checkbox"
                          checked={this.state.is_active}
                          onChange={this.handleActive} />
                    </label>

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
                    <select
                        name="account_type"
                        value={account_type}
                        onChange={this.onChange}
                    >
                        {typesOptions}
                    </select>
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
