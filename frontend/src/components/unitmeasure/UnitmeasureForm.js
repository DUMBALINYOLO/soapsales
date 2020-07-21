import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addUnitmeasure } from '..//../actions/unitmeasure';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';

export class UnitmeasureForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            eval_string: '',
            is_derived: false
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleDerived = this.handleDerived.bind(this);

    }
    handleDerived(event) {
      const target = event.target;
      const value = target.name === 'is_derived' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, eval_string, is_derived } = this.state;
      const unitmeasure = { name, eval_string, is_derived };
      this.props.addUnitmeasure(unitmeasure);
      this.setState({
        name: '',
        eval_string: '',
        is_derived: false,


        });
      
      this.props.history.push('/unitofmeasures');

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
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Name</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>Eval String</label>
                  <InputText
                    className="form-control"
                    name="eval_string"
                    onChange={this.onChange}
                    value={eval_string}
                  />
                </div>
                <label>
                    Is Derived:
                    <input
                      name="is_derived"
                      type="checkbox"
                      checked={this.state.is_derived}
                      onChange={this.handleDerived} />
                  </label>

                  <div className="p-field p-col-12 p-md-6">
                    <Button label="Submit" className="p-button-success p-button-rounded" />
                  </div>
            </div>
            </form>
         </div>
        );
    }
}


export default connect(null, { addUnitmeasure })(UnitmeasureForm);
