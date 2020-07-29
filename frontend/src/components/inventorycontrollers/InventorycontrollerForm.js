import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventorycontroller } from '..//../actions/inventorycontrollers';
import { getEmployees } from '..//../actions/employees';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {Dropdown} from 'primereact/dropdown';

export class InventorycontrollerForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                employee: null,
                can_authorize_equipment_requisitions: false,
                can_authorize_consumables_requisitions: false,
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEquipment = this.handleEquipment.bind(this);
        this.handleConsumables = this.handleConsumables.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }

    handleEquipment() {
      this.setState({
        can_authorize_equipment_requisitions: !this.state.checked
      });
    }

    handleConsumables() {
      this.setState({
        can_authorize_consumables_requisitions: !this.state.checked
      });
    }

    onTypeChange (e){
      this.setState({employee: e.value})
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        employee,
        can_authorize_equipment_requisitions,
        can_authorize_consumables_requisitions
      } = this.state;

      const inventorycontroller = {
        employee,
        can_authorize_equipment_requisitions,
        can_authorize_consumables_requisitions
      };

      this.props.addInventorycontroller(inventorycontroller);
      this.setState({
        employee: '', 
        can_authorize_equipment_requisitions: false, 
        can_authorize_consumables_requisitions: false, 
      });
      this.props.history.push('/inventorycontrollers');

    };

    static propTypes = {
        addInventorycontroller: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getEmployees();

    }


    render() {
        const {
          employee,
          can_authorize_equipment_requisitions,
          can_authorize_consumables_requisitions,
        } = this.state;

        const { employees } = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Inventory Controller</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12">
                    <Dropdown 
                      placeholder ="SELECT EMPLOYEE"
                      value={employee}
                      onChange={this.onTypeChange}
                      options={employees}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="username" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN AUTHORIZE EQUIPMENT REQUISITIONS :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleEquipment}
                      checked={this.state.can_authorize_equipment_requisitions}
                    /> 
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN AUTHORIZE CONSUMABLE REQUISITIONS :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleConsumables}
                      checked={this.state.can_authorize_consumables_requisitions}
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
    employees: state.employees.employees

})


export default connect(mapStateToProps, { getEmployees, addInventorycontroller })(InventorycontrollerForm);
