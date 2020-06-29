import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import './form.css';
import ReactDOM from 'react-dom';

import React, {Component} from 'react';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';

import { connect } from 'react-redux';
import { addAccount } from '..//../actions/accounts';
import PropTypes from 'prop-types';

export class Form extends Component {

    constructor(props) {
        super(props);
        this.state = {
            is_active: [],
            is_contra: [],
            selectedAccount: null,
            account_type: '',
            name: '',
            description: '',
            initial_balance: '',
            is_active: '',
            is_contra: '',
            order: '',
        };

        this.onActive = this.onActive.bind(this);
        this.onContra = this.onContra.bind(this);
        this.onStateChange = this.onStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange= (e) => this.setState({ [e.target.name]: e.target.value });




    onStateChange(e) {
        this.setState({selectedAccount: e.value});
    }
    onActive(e) {
        let selectedObjects = [...this.state.is_active];

        if(e.checked)
            selectedObjects.push(e.value);
        else
            selectedObjects.splice(selectedObjects.indexOf(e.value), 1);

        this.setState({is_active: selectedObjects});
    }

    onContra(e) {
        let selectedObjects = [...this.state.is_contra];

        if(e.checked)
            selectedObjects.push(e.value);
        else
            selectedObjects.splice(selectedObjects.indexOf(e.value), 1);

        this.setState({is_contra: selectedObjects});
    }


    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="p-fluid p-formgrid p-grid">
                        <div className="p-field p-col-12 p-md-3">
                            <label htmlFor="account_type">Account Type</label>
                            <Dropdown inputId="account_type" value={this.props.account_type} onChange={this.onStateChange} placeholder="Select" optionLabel="name" />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="name">Name</label>
                            <InputText id="name" type="text" value={this.props.name} onChange={this.handleChange} />
                        </div>
                        <div className="p-field p-col-12">
                            <label htmlFor="description">Description</label>
                            <InputTextarea id="description" type="text" rows="4" value={this.props.description} onChange={this.handleChange} />
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="initial_balance">Initial Balance</label>
                            <InputText id="initial_balance" type="number" value={this.props.initial_balance} onChange={this.handleChange}/>
                        </div>
                        <div className="p-formgroup-inline pb-3">
                            <div className="p-field-checkbox">
                                <Checkbox inputId="is_active" value={this.props.is_active} onChange={this.onActive} checked={this.state.is_active.indexOf('Is Active') !== -1}/>
                                <label htmlFor="is_active">Is Active</label>
                            </div>
                            <div className="p-field-checkbox">
                                <Checkbox inputId="is_contra" value={this.props.is_contra} onChange={this.onContra} checked={this.state.is_contra.indexOf('Is Contra') !== -1}/>
                                <label htmlFor="is_contra">Is Contra</label>
                            </div>
                        </div>
                        <div className="p-field p-col-12 p-md-6">
                            <label htmlFor="order">Order</label>
                            <InputText id="order" type="number" value={this.props.order} onChange={this.handleChange}/>
                        </div>
                        <div className="p-field p-col-12">
                            <Button label="Submit" className="p-button-success" />
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default connect(null, { addAccount })(Form);
