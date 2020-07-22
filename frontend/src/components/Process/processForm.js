import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcess, getProcesses } from '../../actions/process';
import { getProducts } from '../../actions/products';
import { getProcessGroups } from '../../actions/processGroups';
import { getBillMaterials } from '../../actions/billMaterials';
import { getProcessRates } from '../../actions/processRates';
import { getManufacturingProcessChoices }  from '../../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {InputNumber} from 'primereact/inputnumber';



export class ProcessForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        parent_process: '',
        process_equipment: '',
        name: '',
        description: '',
        bill_of_materials: '',
        type: '',
        duration: '',
        rate: '',
        product_list: '',
        productList: [],
        types: [],
        parentProcesses: [],
        billsOfMaterials: [],
        rates: [],
        processMachineGroups:  [],
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        parent_process, 
        process_equipment, 
        name, 
        description, 
        bill_of_materials, 
        type, 
        duration, 
        rate, 
        product_list 
      } = this.state;
      const process = { 
        parent_process, 
        process_equipment, 
        name, 
        description, 
        bill_of_materials, 
        type, 
        duration, 
        rate, 
        product_list 
      };
      this.props.addProcess(process);
      this.setState({
        parent_process: '',
        process_equipment: '',
        name: '',
        description: '',
        bill_of_materials: '',
        type: '',
        duration: '',
        rate: '',
        product_list: '',

      });
      this.props.history.push('/processes');
    };

    static propTypes = {
        addProcess: PropTypes.func.isRequired,
        getProcesses: PropTypes.func.isRequired,
        getProducts: PropTypes.func.isRequired,
        getProcessGroups : PropTypes.func.isRequired,
        getBillMaterials: PropTypes.func.isRequired,
        getProcessRates: PropTypes.func.isRequired,
        getManufacturingProcessChoices: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcesses();
      this.props.getProducts();
      this.props.getProcessGroups();
      this.props.getBillMaterials();
      this.props.getProcessRates();
      this.props.getManufacturingProcessChoices();

    }


    render() {
        const { 
          parent_process, 
          process_equipment, 
          name, 
          description, 
          bill_of_materials, 
          type, 
          duration, 
          rate, 
          product_list 
        } = this.state;

        const  { products } = this.props;
        const  { processes } = this.props;
        const  { billmaterials } = this.props;
        const  { manufacturingprocesschoices } = this.props;
        console.log(manufacturingprocesschoices)
        const  { processrates } = this.props;
        const  { processgroups } = this.props;

       let productList = products.length > 0
          && products.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.name}</option>
              )
          }, this);

        let processMachineGroups = processgroups.length > 0
          && processgroups.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.name}</option>
              )
          }, this);

        let rates = processrates.length > 0
          && processrates.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.unit_time}|| {item.id}</option>
              )
          }, this);

        let parentProcesses = processes.length > 0
          && processes.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.name}</option>
              )
          }, this);

        let billsOfMaterials = billmaterials.length > 0
          && billmaterials.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.name}</option>
              )
          }, this);


        let types = manufacturingprocesschoices.length > 0
          && manufacturingprocesschoices.map((item, index) => {
              return (
                  <option key={item.key } value={item.key}>{item.value}</option>
              )
          }, this);





        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process </h2>
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
                    <label>Duration</label>
                    <InputNumber
                      name="duration"
                      onChange={this.onChange}
                      value={duration}
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
                    <label>Description</label>
                    <InputTextarea
                      row="3"
                      className="form-control"
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      value={description}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>Parent Process</label>
                      <select
                          name="parent_process"
                          value={parent_process}
                          onChange={this.onChange}
                      >
                          {parentProcesses}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>Process Equipment</label>
                      <select
                          name="process_equipment"
                          value={process_equipment}
                          onChange={this.onChange}
                      >
                          {processMachineGroups}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>BILL OF MATERIALS</label>
                      <select
                          name="bill_of_materials"
                          value={bill_of_materials}
                          onChange={this.onChange}
                      >
                          {billsOfMaterials}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>TYPE</label>
                      <select
                          name="type"
                          value={type}
                          onChange={this.onChange}
                      >
                          {types}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>RATE</label>
                      <select
                          name="rate"
                          value={rate}
                          onChange={this.onChange}
                      >
                          {rates}
                      </select>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>PRODUCT LIST</label>
                      <select
                          name="product_list"
                          value={product_list}
                          onChange={this.onChange}
                      >
                          {productList}
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
    processes: state.processes.processes,
    processgroups: state.processgroups.processgroups,
    billmaterials: state.billmaterials.billmaterials,
    processrates: state.processrates.processrates,
    products: state.products.products,
    manufacturingprocesschoices: state.manufacturingprocesschoices.manufacturingprocesschoices

})


export default connect(
      mapStateToProps, 
      { addProcess, getManufacturingProcessChoices, getProcesses, getBillMaterials, getProcessGroups, getProcessRates, getProducts })
      (ProcessForm);
