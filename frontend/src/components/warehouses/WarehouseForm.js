import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWarehouse } from '..//../actions/warehouses';
import { getInventorycontrollers } from '..//../actions/inventorycontrollers';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar"
import {Dropdown} from 'primereact/dropdown';


export class WarehouseForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            address: '',
            description: '',
            inventory_controller: null,
            length: '',
            width: '',
            height: '',
            last_inventory_check_date: '',
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    onTypeChange (e){
      this.setState({inventory_controller: e.value})
    } 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        name,
        address,
        description,
        inventory_controller,
        length,
        width,
        height,
        last_inventory_check_date, 
      } = this.state;
      const warehouse = { 
        name,
        address,
        description,
        inventory_controller,
        length,
        width,
        height,
        last_inventory_check_date, 
      };
      this.props.addWarehouse(warehouse);
      this.setState({
          name: '',
          address: '',
          description: '',
          inventory_controller: '',
          length: '',
          width: '',
          height: '',
          last_inventory_check_date: '',

        });
      this.props.history.push('/warehouses');

    };

    static propTypes = {
        addWarehouse : PropTypes.func.isRequired,
        getInventorycontrollers: PropTypes.func.isRequired,
        
    }

    componentDidMount() {
      this.props.getInventorycontrollers();
      
    }
    render() {
        const { 
          name,
          address,
          description,
          inventory_controller,
          length,
          width,
          height,
          last_inventory_check_date, 
        } = this.state;

        const { inventorycontrollers } = this.props;


        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Asset</h2>
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
                    <label>LENGTH</label>
                    <InputNumber
                      name="length"
                      onChange={this.onChange}
                      value={length}
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
                    <label>DESCRIPTION</label>
                    <InputTextarea
                      rows="3"
                      name="description"
                      onChange={this.onChange}
                      value={description}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>ADDRESS</label>
                    <InputTextarea
                      rows="3"
                      name="address"
                      onChange={this.onChange}
                      value={address}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>WIDTH</label>
                    <InputNumber
                      name="width"
                      onChange={this.onChange}
                      value={width}
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
                    <label>HEIGHT</label>
                    <InputNumber
                      name="height"
                      onChange={this.onChange}
                      value={height}
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
                    <label>LAST INVENTORY CHECK DATE</label>
                    <Calendar
                      showIcon={true}
                      name="last_inventory_check_date"
                      onChange={this.onChange}
                      value={last_inventory_check_date}
                      dateFormat="yy-mm-dd"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <Dropdown 
                      placeholder ="SELECT INVENTORY CONTROLLER"
                      value={inventory_controller}
                      onChange={this.onTypeChange}
                      options={inventorycontrollers}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="employee" 
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
  inventorycontrollers: state.inventorycontrollers.inventorycontrollers,
})

export default connect(
        mapStateToProps, 
        { getInventorycontrollers, addWarehouse })
        (WarehouseForm);
