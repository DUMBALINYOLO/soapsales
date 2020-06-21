import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUnitmeasure } from '..//../actions/unitmeasure';
import PropTypes from 'prop-types';

export class UnitmeasureForm extends Component{
    state = {
        name: '',
        eval_string: '',
        is_derived: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, eval_string, is_derived } = this.state;
      const unitmeasure = { name, eval_string, is_derived };
      this.props.addUnitmeasure(unitmeasure);
    };

    static propTypes = {
        addUnitmeasure: PropTypes.func.isRequired,
    }


    render() {
        const { name, eval_string, is_derived } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Unit Measure</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Name</label>
                  <input
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="form-group">
                  <label>Eval String</label>
                  <input
                    className="form-control"
                    type="number"
                    name="eval string"
                    onChange={this.onChange}
                    value={eval_string}
                  />
                </div>
                <div className="form-group">
                  <label>Is Derived</label>
                  <input
                    className="form-control"
                    type="number"
                    name="is derived"
                    onChange={this.onChange}
                    value={is_derived}
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


export default connect(null, { addUnitmeasure })(UnitmeasureForm);
