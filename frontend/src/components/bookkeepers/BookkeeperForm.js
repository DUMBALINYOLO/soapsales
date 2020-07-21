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

export class BookkeeperForm extends Component{
    constructor(props){
        super(props);
            this.state = {
            employee: '',
            can_create_journals: true,
            can_create_orders_and_invoices: true,
            can_record_expenses: true,
            can_record_assets: true,
            listOfEmployees: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleJournal = this.handleJournal.bind(this);
        this.handleInvoice = this.handleInvoice.bind(this);
        this.handleExpense = this.handleExpense.bind(this);
        this.handleAssets = this.handleAssets.bind(this);
    }

    handleJournal(event) {
      const target = event.target;
      const value = target.name === 'can_create_journals' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleInvoice(event) {
      const target = event.target;
      const value = target.name === 'can_create_orders_and_invoices' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleExpense(event) {
      const target = event.target;
      const value = target.name === 'can_record_expenses' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleAssets(event) {
      const target = event.target;
      const value = target.name === 'can_record_assets' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
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

        let listOfEmployees = employees.length > 0
          && employees.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.username}</option>
          )
        }, this);



        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Bookkeeper</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Can Create Journals:
                        <input
                          name="can_create_journals"
                          type="checkbox"
                          checked={can_create_journals}
                          onChange={this.handleJournal} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Can Create Orders And Invoices:
                        <input
                          name="can_create_orders_and_invoices"
                          type="checkbox"
                          checked={can_create_orders_and_invoices}
                          onChange={this.handleInvoice} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Can Record Expenses:
                        <input
                          name="can_record_expenses"
                          type="checkbox"
                          checked={can_record_expenses}
                          onChange={this.handleExpense} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        Can Record Assets:
                        <input
                          name="can_record_assets"
                          type="checkbox"
                          checked={can_record_assets}
                          onChange={this.handleAssets} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    Employee
                    <select
                      name ='employee'
                      value={employee}
                      onChange={this.onChange}
                    >
                      {listOfEmployees}
                    </select>
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
