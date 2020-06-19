import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrency } from '..//../actions/currencies';
import PropTypes from 'prop-types';

export class CurrencyForm extends Component{
    state = {
        name: '',
        symbol: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, symbol } = this.state;
      const currency = { name, symbol};
      this.props.addCurrency(currency);
      // this.setState({
      //   name: '',
      //   rate: '',
      // });
    };

    static propTypes = {
        addCurrency: PropTypes.func.isRequired,
    }


    render() {
        const { name, symbol } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Currency</h2>
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
                  <label>Symbol</label>
                  <input
                    className="form-control"
                    type="text"
                    name="symbol"
                    onChange={this.onChange}
                    value={symbol}
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


export default connect(null, { addCurrency })(CurrencyForm);
