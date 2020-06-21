import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDebitnote } from '..//../actions/debitnotes';
import PropTypes from 'prop-types';

export class DebitnotesForm extends Component{
    state = {
        date: '',
        order: '',
        comments: '',
        entry: '',
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        date,
        order,
        comments,
        entry,
      } = this.state;

      const debitnote = {
        date,
        order,
        comments,
        entry,
      };

      this.props.addDebitnote(debitnote);

    };

    static propTypes = {
        addDebitnote: PropTypes.func.isRequired,
    }


    render() {
        const {
            date,
            order,
            comments,
            entry,
        } = this.state;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Debit Note</h2>
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
                  <label>Order</label>
                  <input
                    className="form-control"
                    type="text"
                    name="order"
                    onChange={this.onChange}
                    value={order}
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
                  <label>Entry</label>
                  <input
                    className="form-control"
                    type="text"
                    name="entry"
                    onChange={this.onChange}
                    value={entry}
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

export default connect(null, { addDebitnote })(DebitnotesForm);
