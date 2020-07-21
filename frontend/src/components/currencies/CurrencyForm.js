import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCurrency } from '..//../actions/currencies';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

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
      this.setState({
        name: '',
        symbol: '',
      });
      this.props.history.push('/currencies');
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
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>Name</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="name"
                      onChange={this.onChange}
                      value={name}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>Symbol</label>
                    <InputText
                      className="form-control"
                      type="text"
                      name="symbol"
                      onChange={this.onChange}
                      value={symbol}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
                </div>
             </form>
         </div>
        );
    }
}


export default connect(null, { addCurrency })(CurrencyForm);
