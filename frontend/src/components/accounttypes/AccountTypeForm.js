import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountType } from '..//../actions/accounttypes';
import { getAccountTypes} from '..//../actions/accounttypes';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class AccountTypeForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                category: '',
                classification: '',
                name: '',
                order: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }



    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        category,
        classification,
        name,
        order
      } = this.state;

      const accounttype = {
          category,
          classification,
          name,
          order
      };

      this.props.addAccountType(accounttype);

    };

    static propTypes = {
        addAccountType: PropTypes.func.isRequired,
        getAccountTypes: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getAccountTypes()
    }

    render() {
        const {
         category,
         classification,
         name,
         order
        } = this.state;

        const {} = this.props;

        let categorise = category.length > 0
            && category.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let classifications = classification.length > 0
            && classification.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>AddAccountType</h2>
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
                      name="category"
                      value={category}
                      onChange={this.onChange}
                  >
                      {category}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                  <select
                      name="classification"
                      value={classification}
                      onChange={this.onChange}
                  >
                      {classification}
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

export default connect(mapStateToProps, {getAccountTypes, addAccountType })(AccountTypeForm);
