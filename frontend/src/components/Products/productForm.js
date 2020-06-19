import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '..//../actions/products';
import PropTypes from 'prop-types';

export class ProductForm extends Component{
    state = {
        name: '',
        description: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description } = this.state;
      const product = { name, description};
      this.props.addProduct(product);
    };

    static propTypes = {
        addProduct: PropTypes.func.isRequired,
    }


    render() {
        const { name, description } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Product</h2>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
             </form>
         </div>
        );
    }
}


export default connect(null, { addProduct })(ProductForm);
