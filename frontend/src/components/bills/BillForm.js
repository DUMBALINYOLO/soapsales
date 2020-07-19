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
import { getSuppliers} from '..//../actions/suppliers';
import { addBill} from '..//../actions/bills';
import {Calendar} from "primereact/calendar";
import PropTypes from 'prop-types';
import BillLines from './BillLines';




class BillForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      vendor: '',
      date: '',
      reference: '',
      due: '',
      memo: '',
      vendors: [],
      formData: {},
      lines: [{ index: Math.random(), debit_account: "", amount: '' }],
  
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleChange = (e) => {
    if (["debit_account", "amount"].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          lines: [...prevState.lines, { index: Math.random(), debit_account: "", amount: '' }],
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
        vendor,
        date,
        reference,
        due,
        memo,
        lines
 
      } = this.state;

      const bill = { 
        vendor,
        date,
        reference,
        due,
        memo,
        lines, 
      };

      this.props.addBill(bill);
      console.log(bill)
      this.setState({
          lines: [],
          vendor: '',
          date: '',
          reference: '',
          due: '',
          memo: '',

        });
    };

    static propTypes = {
        addBill: PropTypes.func.isRequired,
        getSuppliers: PropTypes.func.isRequired,

    }

  componentDidMount() {
    this.props.getSuppliers();
  }

  render = () => {
    const {  
        date,
        vendor,
        reference,
        due,
        memo
    } = this.state;

    let { lines } = this.state

    const { suppliers } = this.props;

    console.log(suppliers)


    let vendors = suppliers.length > 0
      && suppliers.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
      )
    }, this);
 

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add An Account</h2>
        <form onSubmit={this.onSubmit} onChange={this.handleChange}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-6">
              <label>Reference</label>
              <InputText
                className="form-control"
                type="text"
                name="reference"
                onChange={this.onChange}
                value={reference}
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
              />
            </div>
            <div className="p-field p-col-12 p-md-12">
              <label>Due</label>
              <Calendar
                showIcon={true}
                className="form-control"
                name="due"
                onChange={this.onChange}
                value={due}
              />
            </div>
            <div className="p-field p-col-12 p-md-12">
              <label>MEMO</label>
              <InputTextarea
                rows="3"
                className="form-control"
                type="text"
                name="memo"
                onChange={this.onChange}
                value={memo}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <select
                name ='vendor'
                value={vendor}
                onChange={this.onChange}
              >
                {vendors}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>AMOUNT</th>
                    <th>DEBIT ACCOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  <BillLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
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
    suppliers: state.suppliers.suppliers
})

export default connect(mapStateToProps, {getSuppliers, addBill})(BillForm);


