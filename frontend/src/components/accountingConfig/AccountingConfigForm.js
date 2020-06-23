import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountingConfig } from '..//../actions/accountingConfig';
import PropTypes from 'prop-types';

export class AccountingConfigForm extends Component{
    state = {
        start_of_financial_year: '',
        default_accounting_period: '',
        default_bookkeeper: '',
        equipment_capitalization_period: '',
        is_configured: '',
    }




    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        start_of_financial_year,
        default_accounting_period,
        default_bookkeeper,
        equipment_capitalization_period,
        is_configured,
      } = this.state;

      const accountingConfig = {
        start_of_financial_year,
        default_accounting_period,
        default_bookkeeper,
        equipment_capitalization_period,
        is_configured,
      };

      this.props.addAccountingConfig(accountingConfig);

    };

    static propTypes = {
        addAccountingConfig: PropTypes.func.isRequired,
    }


    render() {
        const {
            start_of_financial_year,
            default_accounting_period,
            default_bookkeeper,
            equipment_capitalization_period,
            is_configured,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Accounting Configurations</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Start Of Financial Year</label>
                  <input
                    className="form-control"
                    type="select"
                    name="start of financial year"
                    onChange={this.onChange}
                    value={start_of_financial_year}
                  />
                </div>

                <div class="form-group">
                  <label >Default Accounting Period</label>
                  <select class="form-control">
                    <option selected>{default_accounting_period}</option>
                    <option>{default_accounting_period}</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Default Bookkeeper</label>
                  <input
                    className="form-control"
                    type="text"
                    name="default bookkeeper"
                    onChange={this.onChange}
                    value={default_bookkeeper}
                  />
                </div>
                <div className="form-group">
                  <label>Equipment Capitalization Period</label>
                  <input
                    className="form-control"
                    type="date"
                    name="equipment_capitalization_period"
                    onChange={this.onChange}
                    value={equipment_capitalization_period}
                  />
                </div>

                <div className="form-group">
                  <label>Is Configured</label>
                  <input
                    className="form-control"
                    type="text"
                    name="is configured"
                    onChange={this.onChange}
                    value={is_configured}
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

export default connect(null, { addAccountingConfig })(AccountingConfigForm);
