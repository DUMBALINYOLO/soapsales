import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessMachine } from '../../actions/processMachines';
import PropTypes from 'prop-types';

export class ProcessMachineForm extends Component{
    state = {
        name: '',
        description: '',
        date_commissioned: '',
        machine_group: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, date_commissioned, machine_group } = this.state;
      const processMachines = { name, description, date_commissioned, machine_group};
      this.props.addProcessMachine(processMachines);
    };

    static propTypes = {
        addProcessMachine: PropTypes.func.isRequired,
    }


    render() {
        const { name, description, date_commissioned, machine_group } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process Machines</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="form-group">
                  <label>Date Commissioned</label>
                  <input
                    className="form-control"
                    type="date"
                    name="date commissioned"
                    onChange={this.onChange}
                    value={date_commissioned}
                  />
                </div>
                <div className="form-group">
                  <label>Machine Group</label>
                  <input
                    className="form-control"
                    type="text"
                    name="machine group"
                    onChange={this.onChange}
                    value={machine_group}
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


export default connect(null, { addProcessMachine })(ProcessMachineForm);
