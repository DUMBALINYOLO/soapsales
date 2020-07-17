import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addJournal } from '..//../actions/journals';
import { getJournalEntryTypeChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';

export class JournalForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                date: '',
                entry_type: '',
                description: '',
                transactions: '',
                entry: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
          date,
          entry_type,
          description,
          transactions,
      } = this.state;

      const journal = {
          date,
          entry_type,
          description,
          transactions,
      };

      this.props.addJournal(journal);

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
            transactions,
        } = this.state;

        const {journalentrytypechoices} = this.props;
        console.log(journalentrytypechoices)

        let entry = journalentrytypechoices.length > 0
            && journalentrytypechoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Journal</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>Transactions</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="transactions"
                    onChange={this.onChange}
                    value={transactions}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Description</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="description"
                    onChange={this.onChange}
                    value={description}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Date</label>
                  <InputText
                    className="form-control"
                    type="date"
                    name="date"
                    onChange={this.onChange}
                    value={date}
                  />
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <select
                        name="entry_type"
                        value={entry_type}
                        onChange={this.onChange}
                    >
                        {entry}
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
    journalentrytypechoices: state.journalentrytypechoices.journalentrytypechoices,
})

export default connect(mapStateToProps, {getJournalEntryTypeChoices, addJournal })(JournalForm);
