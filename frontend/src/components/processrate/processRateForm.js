import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessRate } from '../../actions/processRates';
import PropTypes from 'prop-types';

export class ProcessRateForm extends Component{
    state = {
        unit: '',
        unit_time: '',
        quantity: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { unit, unit_time, quantity } = this.state;
      const processRates = { unit, unit_time, quantity };
      this.props.addProcessRate(processRates);
    };

    static propTypes = {
        addProcessRate: PropTypes.func.isRequired,
    }


    render() {
        const { unit, unit_time, quantity } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Process Rates</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Unit</label>
                  <input
                    className="form-control"
                    type="number"
                    name="unit"
                    onChange={this.onChange}
                    value={unit}
                  />
                </div>
                <div className="form-group">
                  <label>Unit Time</label>
                  <input
                    className="form-control"
                    type="choice-field"
                    name="unit time"
                    onChange={this.onChange}
                    value={unit_time}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name="qty"
                    onChange={this.onChange}
                    value={quantity}
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


export default connect(null, { addProcessRate })(ProcessRateForm);
