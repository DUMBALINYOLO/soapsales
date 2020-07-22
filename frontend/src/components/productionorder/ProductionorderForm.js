import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductionorder } from '../../actions/productionorders';
import { getCustomers } from '../../actions/customers';
import { getProcesses } from '../../actions/process';
import { getInventoryitems } from '../../actions/inventoryitems';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Calendar} from "primereact/calendar";
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

import PropTypes from 'prop-types';

export class ProductionorderForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            customer: '',
            process: '',
            product: '',
            due: '',
            date: '',
            customerList: [],
            inventoryItem: [],
            processList: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { customer, process, product, due, date } = this.state;
      const productionorders = { customer, product, process, due, date };
      this.props.addProductionorder(productionorders);
      this.setState({
            customer: '',
            process: '',
            product: '',
            due: '',
            date: '',

        });
      this.props.history.push('/productionorders');
    };

    static propTypes = {
        addProductionorder: PropTypes.func.isRequired,
        getCustomers: PropTypes.func.isRequired,
        getProcesses: PropTypes.func.isRequired,
        getInventoryitems: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getCustomers()
      this.props.getProcesses()
      this.props.getInventoryitems()

    }

    render() {
        const { customer, process, product, due, date } = this.state;
        const { customers } = this.props;
        const { processes } = this.props;
        const { inventoryitems } = this.props;

        let customerList = customers.length > 0
            && customers.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let processList = processes.length > 0
            && processes.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let inventoryItems = inventoryitems.length > 0
            && inventoryitems.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Production Order</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
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
                <div className="p-field p-col-12 p-md-4">
                    <label>CUSTOMER</label>
                    <select
                      name="customer"
                      value={customer}
                      onChange={this.onChange}
                    >
                      {customerList}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <label>PROCESS</label>
                    <select
                      name="process"
                      value={process}
                      onChange={this.onChange}
                    >
                      {processList}
                    </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <label>PRODUCT</label>
                    <select
                      name="product"
                      value={product}
                      onChange={this.onChange}
                    >
                      {inventoryItems}
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
    customers: state.customers.customers,
    processes: state.processes.processes,
    inventoryitems: state.inventoryitems.inventoryitems
})

export default connect(mapStateToProps, {getCustomers, getProcesses, getInventoryitems, addProductionorder })(ProductionorderForm);
