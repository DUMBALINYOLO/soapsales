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
    constructor(props){
      super(props);
      this.state = {
        name: '',
        description: '',
        category: null,
        initial_value: '',
        depreciation_period: '',
        init_date: '',
        depreciation_method: null,
        salvage_value: '',
        credit_account: null,
        created_by: null,
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onCategory = this.onCategory.bind(this);
      this.onDepreciationMethod = this.onDepreciationMethod.bind(this);
      this.onCreditAccount = this.onCreditAccount.bind(this);
      this.onCreatedBy = this.onCreatedBy.bind(this);
    }

    onCategory (e){
      this.setState({category: e.value})
    } 

    onDepreciationMethod (e){
      this.setState({depreciation_period: e.value})
    } 

    onCreditAccount (e){
      this.setState({credit_account: e.value})
    } 

    onCreatedBy (e){
      this.setState({created_by: e.value})
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

                  <div className="p-field p-col-12 p-md-12">
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
                    <Dropdown 
                      placeholder ="SELECT DEPRECIATION METHOD"
                      value={depreciation_method}
                      onChange={this.onDepreciationMethod}
                      options={assetsdepreciationmethodchoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="key"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT ASSET CATEGORY"
                      value={category}
                      onChange={this.onCategory}
                      options={assettypeschoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="key"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT CREDIT ACCOUNT"
                      value={credit_account}
                      onChange={this.onCreditAccount}
                      options={accounts}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT CREATED BY"
                      value={created_by}
                      onChange={this.onCreatedBy}
                      options={employees}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="employee_number" 
                      optionValue="id"
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
    assetsdepreciationmethodchoices: state.assetsdepreciationmethodchoices.assetsdepreciationmethodchoices,
    assettypeschoices: state.assettypeschoices.assettypeschoices,
    accounts: state.accounts.accounts,
    employees: state.employees.employees
})

export default connect(
        mapStateToProps, 
        {getAssetDepriciationMethodChoices, getAssetTypeChoices, getEmployees, getAccounts, addAsset })
        (AssetForm);
