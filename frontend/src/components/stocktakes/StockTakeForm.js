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
import { getWarehouses } from '..//../actions/warehouses';
import { addStockTake } from '..//../actions/stocktakes';
import {Calendar} from "primereact/calendar";
import PropTypes from 'prop-types';
import Adjustments from './Adjustments';




class StockTakeForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      date: '',
      adjusted_by: '',
      warehouse: '',
      comments: '',
      locations: [],
      employees: [],
      formData: {},
      adjustments: [{ index: Math.random(), warehouse_item: "", note: '', adjustment: '' }],
  
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleChange = (e) => {
    if (["warehouse_item", 'note', "adjustment"].includes(e.target.name)) {
        let adjustments = [...this.state.adjustments]
        adjustments[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          adjustments: [...prevState.adjustments, { index: Math.random(), warehouse_item: "", note: '', adjustment: '' }],
      }));
  }

  deleteRow = (index) => {
      this.setState({
          adjustments: this.state.adjustments.filter((s, sindex) => index !== sindex),
      });
      // const taskList1 = [...this.state.taskList];
      // taskList1.splice(index, 1);
      // this.setState({ taskList: taskList1 });
  }

  clickOnDelete(record) {
        this.setState({
            adjustments: this.state.adjustments.filter(r => r !== record)
        });
  }

  

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }


  onSubmit = (e) => {
      e.preventDefault();
      const { 
        date,
        adjusted_by,
        warehouse,
        comments,
        adjustments
 
      } = this.state;

      const stocktake = { 
        date,
        adjusted_by,
        warehouse,
        comments,
        adjustments 
      };

      this.props.addStockTake(stocktake);
      console.log(stocktake)
      this.setState({
          adjustments: [],
          date: '',
          adjusted_by: '',
          warehouse: '',
          comments: '',

        });
    };

    static propTypes = {
        addStockTake: PropTypes.func.isRequired,
        getWarehouses: PropTypes.func.isRequired,
        getInventorycontrollers: PropTypes.func.isRequired,


    }

  componentDidMount() {
    this.props.getWarehouses();
    this.props.getInventorycontrollers()
  }

  render = () => {
    const {  
        date,
        adjusted_by,
        warehouse,
        comments
    } = this.state;

    let { adjustments } = this.state

    const { warehouses } = this.props;

    console.log(warehouses)


    let locations = warehouses.length > 0
      && warehouses.map((item, i) => {
      return (
        <option key={i} value={item.id}>{item.name}</option>
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
              <label>COMMENTS</label>
              <InputTextarea
                rows="3"
                className="form-control"
                name="comments"
                onChange={this.onChange}
                value={comments}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>WAREHOUSE</label>
              <select
                name ='warehouse'
                value={warehouse}
                onChange={this.onChange}
              >
                {locations}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-6">
              <label>ADJUSTED BY</label>
              <select
                name ='adjusted_by'
                value={adjusted_by}
                onChange={this.onChange}
              >
                {employees}
              </select>
            </div>
            <div className="p-field p-col-12 p-md-12">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>ADJUSTMENT</th>
                    <th>NOTE</th>
                    <th>WAREHOUSE ITEM</th>
                  </tr>
                </thead>
                <tbody>
                  <Adjustments add={this.addNewRow} delete={this.clickOnDelete.bind(this)} adjustments={adjustments} />
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
    warehouses: state.warehouses.warehouses,
    inventorycontrollers: state.inventorycontrollers.inventorycontrollers
})

export default connect(mapStateToProps, {getWarehouses, getInventorycontrollers, addStockTake})(StockTakeForm);







