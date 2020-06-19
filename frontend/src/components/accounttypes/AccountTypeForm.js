import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountType } from '..//../actions/accounttypes';
import PropTypes from 'prop-types';

export class AccountTypeForm extends Component{
    state = {
        category: '',
        classification: '',
        name: '',
        order: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        category,
        classification,
        name,
        order 
      } = this.state;

      const accounttype = { 
          category,
          classification,
          name,
          order
      };

      this.props.addAccountType(accounttype);

    };

    static propTypes = {
        addAccountType: PropTypes.func.isRequired,
    }


    render() {
        const {  
         category,
         classification,
         name,
         order
        } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>AddAccountType</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Category</label>
                  <input
                    className="form-control"
                    type="radio"
                    name="category"
                    onChange={this.onChange}
                    value={category}
                  />
                </div>
                <div className="form-group">
                  <label>Classification</label>
                  <input
                    className="form-control"
                    type="radio"
                    name="classification"
                    onChange={this.onChange}
                    value={classification}
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
                  <label>Order</label>
                  <input
                    className="form-control"
                    type="number"
                    name="order"
                    onChange={this.onChange}
                    value={order}
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

export default connect(null, { addAccountType })(AccountTypeForm);
