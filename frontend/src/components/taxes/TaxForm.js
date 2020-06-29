import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTax } from '..//../actions/taxes';
import PropTypes from 'prop-types';

export class TaxForm extends Component{
    state = {
        name: '',
        rate: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, rate } = this.state;
      const tax = { name, rate};
      this.props.addTax(tax);
      this.setState({
        name: '',
        rate: '',
      });
    };

    static propTypes = {
        addTax: PropTypes.func.isRequired,
    }


    render() {
        const { name, rate } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Tax</h2>
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
                  <label>Rate</label>
                  <input
                    className="form-control"
                    type="number"
                    name="rate"
                    onChange={this.onChange}
                    value={rate}
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


export default connect(null, { addTax })(TaxForm);
