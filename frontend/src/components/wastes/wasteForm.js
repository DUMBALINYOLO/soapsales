import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWasteReport } from '..//../actions/wasteReports';
import PropTypes from 'prop-types';
import { getEmployees } from '..//../actions/employees';
import { getProcessproducts } from '..//../actions/processproducts';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';

export class WasteReportForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            product: '',
            unit: '',
            quantity: '',
            comments: '',
            recorded_by: '',
            employeeList: [],
            ProcessProductList: [],
            unitOfMeasure: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { product, unit, quantity, comments, recorded_by } = this.state;
      const wasteReport = { product, unit, quantity, comments, recorded_by };
      this.props.addWasteReport(wasteReport);
      this.setState({
            product: '',
            unit: '',
            quantity: '',
            comments: '',
            recorded_by: '',

        });
      this.props.history.push('/wastereportgenerations');
    };

    static propTypes = {
        addWasteReport: PropTypes.func.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcessproducts()
      this.props.getUnitmeasures()
      this.props.getEmployees()
    }


    render() {
        const { product, unit, quantity, comments, recorded_by } = this.state;
        const { processproducts } = this.props;
        const { unitmeasures } = this.props;
        const { employees } = this.props;

        let ProcessProductroductList = processproducts.length > 0
            && processproducts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let unitOfMeasure = unitmeasures.length > 0
            && unitmeasures.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let employeeList = employees.length > 0
            && employees.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.username}</option>
                )
            }, this);
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Waste Report</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                    <label>QUANTITY</label>
                    <InputNumber
                      name="quantity"
                      onChange={this.onChange}
                      value={quantity}
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
                  <label>COMMNETS</label>
                  <InputTextarea
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>PRODUCT</label>
                  <select
                      name="product"
                      value={product}
                      onChange={this.onChange}
                  >
                      {ProcessProductroductList}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>UNIT</label>
                  <select
                      name="unit"
                      value={unit}
                      onChange={this.onChange}
                  >
                      {unitOfMeasure}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>RECORDED BY</label>
                  <select
                      name="recorded_by"
                      value={recorded_by}
                      onChange={this.onChange}
                  >
                      {employeeList}
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
    unitmeasures: state.unitmeasures.unitmeasures,
    processproducts: state.processproducts.processproducts,
    employees: state.employees.employees
})

export default connect(mapStateToProps, { getUnitmeasures, getProcessproducts, getEmployees, addWasteReport })(WasteReportForm);
