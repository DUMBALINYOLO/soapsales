import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountingConfig } from '..//../actions/accountingConfig';
import { getBookkeepers } from '..//../actions/bookkeepers';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';

export class AccountingConfigForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                start_of_financial_year: '',
                default_accounting_period: '',
                default_bookkeeper: '',
                bookkeeperOption: [],
                equipment_capitalization_period: '',
                is_configured: true,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleConfigured = this.handleConfigured.bind(this);
    }

    handleConfigured(event) {
      const target = event.target;
      const value = target.name === 'is_configured' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
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
        getBookkeepers: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getBookkeepers()
    }


    render() {
        const {
            start_of_financial_year,
            default_accounting_period,
            default_bookkeeper,
            equipment_capitalization_period,
            is_configured,
        } = this.state;

        const {bookkeepers} = this.props;

        let bookkeeperOption = bookkeepers.length > 0
            && bookkeepers.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Accounting Configurations</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                    <label >Default Book Keeper</label>
                <select
                    name="default_bookkeeper"
                    value={default_bookkeeper}
                    onChange={this.onChange}
                >
                    {bookkeeperOption}
                </select>
              </div>

                <div className="p-field p-col-12 p-md-6">
                  <label >Default Accounting Period</label>
                  <select class="form-control">
                    <option selected>{default_accounting_period}</option>
                    <option>{default_accounting_period}</option>
                  </select>
                </div>

                <div className="p-field p-col-12 p-md-6">
                  <label>Start Of Financial Year</label>
                  <input
                    className="form-control"
                    type="date"
                    name="start_of_financial_year"
                    onChange={this.onChange}
                    value={start_of_financial_year}
                  />
                </div>

                <label>
                    Is Configured:
                    <input
                      name="is_configured"
                      type="checkbox"
                      checked={is_configured}
                      onChange={this.handleConfigured} />
                </label>
                <div className="p-field p-col-12 p-md-6">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
              </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    bookkeepers: state.bookkeepers.bookkeepers
})

export default connect(mapStateToProps, {getBookkeepers, addAccountingConfig })(AccountingConfigForm);
