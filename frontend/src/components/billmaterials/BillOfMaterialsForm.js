

import React, { Component } from 'react'
import uuidv4 from 'uuid/v4'
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import { connect } from 'react-redux';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import { addBillMaterial } from '..//../actions/billMaterials';
import PropTypes from 'prop-types';
import BillOfMaterialLines from './Lines';




class BillOfMaterialsForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      description: '',
      lines: [{ index: Math.random(), type: "", quantity: '', product: '', raw_material: '', unit: '' }],
  
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewRow = this.addNewRow.bind(this);
    this.deleteRow = this.deleteRow.bind(this);
  }

  handleChange = (e) => {
    if (["type", "quantity", 'product', 'raw_material', 'unit'].includes(e.target.name)) {
        let lines = [...this.state.lines]
        lines[e.target.dataset.id][e.target.name] = e.target.value;
    } else {
        this.setState({ [e.target.name]: e.target.value })
    }
  }

  addNewRow = (e) => {
      this.setState((prevState) => ({
          lines: [...prevState.lines, { index: Math.random(), type: "", quantity: '', product: '', raw_material: '', unit: '' }],
      }));
  }

  deleteRow = (index) => {
      this.setState({
          lines: this.state.lines.filter((s, sindex) => index !== sindex),
      });
      // const taskList1 = [...this.state.taskList];
      // taskList1.splice(index, 1);
      // this.setState({ taskList: taskList1 });
  }

  clickOnDelete(record) {
        this.setState({
            lines: this.state.lines.filter(r => r !== record)
        });
  }

  

  onChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }





  onSubmit = (e) => {
      e.preventDefault();
      const { 
        name,
        description,
        lines
 
      } = this.state;

      const bill = { 
        name,
        description,
        lines 
      };

      this.props.addBillMaterial(bill);
      this.setState({
          lines: [],
          name: '',
          description: '',
        });
      this.props.history.push('/billofmaterials')
    };

    static propTypes = {
        addBillMaterial: PropTypes.func.isRequired,


    }


  render = () => {
    const {  
      name,
      description,
    } = this.state;

    let { lines } = this.state;
 

    return (
      <div className="card card-body mt-4 mb-4">
        <h2>Add Bill Of Material</h2>
        <form onSubmit={this.onSubmit} onChange={this.handleChange}>
          <div className="p-fluid p-formgrid p-grid">
            <div className="p-field p-col-12 p-md-12">
                <label>NAME</label>
                <InputText
                  className="form-control"
                  type="text"
                  name="name"
                  onChange={this.onChange}
                  value={name}
                />
              </div>
            <div className="p-field p-col-12 p-md-12">
              <label>DESCRIPTION</label>
              <InputTextarea
                rows="3"
                name="description"
                onChange={this.onChange}
                value={description}
              />
            </div>
            <div className="p-field p-col-12 p-md-6">
              <Button label="Submit" className="p-button-success p-button-rounded" />
            </div>
            <table className="table">
              <thead>
                  <tr>
                    <th>QUANTITY</th>
                    <th>TYPE</th>
                    <th>RAW MATERIAL</th>
                    <th>PRODUCT</th>
                    <th>UNIT</th>
                  </tr>
                </thead>
                <tbody>
                  <BillOfMaterialLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
                </tbody>
                <tfoot>
                  <tr><td colSpan="4">
                      <Button onClick={this.addNewRow} type="button" icon='pi pi-plus' className="p-button-warning"/>
                  </td></tr>
                </tfoot>
            </table>
          </div>
        </form>
      </div>
    );
  }

}



export default connect(null, { addBillMaterial })(BillOfMaterialsForm);





