import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addPayment } from '..//../actions/payments';
import { getCustomerPaymentMethodChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class PaymentForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                date: '',
                amount: '',
                invoice: '',
                method: '',
                sales_rep: '',
                comments: '',
                methods: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

    };

    static propTypes = {
        addPayment: PropTypes.func.isRequired,
        getCustomerPaymentMethodChoices: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getCustomerPaymentMethodChoices()
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

        const {customerpaymentmethodchoices} = this.props;
        console.log(customerpaymentmethodchoices)

        let methods = customerpaymentmethodchoices.length > 0
            && customerpaymentmethodchoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Payment</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Amount</label>
                  <input
                    className="form-control"
                    type="number"
                    name="amount"
                    onChange={this.onChange}
                    value={amount}
                  />
                </div>
                <div className="form-group">
                <label>Date</label>
                <input
                  className="form-control"
                  type="date"
                  name="date"
                  onChange={this.onChange}
                  value={date}
                />
                </div>
                <div className="form-group">
                  <label>Invoice</label>
                  <input
                    className="form-control"
                    type="text"
                    name="invoice"
                    onChange={this.onChange}
                    value={invoice}
                  />
                </div>
                <div className="form-group">
                  <label>Sales Rep</label>
                  <input
                    className="form-control"
                    type="text"
                    name="sales rep"
                    onChange={this.onChange}
                    value={sales_rep}
                  />
                </div>
                <div className="form-group">
                  <label>Comments</label>
                  <input
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="method"
                        value={method}
                        onChange={this.onChange}
                    >
                        {methods}
                    </select>
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

const mapStateToProps = state =>({
    customerpaymentmethodchoices: state.customerpaymentmethodchoices.customerpaymentmethodchoices,
})

export default connect(mapStateToProps, {getCustomerPaymentMethodChoices, addPayment })(PaymentForm);
