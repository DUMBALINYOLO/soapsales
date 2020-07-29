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
import {Checkbox} from 'primereact/checkbox';
import {Dropdown} from 'primereact/dropdown';


export class SalesRepForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            employee: null,
            can_reverse_invoices: false,
            can_offer_discounts: false,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
        this.handleCanOfferDiscounts = this.handleCanOfferDiscounts.bind(this);
        this.handleCanReverseInvoices = this.handleCanReverseInvoices.bind(this);

    }

    onTypeChange (e){
      this.setState({employee: e.value})
    }

    handleCanOfferDiscounts() {
          this.setState({
            can_offer_discounts: !this.state.checked
          });
        }

    handleCanReverseInvoices() {
          this.setState({
            can_reverse_invoices: !this.state.checked
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

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>ADD A SALES REPRESENTATIVE </h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12">
                    <Dropdown 
                      placeholder ="SELECT EMPLOYEE"
                      value={employee}
                      onChange={this.onTypeChange}
                      options={employees}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="username" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN REVERSE INVOICES :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleCanReverseInvoices}
                      checked={this.state.can_reverse_invoices}
                    /> 
                  </div>
                  <div className="p-field p-col-12 p-md-6 p-formgroup-inline">
                    <label>CAN OFFER DISCOUNTS :</label>
                    <Checkbox
                      inputId="working"
                      onChange={this.handleCanOfferDiscounts}
                      checked={this.state.can_offer_discounts}
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



export default connect(mapStateToProps, { getEmployees, addSalesrep })(SalesRepForm);

