import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAsset } from '..//../actions/assets';
import PropTypes from 'prop-types';

export class AssetForm extends Component{
    state = {
        name: '',
        description: '',
        category: '',
        initial_value: '',
        depreciation_period: '',
        init_date: '',
        depreciation_method: '',
        salvage_value: '',
        credit_account: '',
        credited_by: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by } = this.state;
      const asset = { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by };
      this.props.addAsset(asset);

    };

    static propTypes = {
        addAsser: PropTypes.func.isRequired,
    }


    render() {
        const { name, description, category, initial_value, depreciation_period, init_date, depreciation_method, salvage_value, credit_account, credited_by } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Asset</h2>
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
                  <label>Category</label>
                  <input
                    className="form-control"
                    type="text"
                    name="category"
                    onChange={this.onChange}
                    value={category}
                  />
                </div>
                <div className="form-group">
                  <label>Initial Value</label>
                  <input
                    className="form-control"
                    type="number"
                    name="initial value"
                    onChange={this.onChange}
                    value={initial_value}
                  />
                </div>
                <div className="form-group">
                  <label>Depreciation Period</label>
                  <input
                    className="form-control"
                    type="date"
                    name="depreciation period"
                    onChange={this.onChange}
                    value={depreciation_period}
                  />
                </div>
                <div className="form-group">
                  <label>Init Date</label>
                  <input
                    className="form-control"
                    type="date"
                    name="init date"
                    onChange={this.onChange}
                    value={init_date}
                  />
                </div>
                <div className="form-group">
                  <label>Depreciation Method</label>
                  <input
                    className="form-control"
                    type="text"
                    name="depreciation method"
                    onChange={this.onChange}
                    value={depreciation_method}
                  />
                </div>
                <div className="form-group">
                  <label>Salvage Value</label>
                  <input
                    className="form-control"
                    type="number"
                    name="salvage value"
                    onChange={this.onChange}
                    value={salvage_value}
                  />
                </div>
                <div className="form-group">
                  <label>Credit Account</label>
                  <input
                    className="form-control"
                    type="text"
                    name="credit account"
                    onChange={this.onChange}
                    value={credit_account}
                  />
                </div>
                <div className="form-group">
                  <label>Credited By</label>
                  <input
                    className="form-control"
                    type="text"
                    name="credited by"
                    onChange={this.onChange}
                    value={credited_by}
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


export default connect(null, { addAsset })(AssetForm);
