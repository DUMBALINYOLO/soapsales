import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPayment } from '..//../actions/payments';
import { getSalesreps} from '..//../actions/salesrep';
import { getInvoices} from '..//../actions/invoices';
import { getCustomerPaymentMethodChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputTextarea} from 'primereact/inputtextarea';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {Calendar} from "primereact/calendar";
import {InputNumber} from 'primereact/inputnumber';

export class PaymentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            amount: '',
            invoice: null,
            method: null,
            sales_rep: null,
            comments: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onMethod = this.onMethod.bind(this);
        this.onSalesrep = this.onSalesrep.bind(this);
        this.onInvoice = this.onInvoice.bind(this);
    }

    onMethod (e){
      this.setState({method: e.value})
    }

    onInvoice (e){
      this.setState({invoice: e.value})
    }

    onSalesrep (e){
      this.setState({sales_rep: e.value})
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          date,
          amount,
          invoice,
          method,
          sales_rep,
          comments,
      } = this.state;

      const payment = {
          date,
          amount,
          invoice,
          method,
          sales_rep,
          comments,
      };

      this.props.addPayment(payment);
      this.setState({
        date: '',
        amount: '',
        invoice: '',
        method: '',
        sales_rep: '',
        comments: '', 
      });
      this.props.history.push('/payments');

    };

    static propTypes = {
        addPayment: PropTypes.func.isRequired,
        getCustomerPaymentMethodChoices: PropTypes.func.isRequired,
        getInvoices: PropTypes.func.isRequired,
        getSalesreps: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getCustomerPaymentMethodChoices()
      this.props.getInvoices()
      this.props.getSalesreps()
    }


    render() {
        const {
            date,
            amount,
            invoice,
            method,
            sales_rep,
            comments,
        } = this.state;

        const { customerpaymentmethodchoices } = this.props;
        const { invoices } = this.props;
        const { salesreps } = this.props;
        
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Payment</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">                  
                  <div className="p-field p-col-12 p-md-6">
                    <label>AMOUNT</label>
                    <InputNumber
                      className="form-control"
                      name="amount"
                      onChange={this.onChange}
                      value={amount}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>DATE</label>
                    <Calendar
                      showIcon={true}
                      className="form-control"
                      name="date"
                      onChange={this.onChange}
                      value={date}
                      dateFormat="yy-mm-dd"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <label>COMMENTS</label>
                    <InputTextarea
                      name="comments"
                      onChange={this.onChange}
                      value={comments}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT INVOICE"
                      value={invoice}
                      onChange={this.onInvoice}
                      options={invoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT SALES REP"
                      value={sales_rep}
                      onChange={this.onSalesrep}
                      options={salesreps}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT METHOD"
                      value={method}
                      onChange={this.onMethod}
                      options={customerpaymentmethodchoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="id"
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
    customerpaymentmethodchoices: state.customerpaymentmethodchoices.customerpaymentmethodchoices,
    invoices: state.invoices.invoices,
    salesreps: state.salesreps.salesreps
})

export default connect(mapStateToProps, {getCustomerPaymentMethodChoices,getSalesreps, getInvoices, addPayment })(PaymentForm);
