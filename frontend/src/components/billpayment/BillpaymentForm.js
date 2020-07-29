import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBillpayment } from '..//../actions/billpayments';
import PropTypes from 'prop-types';
import { getAccounts} from '..//../actions/accounts';
import { getBills} from '..//../actions/bills';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar";
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';


class BillPaymentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            date: '',
            account: null,
            bill: null,
            amount: '',
            memo: '',

      }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onAccount = this.onAccount.bind(this);
        this.onBill = this.onBill.bind(this);
    }

    onAccount (e){
      this.setState({aacount: e.value})
    } 

    onBill (e){
      this.setState({bill: e.value})
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        date,
        account,
        bill,
        amount,
        memo,

      } = this.state;

      const payment = {
        date,
        account,
        bill,
        amount,
        memo,
      };

      this.props.addBillpayment(payment);
      this.setState({
        date: '',
        account: '',
        bill: '',
        amount: '',
        memo: '',

        });
      this.props.history.push('/billpayments');
    };

    static propTypes = {
        addBillpayment: PropTypes.func.isRequired,
        getAccounts: PropTypes.func.isRequired,
        getBills: PropTypes.func.isRequired,

    }

    componentDidMount() {
      this.props.getAccounts()
      this.props.getBills()

    }

    render() {
        const {
        date,
        account,
        bill,
        amount,
        memo,
          
        } = this.state;
        
        
        const {accounts} = this.props;
        const {bills} = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Account</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-6">
                    <label>Date</label>
                    <Calendar
                      showIcon={true}
                      className="form-control"
                      name="date"
                      onChange={this.onChange}
                      value={date}
                      dateFormat="yy-mm-dd"
                    />
                  </div>

                  <div className="p-field p-col-12 p-md-6">
                    <label>Amount</label>
                    <InputNumber
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

                  <div className="p-field p-col-12 p-md-12">
                    <label>MEMO</label>
                    <InputTextarea
                      row="3"
                      className="form-control"
                      name="memo"
                      onChange={this.onChange}
                      value={memo}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT ACCOUNT"
                      value={account}
                      onChange={this.onAccount}
                      options={accounts}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="name" 
                      optionValue="id"
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT BILL"
                      value={bill}
                      onChange={this.onBill}
                      options={bills}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="vendor" 
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
    accounts: state.accounts.accounts,
    bills: state.bills.bills
})


export default connect(mapStateToProps, {getAccounts, getBills, addBillpayment})(BillPaymentForm);
