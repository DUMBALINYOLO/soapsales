import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCreditnote } from '..//../actions/creditnotes';
import PropTypes from 'prop-types';

export class CreditnotesForm extends Component{
    state = {
        date: '',
        invoice: '',
        comments: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        date,
        invoice,
        comments,
      } = this.state;

      const creditnote = {
        date,
        invoice,
        comments,
      };

      this.props.addCreditnote(creditnote);

    };

    static propTypes = {
        addCreditnote: PropTypes.func.isRequired,
    }


    render() {
        const {
            date,
            invoice,
            comments,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Credit Note</h2>
              <form onSubmit={this.onSubmit}>
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
                  <label>Comments</label>
                  <input
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
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

export default connect(null, { addCreditnote })(CreditnotesForm);
