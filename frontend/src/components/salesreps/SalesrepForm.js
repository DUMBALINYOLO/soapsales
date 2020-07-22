import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSalesrep } from '..//../actions/salesrep';
import { getEmployees } from '..//../actions/employees';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';

export class SalesRepForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee: '',
            can_reverse_invoices: true,
            can_offer_discounts: true,
            listOfEmployees: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleCanOfferDiscounts = this.handleCanOfferDiscounts.bind(this);
        this.handleCanReverseInvoices = this.handleCanReverseInvoices.bind(this);

    }

    handleCanOfferDiscounts(event) {
      const target = event.target;
      const value = target.name === 'can_offer_discounts' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleCanReverseInvoices(event) {
      const target = event.target;
      const value = target.name === 'can_reverse_invoices' ? target.checked : target.value;
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
        can_offer_discounts, 
        can_reverse_invoices, 
      } = this.state;

      const salesrep = { 
        employee, 
        can_offer_discounts, 
        can_reverse_invoices,
      };

      this.props.addSalesrep(salesrep);
      this.setState({
        employee: '',
        can_reverse_invoices: true,
        can_offer_discounts: true,
      });
      this.props.history.push('/salesreps');


    };

    static propTypes = {
        addSalesrep: PropTypes.func.isRequired,
        getEmployees: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.getEmployees();

    }


    render() {
        const {  
          employee, 
          can_offer_discounts, 
          can_reverse_invoices,
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
              <h2>ADD A SALES REPRESENTATIVE </h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        CAN REVERSE INVOICES ?:
                        <input
                          name="can_reverse_invoices"
                          type="checkbox"
                          checked={can_reverse_invoices}
                          onChange={this.handleCanReverseInvoices} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        CAN OFFER DISCOUNTS:
                        <input
                          name="can_offer_discounts"
                          type="checkbox"
                          checked={can_offer_discounts}
                          onChange={this.handleCanOfferDiscounts} />
                    </label>
                  </div>
                  
                  <div className="p-field p-col-12 p-md-12">
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



export default connect(mapStateToProps, { getEmployees, addSalesrep })(SalesRepForm);

