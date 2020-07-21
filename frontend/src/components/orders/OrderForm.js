import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import {Dropdown} from 'primereact/dropdown';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {InputTextarea} from 'primereact/inputtextarea';
import { getInventorycontrollers } from '..//../actions/inventorycontrollers';
import { getSuppliers } from '..//../actions/suppliers';
import { getWarehouses } from '..//../actions/warehouses';
import { getInventoryOrderStatusChoices } from '..//../actions/choices';
import { addOrder } from '..//../actions/orders';
import { getTaxes} from '..//../actions/taxes';
import {Calendar} from "primereact/calendar";
import {InputNumber} from 'primereact/inputnumber';
import PropTypes from 'prop-types';
import OrderItems from './OrderItems';




class OrderForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      validated_by: '',
      expected_receipt_date: '',
      date: '',
      due: '',
      supplier: '',
      supplier_invoice_number: '',
      bill_to: '',
      ship_to: '',
      tracking_number: '',
      notes: '',
      status: '',
      tax: '',
      received_to_date: '',
      issuing_inventory_controller: '',
      vendors: [],
      locations: [],
      statuses: [],
      employees: [],
      taxList: [],
      formData: {},
      lines: [{ index: Math.random(), item: "", quantity: '', unit: '', order_price: '', received: ''}],
  
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleChange = (e) => {
    if (["item", "quantity", 'unit', 'order_price', 'received'].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          lines: [...prevState.lines, { index: Math.random(), item: "", quantity: '',  unit: '', order_price: '', received: '' }],
      }));
  }

  deleteRow = (index) => {
      this.setState({
          lines: this.state.lines.filter((s, sindex) => index !== sindex),
      });
      // const taskList1 = [...this.state.taskList];
      // taskList1.splice(index, 1);
      // this.setState({ taskList: taskList1 });
  }

  clickOnDelete(record) {
        this.setState({
            lines: this.state.lines.filter(r => r !== record)
        });
  }

  

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }




  onSubmit = (e) => {
      e.preventDefault();
      const { 
        validated_by,
        expected_receipt_date,
        date,
        due,
        supplier,
        supplier_invoice_number,
        bill_to,
        ship_to,
        tracking_number,
        notes,
        status,
        received_to_date,
        issuing_inventory_controller,
        tax,
        lines
 
      } = this.state;

      const order = { 
        validated_by,
        expected_receipt_date,
        date,
        due,
        supplier,
        supplier_invoice_number,
        bill_to,
        ship_to,
        tracking_number,
        notes,
        status,
        received_to_date,
        issuing_inventory_controller,
        tax,
        lines

      };

      this.props.addOrder(order);
      console.log(order)
      this.setState({
          lines: [],
          validated_by: '',
          expected_receipt_date: '',
          date: '',
          due: '',
          supplier: '',
          supplier_invoice_number: '',
          bill_to: '',
          ship_to: '',
          tracking_number: '',
          notes: '',
          status: '',
          received_to_date: '',
          issuing_inventory_controller: '',
          tax: '',

        });
      this.props.history.push('/orders');
    };

    static propTypes = {
        addOrder: PropTypes.func.isRequired,
        getSuppliers: PropTypes.func.isRequired,
        getInventorycontrollers: PropTypes.func.isRequired,
        getInventoryOrderStatusChoices: PropTypes.func.isRequired,
        getWarehouses: PropTypes.func.isRequired,
        getTaxes: PropTypes.func.isRequired,
    }

  componentDidMount() {
    this.props.getInventorycontrollers();
    this.props.getWarehouses();
    this.props.getSuppliers();
    this.props.getInventoryOrderStatusChoices()
    this.props.getTaxes()
  }

  render = () => {
    const {
        validated_by,
        expected_receipt_date,
        date,
        due,
        supplier,
        supplier_invoice_number,
        bill_to,
        ship_to,
        tracking_number,
        notes,
        status,
        received_to_date,
        issuing_inventory_controller,
        tax, 

    } = this.state;

    let { lines } = this.state

    const { suppliers } = this.props;
    const { warehouses } = this.props;
    const { inventorycontrollers } = this.props;
    const { inventoryorderstatuschoices } = this.props;
    const { taxes } = this.props;



    let vendors = suppliers.length > 0
      && suppliers.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

    let locations = warehouses.length > 0
      && warehouses.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);

     let taxList = taxes.length > 0
    && taxes.map((item, i) => {
    return (
      <option key={i} value={item.id}>{item.name}</option>
    )
    }, this);

    let statuses = inventoryorderstatuschoices.length > 0
      && inventoryorderstatuschoices.map((item, i) => {
      return (
        <option key={i} value={item.key}>{item.value}</option>
      )
    }, this);


    let employees = inventorycontrollers.length > 0
      && inventorycontrollers.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.employee}</option>
      )
    }, this);
 

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add An Account</h2>
        <form onSubmit={this.onSubmit} onChange={this.handleChange}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-6">
              <label>Expected Date</label>
              <Calendar
                showIcon={true}
                className="form-control"
                name="expected_receipt_date"
                onChange={this.onChange}
                value={expected_receipt_date}
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>Date</label>
              <Calendar
                showIcon={true}
                className="form-control"
                name="date"
                onChange={this.onChange}
                value={date}
                dateFormat="yy-mm-dd"
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
            <div className="p-field p-col-12 p-md-6">
              <label>Supplier Invoice Number</label>
              <InputText
                className="form-control"
                type="text"
                name="supplier_invoice_number"
                onChange={this.onChange}
                value={supplier_invoice_number}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>Tracking Number</label>
              <InputText
                className="form-control"
                type="text"
                name="tracking_number"
                onChange={this.onChange}
                value={tracking_number}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>Bill To</label>
              <InputText
                className="form-control"
                type="text"
                name="bill_to"
                onChange={this.onChange}
                value={bill_to}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>Received to Date</label>
              <InputNumber
                className="form-control"
                name="received_to_date"
                onChange={this.onChange}
                value={received_to_date}
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
              <label>NOTES</label>
              <InputTextarea
                rows="3"
                className="form-control"
                type="text"
                name="notes"
                onChange={this.onChange}
                value={notes}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>STATUS</label>
              <select
                name ='status'
                value={status}
                onChange={this.onChange}
              >
                {statuses}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>VALIDATED BY</label>
              <select
                name ='validated_by'
                value={validated_by}
                onChange={this.onChange}
              >
                {employees}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>ISSUER</label>
              <select
                name ='issuing_inventory_controller'
                value={issuing_inventory_controller}
                onChange={this.onChange}
              >
                {employees}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>WAREHOUSE</label>
              <select
                name ='ship_to'
                value={ship_to}
                onChange={this.onChange}
              >
                {locations}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>SUPPLIER</label>
              <select
                name ='supplier'
                value={supplier}
                onChange={this.onChange}
              >
                {vendors}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>TAX</label>
              <select
                name ='tax'
                value={tax}
                onChange={this.onChange}
              >
                {taxList}
              </select>
            </div>

            <div className="p-field p-col-12 p-md-6">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>QUANTITY</th>
                    <th>Order Price</th>
                    <th>Received</th>
                    <th>Item</th>
                    <th>Unit Of Measure</th>
                  </tr>
                </thead>
                <tbody>
                  <OrderItems add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
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
    inventorycontrollers: state.inventorycontrollers.inventorycontrollers,
    suppliers: state.suppliers.suppliers,
    warehouses: state.warehouses.warehouses,
    taxes: state.taxes.taxes,
    inventoryorderstatuschoices: state.inventoryorderstatuschoices.inventoryorderstatuschoices,

})

export default connect(
      mapStateToProps, 
      {getSuppliers, getWarehouses, getTaxes, getInventoryOrderStatusChoices, getInventorycontrollers, addOrder})
      (OrderForm);











