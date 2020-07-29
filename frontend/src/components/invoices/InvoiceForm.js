import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInvoice } from '..//../actions/invoices';
import { getCustomers } from '..//../actions/customers';
import { getSalesreps } from '..//../actions/salesrep';
import { getWarehouses } from '..//../actions/warehouses';
import { getEmployees } from '..//../actions/employees';
import { getInvoiceSaleChoices } from '..//../actions/choices';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {Calendar} from "primereact/calendar";
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';
import InvoiceLines from './Lines';
import PropTypes from 'prop-types';
import {Dropdown} from 'primereact/dropdown';

export class InvoiceForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: null,
            customer: null,
            purchase_order_number: '',
            invoice_validated_by: null,
            sales_person: null,
            due: '',
            terms: '',
            comments: '',
            ship_from: null,
            draft: false,
            lines: [{ index: Math.random(), product: "", tax: "", discount: "", line_type: '' }],

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.handleDraft = this.handleDraft.bind(this);
        this.onStatus = this.onStatus.bind(this);
        this.onCustomer = this.onCustomer.bind(this);
        this.onInvoiceValidator = this.onInvoiceValidator.bind(this);
        this.onSalesPerson = this.onSalesPerson.bind(this);
        this.onShipFrom = this.onShipFrom.bind(this);
    }

    onStatus (e){
      this.setState({type: e.value})
    }

    onCustomer (e){
      this.setState({category: e.value})
    }

    onInvoiceValidator (e){
      this.setState({unit: e.value})
    }

    onSalesPerson (e){
      this.setState({supplier: e.value})
    }

    onShipFrom (e){
      this.setState({equipment_component: e.value})
    }

    handleDraft() {
      this.setState({
        draft: !this.state.checked
      });
    }


    handleChange = (e) => {
        if (["product", "tax", "discount", 'line_type'].includes(e.target.name)) {
          let lines = [...this.state.lines]
          lines[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
          this.setState({ [e.target.name]: e.target.value })
        }
    }

    addNewRow = (e) => {
        this.setState((prevState) => ({
            lines: [...prevState.lines, { index: Math.random(), product: "", tax: "", discount: "", line_type: '' }],
        }));
    }

    deleteRow = (index) => {
        this.setState({
            lines: this.state.lines.filter((s, sindex) => index !== sindex),
        });
    }

    clickOnDelete(record) {
        this.setState({
          lines: this.state.lines.filter(r => r !== record)
        });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          sales_person,
          due,
          terms,
          comments,
          ship_from,
          draft,
          lines

      } = this.state;

      const invoice = {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          sales_person,
          due,
          terms,
          comments,
          ship_from,
          draft,
          lines,
      };

      this.props.addInvoice(invoice);
      this.setState({
          lines: [],
          status: "",
          customer: "",
          purchase_order_number: "",
          invoice_validated_by: "",
          sales_person: "",
          due: "",
          terms: "",
          comments: "",
          ship_from: "",
          draft: true,

        });
        this.props.history.push('/invoices');
    };

    static propTypes = {
        addQuotation: PropTypes.func.isRequired,
        getCustomers: PropTypes.func.isRequired,
        getSalesreps: PropTypes.func.isRequired,
        getWarehouses: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.getCustomers();
      this.props.getSalesreps();
      this.props.getWarehouses();
      this.props.getInvoiceSaleChoices();
      this.props.getEmployees();

    }


    render() {
        const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          sales_person,
          due,
          terms,
          ship_from,
          comments,
        } = this.state;

        let { lines } = this.state

        const { customers} = this.props;
        const { salesreps} = this.props;
        const { invoicesalechoices} = this.props;
        const { warehouses} = this.props;
        const { employees } = this.props;


        return (
            <div className="card card-body mt-4 mb-4">
              <h2>ADD INVOICE</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Purchase Order Number</label>
                  <InputNumber
                    className="form-control"
                    name="purchase_order_number"
                    onChange={this.onChange}
                    value={purchase_order_number}
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
                  <label>Due</label>
                  <Calendar
                    showIcon={true}
                    className="form-control"
                    name="due"
                    onChange={this.onChange}
                    value={due}
                    dateFormat="yy-mm-dd"
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Terms</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="terms"
                    onChange={this.onChange}
                    value={terms}
                  />
                </div>

                <div className="p-field p-col-12 p-md-12">
                  <label>Comments</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT INVOICE VALIDATED BY"
                    value={invoice_validated_by}
                    onChange={this.onInvoiceValidator}
                    options={employees}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="username" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT CUSTOMER"
                    value={customer}
                    onChange={this.onCustomer}
                    options={customers}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT SALES PERSON"
                    value={sales_person}
                    onChange={this.onSalesPerson}
                    options={salesreps}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="employee" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT SHIP FROM"
                    value={ship_from}
                    onChange={this.onShipFrom}
                    options={warehouses}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT STATUS"
                    value={status}
                    onChange={this.onStatus}
                    options={invoicesalechoices}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="value" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                  <label>DRAFT :</label>
                  <Checkbox
                    inputId="working"
                    onChange={this.handleDraft}
                    checked={this.state.draft}
                  /> 
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
                <table className="table">
                  <thead>
                      <tr>
                        <th>DISCOUNT</th>
                        <th>PRODUCT</th>
                        <th>TAX</th>
                        <th>LINE-TYPE</th>
                      </tr>
                    </thead>
                    <tbody>
                      <InvoiceLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
                    </tbody>
                    <tfoot>
                      <tr><td colSpan="4">
                          <Button onClick={this.addNewRow} type="button" icon='pi pi-plus' className="p-button-warning"/>
                      </td></tr>
                    </tfoot>
                </table>
              </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    customers: state.customers.customers,
    salesreps: state.salesreps.salesreps,
    warehouses: state.warehouses.warehouses,
    invoicesalechoices: state.invoicesalechoices.invoicesalechoices,
    employees: state.employees.employees

})

export default connect(
      mapStateToProps, 
      { getCustomers, getSalesreps, getWarehouses, getInvoiceSaleChoices, getEmployees, addInvoice })
      (InvoiceForm);




