import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcess } from '../../actions/process';
import PropTypes from 'prop-types';

export class ProcessForm extends Component{
    state = {
        parent_process: '',
        process_equipment: '',
        name: '',
        description: '',
        bill_of_materials: '',
        type: '',
        duration: '',
        rate: '',
        product_list: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { parent_process, process_equipment, name, description, bill_of_materials, type, duration, rate, product_list } = this.state;
      const process = { parent_process, process_equipment, name, description, bill_of_materials, type, duration, rate, product_list };
      this.props.addProcess(process);
    };

    static propTypes = {
        addProcess: PropTypes.func.isRequired,
    }


    render() {
        const { parent_process, process_equipment, name, description, bill_of_materials, type, duration, rate, product_list } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process </h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Parent Process</label>
                  <input
                    className="form-control"
                    type="text"
                    name="parent process"
                    onChange={this.onChange}
                    value={parent_process}
                  />
                </div>
                <div className="form-group">
                  <label>Process Equipment</label>
                  <input
                    className="form-control"
                    type="text"
                    name="process equipment"
                    onChange={this.onChange}
                    value={process_equipment}
                  />
                </div>
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
                  <label>Bill Of Materials</label>
                  <input
                    className="form-control"
                    type="text"
                    name="bill of materials"
                    onChange={this.onChange}
                    value={bill_of_materials}
                  />
                </div>
                <div class="form-group">
                  <label>Type</label>
                  <select id="inputType" class="form-control">
                    <option selected>{type}</option>
                    <option>{type}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Duration</label>
                  <input
                    className="form-control"
                    type="date"
                    name="duration"
                    onChange={this.onChange}
                    value={duration}
                  />
                </div>
                <div className="form-group">
                  <label>Rate</label>
                  <input
                    className="form-control"
                    type="text"
                    name="rate"
                    onChange={this.onChange}
                    value={rate}
                  />
                </div>
                <div className="form-group">
                  <label>Product List</label>
                  <input
                    className="form-control"
                    type="text"
                    name="product list"
                    onChange={this.onChange}
                    value={product_list}
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


export default connect(null, { addProcess })(ProcessForm);
