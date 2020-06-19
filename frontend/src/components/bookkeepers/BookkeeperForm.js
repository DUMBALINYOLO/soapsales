import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookkeeper } from '..//../actions/bookkeepers';
import PropTypes from 'prop-types';

export class BookkeeperForm extends Component{
    state = {
        employee: '',
        can_create_journals: '',
        can_create_orders_and_invoices: '',
        can_record_expenses: '',
        can_record_assets: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { employee, can_create_journals, can_create_orders_and_invoices, can_record_expenses, can_record_assets } = this.state;

      const bookkeeper = { employee, can_create_journals, can_create_orders_and_invoices, can_record_expenses, can_record_assets};

      this.props.addBookkeeper(bookkeeper);
      // this.setState({
      //   name: '',
      //   rate: '',
      // });
    };

    static propTypes = {
        addBookkeeper: PropTypes.func.isRequired,
    }


    render() {
        const {  employee, can_create_journals, can_create_orders_and_invoices,  can_record_expenses, can_record_assets} = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Bookkeeper</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Employee</label>
                  <input
                    className="form-control"
                    type="radio"
                    name="employee"
                    onChange={this.onChange}
                    value={employee}
                  />
                </div>
                <div className="form-group">
                  <label>Can Create Journals</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="can_create_journals"
                    onChange={this.onChange}
                    value={can_create_journals}
                  />
                </div>
                <div className="form-group">
                  <label>Can Create Orders & Invoices</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="can_create_orders_and_invoices"
                    onChange={this.onChange}
                    value={can_create_orders_and_invoices}
                  />
                </div>

                <div className="form-group">
                  <label>Can Record Expenses</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="can_record_expenses"
                    onChange={this.onChange}
                    value={can_record_expenses}
                  />
                </div>

                <div className="form-group">
                  <label>Can Record Assets</label>
                  <input
                    className="form-control"
                    type="checkbox"
                    name="can_record_assets"
                    onChange={this.onChange}
                    value={can_record_assets}
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


export default connect(null, { addBookkeeper })(BookkeeperForm);
