import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventorycontroller } from '..//../actions/inventorycontrollers';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class InventorycontrollerForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                employee: '',
                can_authorize_equipment_requisitions: true,
                can_authorize_consumables_requisitions: true
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleEquipment = this.handleEquipment.bind(this);
        this.handleConsumables = this.handleAConsumables.bind(this);
    }

    handleEquipment(event) {
      const target = event.target;
      const value = target.name === 'can_authorize_equipment_requisitions' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleConsumables(event) {
      const target = event.target;
      const value = target.name === 'can_authorize_consumables_requisitions' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
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

    };

    static propTypes = {
        addInventorycontroller: PropTypes.func.isRequired,
    }


    render() {
        const {
          employee,
          can_authorize_equipment_requisitions,
          can_authorize_consumables_requisitions,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Inventory Controller</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>Employee</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="employee"
                    onChange={this.onChange}
                    value={employee}
                  />
                </div>
                <label>
                    Can Authorize Equipment Requisitions:
                    <input
                      name="can_authorize_equipment_requisitions"
                      type="checkbox"
                      checked={this.state.can_authorize_equipment_requisitions}
                      onChange={this.handleEquipment} />
                  </label>
                  <label>
                      Can Authorize Consumables Requisitions:
                      <input
                        name="can_authorize_consumables_requisitions"
                        type="checkbox"
                        checked={this.state.can_authorize_consumables_requisitions}
                        onChange={this.handleConsumables} />
                  </label>
                  <div className="p-field p-col-12 p-md-6">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
                </div>
             </form>
         </div>
        );
    }
}

export default connect(null, { addInventorycontroller })(InventorycontrollerForm);
