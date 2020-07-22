import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import { addProcessMachine } from '../../actions/processMachines';
import PropTypes from 'prop-types';
import { getProcessGroups} from '..//../actions/processGroups';


export class ProcessMachineForm extends Component{
  constructor(props){
    super(props);
    this.state = {
        name: '',
        description: '',
        machine_group: '',
        processMachineGroups:  [],
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }



    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, machine_group } = this.state;
      const processMachines = { name, description,  machine_group};
      this.props.addProcessMachine(processMachines);
      this.setState({
        name: '',
        description: '',
        machine_group: '',
      });
      this.props.history.push('/processmachines');
    };


    static propTypes = {
        addProcessMachine: PropTypes.func.isRequired,
        getProcessGroups : PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcessGroups();
          
    }


    render() {
        const { name, description,  machine_group } = this.state;

        const  { processgroups } = this.props;

        let processMachineGroups = processgroups.length > 0
          && processgroups.map((item, index) => {
              return (
                  <option key={item.id } value={item.id}>{item.name}</option>
              )
          }, this);


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
                  <div className="p-field p-col-12 p-md-12">
                      <label>MACHINE GROUP</label>
                      <select
                          name="machine_group"
                          value={machine_group}
                          onChange={this.onChange}
                      >
                          {processMachineGroups}
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
    processgroups: state.processgroups.processgroups
})


export default connect(mapStateToProps, { getProcessGroups, addProcessMachine })(ProcessMachineForm);
