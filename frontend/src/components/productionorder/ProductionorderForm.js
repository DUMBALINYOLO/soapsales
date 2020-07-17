import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductionorder } from '../../actions/productionorders';
import { getCustomers } from '../../actions/customers';
import { getProcesses } from '../../actions/process';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

import PropTypes from 'prop-types';

export class ProcessRateForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            customer: '',
            customerOption: [],
            process: '',
            processOption: [],
            due: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { customer, process, due } = this.state;
      const productionorders = { customer, process, due };
      this.props.addProductionorder(productionorders);
    };

    static propTypes = {
        addProductionorder: PropTypes.func.isRequired,
        getCustomers: PropTypes.func.isRequired,
        getProcesses: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getCustomers(),
      this.props.getProcesses()
    }

    render() {
        const { customer, process, due } = this.state;
        const { customers, processes } = this.props;
        let customerOption = customers.length > 0
            && customers.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);
        let processOption = processes.length > 0
            && processes.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Production Order</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                    <label>Due</label>
                    <InputText
                      className="form-control"
                      type="date"
                      name="due"
                      onChange={this.onChange}
                      value={due}
                    />
                </div>
                <div className="p-field p-col-12 p-md-4">
                  <select
                      name="customer"
                      value={customer}
                      onChange={this.onChange}
                  >
                      {customerOption}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                  <select
                      name="process"
                      value={process}
                      onChange={this.onChange}
                  >
                      {processOption}
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
    processes: state.processes.processes
})

export default connect(mapStateToProps, {getCustomers, getProcesses, addProductionorder })(ProductionorderForm);
