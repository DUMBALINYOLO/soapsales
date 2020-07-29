import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJournal } from '..//../actions/journals';
import { getJournalEntryTypeChoices } from '..//../actions/choices';
import { getTransactions } from '..//../actions/transactions';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar";

export class JournalForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                date: '',
                entry_type: null,
                description: '',
                transaction: null,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTransactions = this.onTransactions.bind(this);
        this.onEntryType = this.onEntryType.bind(this);
    }

    onTransactions (e){
      this.setState({transaction: e.value})
    } 

    onEntryType (e){
      this.setState({entry_type: e.value})
    } 
    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          date,
          entry_type,
          description,
          transaction,
      } = this.state;

      const journal = {
          date,
          entry_type,
          description,
          transaction,
      };

      this.props.addJournal(journal);
      this.setState({
        date: '',
        entry_type: '',
        description: '',
        transaction: '',
      });
      this.props.history.push('/journals');

    };

    static propTypes = {
        addJournal: PropTypes.func.isRequired,
        getJournalEntryTypeChoices: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getJournalEntryTypeChoices()
    }

    render() {
        const {
            date,
            entry_type,
            description,
            transaction,
        } = this.state;

        const {journalentrytypechoices} = this.props;
        const { transactions } = this.props

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Journal</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT ENTRY TYPE"
                    value={entry_type}
                    onChange={this.onEntryType}
                    options={journalentrytypechoices}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="value" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <Dropdown 
                    placeholder ="SELECT TRANSACTIONS"
                    value={transaction}
                    onChange={this.onTransactions}
                    options={transactions}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="affected_account" 
                    optionValue="id"
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Description</label>
                  <InputTextarea
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
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
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
              </div>
             </form>
         </div>
        );
    }
}

const mapStateToProps = state =>({
    journalentrytypechoices: state.journalentrytypechoices.journalentrytypechoices,
    transactions: state.transactions.transactions
})

export default connect(mapStateToProps, {getJournalEntryTypeChoices, getTransactions, addJournal })(JournalForm);
