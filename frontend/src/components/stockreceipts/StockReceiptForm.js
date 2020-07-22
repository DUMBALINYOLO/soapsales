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
import { getOrders } from '..//../actions/orders';
import { addStockReceipt } from '..//../actions/stockreceipts';
import {Calendar} from "primereact/calendar";
import PropTypes from 'prop-types';
import StockReceiptLines from './StockReceiptLines';




class StockReceiptForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      order: '',
      received_by: '',
      receive_date: '',
      note: '',
      fully_received: false,
      amaorders: [],
      employees: [],
      formData: {},
      lines: [{ index: Math.random(), line: "", quantity: '' }],
  
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
    this.handleFullyReceived = this.handleFullyReceived.bind(this);
  }

  handleChange = (e) => {
    if (["line", "quantity"].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          lines: [...prevState.lines, { index: Math.random(), line: "", quantity: '' }],
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


  handleFullyReceived(event) {
      const target = event.target;
      const value = target.name === 'fully_received' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }


  onSubmit = (e) => {
      e.preventDefault();
      const { 
        order,
        received_by,
        receive_date,
        note,
        fully_received,
        lines
 
      } = this.state;

      const stockreceipt = { 
        order,
        received_by,
        receive_date,
        note,
        fully_received,
        lines, 
      };

      this.props.addStockReceipt(stockreceipt);
      console.log(stockreceipt)
      this.setState({
          lines: [],
          order: '',
          received_by: '',
          receive_date: '',
          note: '',
          fully_received: '',

        });
    };

    static propTypes = {
        addStockReceipt: PropTypes.func.isRequired,
        getOrders: PropTypes.func.isRequired,
        getInventorycontrollers: PropTypes.func.isRequired,


    }

  componentDidMount() {
    this.props.getOrders();
    this.props.getInventorycontrollers()
  }

  render = () => {
    const {  
        order,
        received_by,
        receive_date,
        fully_received,
        note
    } = this.state;

    let { lines } = this.state

    const { orders } = this.props;

    console.log(orders)


    let amaorders = orders.length > 0
      && orders.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.tracking_number}</option>
      )
    }, this);

    const { inventorycontrollers } = this.props;

    console.log(inventorycontrollers)


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
            <div className="p-field p-col-12 p-md-12">
              <label>Receive Date</label>
              <Calendar
                showIcon={true}
                className="form-control"
                name="receive_date"
                onChange={this.onChange}
                value={receive_date}
                dateFormat="yy-mm-dd"
              />
            </div>
            <div className="p-field p-col-12 p-md-12">
              <label>NOTE</label>
              <InputTextarea
                rows="3"
                className="form-control"
                type="text"
                name="note"
                onChange={this.onChange}
                value={note}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>ORDER</label>
              <select
                name ='order'
                value={order}
                onChange={this.onChange}
              >
                {amaorders}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>RECEIVED BY</label>
              <select
                name ='received_by'
                value={received_by}
                onChange={this.onChange}
              >
                {employees}
              </select>
            </div>
            <label>
              FullyReceived?:
              <input
                name="fully_received"
                type="checkbox"
                checked={this.state.fully_received}
                onChange={this.handleFullyReceived} />
            </label>
            <div className="p-field p-col-12 p-md-6">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>QUANTITY</th>
                    <th>LINE</th>
                  </tr>
                </thead>
                <tbody>
                  <StockReceiptLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
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
    orders: state.orders.orders,
    inventorycontrollers: state.inventorycontrollers.inventorycontrollers
})

export default connect(mapStateToProps, {getOrders, getInventorycontrollers, addStockReceipt})(StockReceiptForm);

