import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getOrders } from '..//../actions/orders';
import { addOrderpayment } from '..//../actions/orderpayments';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar";
import {InputNumber} from 'primereact/inputnumber';
import {Dropdown} from 'primereact/dropdown';


class OrderPaymentForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                date: '',
                amount: '',
                comments: '',
                order: null,
        }

      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.onTypeChange = this.onTypeChange.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onTypeChange (e){
      this.setState({order: e.value})
    }

    onSubmit = (e) => {
      e.preventDefault();
      const {
        date,
        amount,
        comments,
        order
      } = this.state;

      const payment = {
        date,
        amount,
        comments,
        order
      };

      this.props.addOrderpayment(payment);
      this.setState({
          date: '',
          amount: '',
          comments: '',
          order: '',
        });
      this.props.history.push('/orderpayments');
    };

    static propTypes = {
        addOrderpayment: PropTypes.func.isRequired,
        getOrders: PropTypes.func.isRequired,

    }

    componentDidMount() {
      this.props.getOrders()
    }

    render() {
        const {
          date,
          amount,
          comments,
          order
        } = this.state;

        
        const { orders } = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add An Account</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
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

                  <div className="p-field p-col-12 p-md-6">
                    <label>AMOUNT</label>
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
                    <label>Comments</label>
                    <InputTextarea
                      row="3"
                      className="form-control"
                      name="comments"
                      onChange={this.onChange}
                      value={comments}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-12">
                    <Dropdown 
                      placeholder ="SELECT ORDER"
                      value={order}
                      onChange={this.onTypeChange}
                      options={orders}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="tracking_number" 
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
    orders: state.orders.orders
})


export default connect(mapStateToProps, {getOrders, addOrderpayment})(OrderPaymentForm);
