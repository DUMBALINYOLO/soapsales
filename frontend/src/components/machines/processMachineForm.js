import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessMachine } from '../../actions/processmachines';
import PropTypes from 'prop-types';
import { getProcessGroups} from '..//../actions/processGroups';
import {Dropdown} from 'primereact/dropdown';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

export class ProcessMachineForm extends Component{
    state = {
        name: '',
        description: '',
        machine_group: ''
    }



    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, machine_group } = this.state;
      const processMachines = { name, description,  machine_group};
      this.props.addProcessMachine(processMachines);
    };

    static propTypes = {
        addProcessMachine: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcessGroups()
    }


    render() {
        const { name, description,  machine_group } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process Machines</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12">
                    <label>Name</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>Description</label>
                    <InputTextarea
                      rows={3}
                      className="form-control"
                      type="text"
                      name="description"
                      onChange={this.onChange}
                      value={description}
                    />
                  </div>
                  <div className="p-field p-col-12">
                    <Dropdown
                        id="statusInLineEdit"
                        filter={true}
                        optionLabel="machine_group.name"
                        optionValue="machine_group.id"
                        inputId="machine_group.id"
                        value={machine_group.id }
                        options={this.props.processgroups}
                        onChange={this.onChange}
                        placeholder="Select Your Group"
                        optionLabel="name"
                        showClear= {true}
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
    processgroups: state.processgroups.processgroups
})


export default connect(mapStateToProps, { getProcessGroups, addProcessMachine })(ProcessMachineForm);
