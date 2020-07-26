import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBookkeeper } from '..//../actions/bookkeepers';
import { getEmployees } from '..//../actions/employees';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {Checkbox} from 'primereact/checkbox';

export class BookkeeperForm extends Component{
    constructor(props){
        super(props);
            this.state = {
            employee: null,
            can_create_journals: false,
            can_create_orders_and_invoices: false,
            can_record_expenses: false,
            can_record_assets: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleJournal = this.handleJournal.bind(this);
        this.handleInvoice = this.handleInvoice.bind(this);
        this.handleExpense = this.handleExpense.bind(this);
        this.handleAssets = this.handleAssets.bind(this);
        this.onEmployee = this.onEmployee.bind(this);
    }

    handleJournal() {
      this.setState({
        can_create_journals: !this.state.checked
      });
    }

    handleInvoice(event) {
      this.setState({
        can_create_orders_and_invoices: !this.state.checked
      });
    }

    handleExpense(event) {
      this.setState({
        can_record_expenses: !this.state.checked
      });
    }

    handleAssets(event) {
      this.setState({
        can_record_assets: !this.state.checked
      });
    }

    onEmployee (e){
      this.setState({employee: e.value})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        employee, 
        can_create_journals, 
        can_create_orders_and_invoices, 
        can_record_expenses, 
        can_record_assets 
      } = this.state;

      const bookkeeper = { 
        employee, 
        can_create_journals, 
        can_create_orders_and_invoices, 
        can_record_expenses, 
        can_record_assets
      };

      this.props.addBookkeeper(bookkeeper);
      this.setState({
        employee: '', 
        can_create_journals: true, 
        can_create_orders_and_invoices: true, 
        can_record_expenses: true, 
        can_record_assets: true
      });
      this.props.history.push('/bookkeepers');


    };

    static propTypes = {
        addBookkeeper: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.getEmployees();

    }


    render() {
        const {  
          employee, 
          can_create_journals, 
          can_create_orders_and_invoices,  
          can_record_expenses, 
          can_record_assets
        } = this.state;
        const { employees } = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Bookkeeper</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12">
                    <Dropdown 
                      placeholder ="SELECT EMPLOYEE"
                      value={employee}
                      onChange={this.onEmployee}
                      options={employees}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="employee_number" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN CREATE JOURNALS :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleJournal}
                      checked={this.state.can_create_journals}
                    />                        
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN CREATE ORDERS AND INVOIVES :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleInvoice}
                      checked={this.state.can_create_orders_and_invoices}
                    />                        
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN RECORD EXPENSES :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleExpense}
                      checked={this.state.can_record_expenses}
                    />                        
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN RECORD ASSETS :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleAssets}
                      checked={this.state.can_record_assets}
                    />                        
                  </div>                  
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
    employees: state.employees.employees

})



export default connect(mapStateToProps, { getEmployees, addBookkeeper })(BookkeeperForm);
