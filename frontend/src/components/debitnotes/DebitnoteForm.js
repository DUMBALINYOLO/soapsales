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
import { getOrders } from '..//../actions/orders';
import { addDebitnote } from '..//../actions/debitnotes';
import {Calendar} from "primereact/calendar";
import PropTypes from 'prop-types';
import DebitNoteLines from './DebitNoteLine';





class DebitNoteForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      comments: '',
      order: '',
      amaorders: [],
      formData: {},
      lines: [{ index: Math.random(), item: "", quantity: '' }],

    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleChange = (e) => {
    if (["item", "quantity"].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          lines: [...prevState.lines, { index: Math.random(), item: "", quantity: '' }],
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
        date,
        comments,
        order,
        lines

      } = this.state;

      const note = {
        date,
        comments,
        order,
        lines,
      };

      this.props.addDebitnote(note);
      console.log(note)
      this.setState({
          lines: [],
          order: '',
          date: '',
          comments: '',

        });
    };

    static propTypes = {
        addDebitnote: PropTypes.func.isRequired,
        getOrders: PropTypes.func.isRequired,

    }

  componentDidMount() {
    this.props.getOrders();
  }

  render = () => {
    const {
        date,
        order,
        comments,
    } = this.state;

    let { lines } = this.state

    const { orders } = this.props;

    console.log(orders)


    let amaorders = orders.length > 0
      && orders.map((item, i) => {

      return (
        <option key={i} value={item.id}>{item.id} | {item.tracking_number}</option>
      )
    }, this);


    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add An Account</h2>
        <form onSubmit={this.onSubmit} onChange={this.handleChange}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
              <label>COMMENTS</label>
              <InputTextarea
                rows="3"
                className="form-control"
                type="text"
                name="comments"
                onChange={this.onChange}
                value={comments}
              />
            </div>
           <div className="p-field p-col-12 p-md-12">
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
              <label>ORDERS</label>
              <select
                name ='order'
                value={order}
                onChange={this.onChange}
              >
                {amaorders}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>QUANTITY</th>
                    <th>ORDER ITEMS</th>
                                      
                  </tr>
                </thead>
                <tbody>
                  <DebitNoteLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
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
    orders: state.orders.orders
})

export default connect(mapStateToProps, {getOrders, addDebitnote})(DebitNoteForm);
