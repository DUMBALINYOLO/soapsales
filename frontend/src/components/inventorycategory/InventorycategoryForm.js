import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addInventorycategory } from '..//../actions/inventorycategory';
import PropTypes from 'prop-types';

export class InventorycategoryForm extends Component{
    state = {
        name: '',
        description: '',
        parent: ''
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        name,
        description,
        parent
      } = this.state;

      const inventorycategory = {
        name,
        description,
        parent
      };

      this.props.addInventorycategory(inventorycategory);

    };

    static propTypes = {
        addInventorycategory: PropTypes.func.isRequired,
    }


    render() {
        const {
          name,
          description,
          parent
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Inventory Category</h2>
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
                  <label>Parent</label>
                  <input
                    className="form-control"
                    type="number"
                    name="parent"
                    onChange={this.onChange}
                    value={parent}
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

export default connect(null, { addInventorycategory })(InventorycategoryForm);
