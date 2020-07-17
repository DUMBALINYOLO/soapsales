import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQuotation } from '..//../actions/quotations';
import { getCustomers } from '..//../actions/customers';
import { getSalesreps } from '..//../actions/salesrep';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {InputTextarea} from 'primereact/inputtextarea';
import QuotaionLines from './Lines';
import PropTypes from 'prop-types';

export class QuotationForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            status: '',
            customer: '',
            customerOption: [],
            purchase_order_number: '',
            invoice_validated_by: '',
            draft: true,
            sales_person: '',
            salesrepOption: [],
            due: '',
            terms: '',
            comments: '',
            ship_from: '',
            lines: [{ index: Math.random(), product: "", tax: "", discount: "" }],

        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.addNewRow = this.addNewRow.bind(this);
        this.deleteRow = this.deleteRow.bind(this);
        this.handleDraft = this.handleDraft.bind(this);
    }

    handleDraft(event) {
      const target = event.target;
      const value = target.name === 'draft' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    handleChange = (e) => {
        if (["product", "tax", "discount"].includes(e.target.name)) {
          let lines = [...this.state.lines]
          lines[e.target.dataset.id][e.target.name] = e.target.value;
        } else {
          this.setState({ [e.target.name]: e.target.value })
        }
    }

    addNewRow = (e) => {
        this.setState((prevState) => ({
            lines: [...prevState.lines, { index: Math.random(), product: "", tax: "", discount: "" }],
        }));
    }

    deleteRow = (index) => {
        this.setState({
            lines: this.state.lines.filter((s, sindex) => index !== sindex),
        });
    }

    clickOnDelete(record) {
        this.setState({
          lines: this.state.lines.filter(r => r !== record)
        });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
      } = this.state;

      const quotation = {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
      };

      this.props.addQuotation(quotation);
      console.log(quotation)
      this.setState({
          lines: [],
          status: "",
          customer: "",
          purchase_order_number: "",
          invoice_validated_by: "",
          draft: "",
          sales_person: "",
          due: "",
          terms: "",
          comments: "",
          ship_from: ""

        });

    };

    static propTypes = {
        addQuotation: PropTypes.func.isRequired,
        getCustomers: PropTypes.func.isRequired,
        getSalesreps: PropTypes.func.isRequired
    }

    componentDidMount() {
      this.props.getCustomers();
      this.props.getSalesreps()
    }


    render() {
        const {
          status,
          customer,
          purchase_order_number,
          invoice_validated_by,
          draft,
          sales_person,
          due,
          terms,
          comments,
          ship_from
        } = this.state;

        let { lines } = this.state

        const { customers, salesreps } = this.props;

        console.log(customers)


        let customerz = customers.length > 0
          && customers.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);

        console.log(salesreps)

        let salesperson = salesreps.length > 0
          && salesreps.map((item, i) => {
          return (
            <option key={i} value={item.id}>{item.name}</option>
          )
        }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Quotation</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Status</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="status"
                    onChange={this.onChange}
                    value={status}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>Purchase Order Number</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="purchase order number"
                    onChange={this.onChange}
                    value={purchase_order_number}
                  />
                </div>
                <label>
                    Draft:
                    <input
                      name="draft"
                      type="checkbox"
                      checked={this.state.draft}
                      onChange={this.handleDraft} />
                </label>
                <div className="p-field p-col-12 p-md-6">
                  <label>Due</label>
                  <InputText
                    className="form-control"
                    type="date"
                    name="due"
                    onChange={this.onChange}
                    value={due}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>Terms</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="terms"
                    onChange={this.onChange}
                    value={terms}
                  />
                </div>

                <div className="p-field p-col-12 p-md-6">
                  <label>Comments</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>

                <div className="p-field p-col-12 p-md-6">
                  <select
                    name ='customer'
                    value={customer}
                    onChange={this.onChange}
                  >
                    {customerz}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <select
                    name ='sales_person'
                    value={sales_person}
                    onChange={this.onChange}
                  >
                    {salesperson}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
                <table className="table">
                  <thead>
                      <tr>
                        <th>DISCOUNT</th>
                        <th>PRODUCT</th>
                        <th>TAX</th>
                      </tr>
                    </thead>
                    <tbody>
                      <QuotationLines add={this.addNewRow} delete={this.clickOnDelete.bind(this)} lines={lines} />
                    </tbody>
                    <tfoot>
                      <tr><td colSpan="4">
                          <Button onClick={this.addNewRow} type="button" icon='pi pi-plus' className="p-button-warning"/>
                      </td></tr>
                    </tfoot>
                </table>
              </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    customers: state.customers.customers,
    salesreps: state.salesreps.salesreps
})

export default connect(mapStateToProps, { getCustomers, getSalesreps, addInvoice })(QuotationForm);
