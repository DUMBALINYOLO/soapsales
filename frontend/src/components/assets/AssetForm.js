import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '..//../actions/assets';
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
        credited_by: '',
        depreciation: [],
        categories: [],
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by } = this.state;
      const asset = { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by };
      this.props.addAsset(asset);

    };

    static propTypes = {
        addAsset: PropTypes.func.isRequired,
        getAssetDepriciationMethodChoices: PropTypes.func.isRequired,
        getAssetTypeChoices: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getAssetDepriciationMethodChoices()
      this.props.getAssetTypeChoices()
    }
    render() {
        const { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by } = this.state;

        const {assetsdepreciationmethodchoices} = this.props;
        console.log(assetsdepreciationmethodchoices)

        let depreciation = assetsdepreciationmethodchoices.length > 0
            && assetsdepreciationmethodchoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        const {assettypeschoices} = this.props;

        console.log(assettypeschoices)


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
                      className="form-control"
                      type="number"
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
                      name="init date"
                      onChange={this.onChange}
                      value={init_date}
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>Depreciation Period</label>
                    <InputNumber
                      className="form-control"
                      type="number"
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
                      className="form-control"
                      type="number"
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
                    <label>Credit Account</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="credit account"
                      onChange={this.onChange}
                      value={credit_account}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>Credited By</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="credited by"
                      onChange={this.onChange}
                      value={credited_by}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-4">
                      <select
                          name="depreciation_method"
                          value={depreciation_method}
                          onChange={this.onChange}
                      >
                          {depreciation}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-4">
                      <select
                          name="category"
                          value={category}
                          onChange={this.onChange}
                      >
                          {categories}
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
})

export default connect(mapStateToProps, {getAssetDepriciationMethodChoices, getAssetTypeChoices, addAsset })(AssetForm);
