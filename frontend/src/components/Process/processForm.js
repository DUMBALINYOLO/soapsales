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
import {Dropdown} from 'primereact/dropdown';



export class ProcessForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        parent_process: null,
        process_equipment: null,
        name: '',
        description: '',
        bill_of_materials: null,
        type: null,
        duration: '',
        rate: null,
        product_list: null,
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onParentProcess = this.onParentProcess.bind(this);
    this.onProcessEquipment = this.onProcessEquipment.bind(this);
    this.onBillOfMaterials = this.onBillOfMaterials.bind(this);
    this.onType = this.onType.bind(this);
    this.onRate = this.onRate.bind(this);
    this.onProductList = this.onProductList.bind(this);
  }

    onParentProcess (e){
      this.setState({parent_process: e.value})
    }

    onProcessEquipment (e){
      this.setState({process_equipment: e.value})
    }

    onBillOfMaterials (e){
      this.setState({bill_of_materials: e.value})
    }

    onType (e){
      this.setState({type: e.value})
    }

    onRate (e){
      this.setState({rate: e.value})
    }

    onProductList (e){
      this.setState({product_list: e.value})
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
        const  { processrates } = this.props;
        const  { processgroups } = this.props;

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
                    <Dropdown 
                      placeholder ="SELECT PARENT PROCESS"
                      value={parent_process}
                      onChange={this.onParentProcess}
                      options={processes}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT PROCESS EQUIPMENT"
                      value={process_equipment}
                      onChange={this.onProcessEquipment}
                      options={processgroups}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT BILL OF MATERIALS"
                      value={bill_of_materials}
                      onChange={this.onBillOfMaterials}
                      options={billmaterials}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT TYPES"
                      value={type}
                      onChange={this.onType}
                      options={manufacturingprocesschoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT RATE"
                      value={rate}
                      onChange={this.onRate}
                      options={processrates}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="unit_time" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT PRODUCT LIST"
                      value={product_list}
                      onChange={this.onProductList}
                      options={products}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
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
