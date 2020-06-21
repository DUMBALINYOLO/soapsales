import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventorycontroller } from '..//../actions/inventorycontrollers';
import PropTypes from 'prop-types';

export class InventorycontrollerForm extends Component{
    state = {
        employee: '',
        can_authorize_equipment_requisitions: '',
        can_authorize_consumables_requisitions: ''
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
                <div className="form-group">
                  <label>Employee</label>
                  <input
                    className="form-control"
                    type="text"
                    name="employee"
                    onChange={this.onChange}
                    value={employee}
                  />
                </div>
                <div className="form-group">
                  <label>Can Authorize Equipment Requisitions</label>
                  <input
                    className="form-control"
                    type="text"
                    name="can authorize equipment requisitions"
                    onChange={this.onChange}
                    value={can_authorize_equipment_requisitions}
                  />
                </div>
                <div className="form-group">
                  <label>Can Authorize  Consumables Requisitions</label>
                  <input
                    className="form-control"
                    type="text"
                    name="can authorize consumables requisitions"
                    onChange={this.onChange}
                    value={can_authorize_consumables_requisitions}
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
             </form>
         </div>
        );
    }
}

export default connect(null, { addInventorycontroller })(InventorycontrollerForm);
