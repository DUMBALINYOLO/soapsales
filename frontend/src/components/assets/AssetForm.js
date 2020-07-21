import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '..//../actions/assets';
import { getAccounts } from '..//../actions/accounts';
import { getEmployees } from '..//../actions/employees';
import { getAssetDepriciationMethodChoices, getAssetTypeChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar"

export class AssetForm extends Component{
    state = {
        name: '',
        description: '',
        category: '',
        initial_value: '',
        depreciation_period: '',
        init_date: '',
        depreciation_method: '',
        salvage_value: '',
        credit_account: '',
        created_by: '',
        depreciations: [],
        categories: [],
        debitAccounts: [],
        assetCreators:[],
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        name, 
        description, 
        category, 
        initial_value, 
        depreciation_period, 
        init_date, 
        depreciation_method, 
        salvage_value, 
        credit_account, 
        created_by 
      } = this.state;
      const asset = { 
        name,
        description, 
        category, 
        initial_value, 
        depreciation_period, 
        init_date, 
        depreciation_method, 
        salvage_value, 
        credit_account, 
        created_by 
      };
      this.props.addAsset(asset);
      this.setState({
        name: '',
        description: '', 
        category: '', 
        initial_value: '', 
        depreciation_period: '', 
        init_date: '', 
        depreciation_method: '', 
        salvage_value: '', 
        credit_account: '', 
        created_by : ''

        });
      this.props.history.push('/assets');

    };

    static propTypes = {
        addAsset: PropTypes.func.isRequired,
        getAssetDepriciationMethodChoices: PropTypes.func.isRequired,
        getAssetTypeChoices: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired,
        getAccounts: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getAssetDepriciationMethodChoices()
      this.props.getAssetTypeChoices()
      this.props.getEmployees()
      this.props.getAccounts()
    }
    render() {
        const { 
          name, 
          description, 
          category, 
          initial_value, 
          depreciation_period, 
          init_date, 
          depreciation_method, 
          salvage_value, 
          credit_account, 
          created_by } = this.state;

        const {assetsdepreciationmethodchoices} = this.props;
        const {assettypeschoices} = this.props;
        const { accounts } = this.props;
        const { employees } = this.props;


        let debitAccounts = accounts.length > 0
            && accounts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let assetCreators = employees.length > 0
            && employees.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.username}| {item.employee_number} </option>
                )
            }, this);

       

        let depreciations = assetsdepreciationmethodchoices.length > 0
            && assetsdepreciationmethodchoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);


        let categories = assettypeschoices.length > 0
            && assettypeschoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Asset</h2>
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
                    <label>Initial Value</label>
                    <InputNumber
                      name="initial_value"
                      onChange={this.onChange}
                      value={initial_value}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>DESCRIPTION</label>
                    <InputTextarea
                      rows="3"
                      className="form-control"
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      value={description}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>Init Date</label>
                    <Calendar
                      showIcon={true}
                      className="form-control"
                      type="date"
                      name="init_date"
                      onChange={this.onChange}
                      value={init_date}
                      dateFormat="yy-mm-dd"
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>Depreciation Period</label>
                    <InputNumber
                      name="depreciation_period"
                      onChange={this.onChange}
                      value={depreciation_period}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>SALVAGE VALUE</label>
                    <InputNumber
                      name="salvage_value"
                      onChange={this.onChange}
                      value={salvage_value}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}

                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>Depreciation Method</label>
                      <select
                          name="depreciation_method"
                          value={depreciation_method}
                          onChange={this.onChange}
                      >
                          {depreciations}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>Asset Category</label>
                      <select
                          name="category"
                          value={category}
                          onChange={this.onChange}
                      >
                          {categories}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-4">
                      <label>CREDIT ACCOUNT</label>
                      <select
                          name="credit_account"
                          value={credit_account}
                          onChange={this.onChange}
                      >
                          {debitAccounts}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-4">
                      <label>Created By</label>
                      <select
                          name="created_by"
                          value={created_by}
                          onChange={this.onChange}
                      >
                          {assetCreators}
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
    assetsdepreciationmethodchoices: state.assetsdepreciationmethodchoices.assetsdepreciationmethodchoices,
    assettypeschoices: state.assettypeschoices.assettypeschoices,
    accounts: state.accounts.accounts,
    employees: state.employees.employees
})

export default connect(
        mapStateToProps, 
        {getAssetDepriciationMethodChoices, getAssetTypeChoices, getEmployees, getAccounts, addAsset })
        (AssetForm);
