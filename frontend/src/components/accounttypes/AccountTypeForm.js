import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAccountType } from '..//../actions/accounttypes';
import { getAccountTypesCategoryChoices, getAccountTypesClassificationChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';

export class AccountTypeForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                category: null,
                classification: null,
                name: '',
                order: '',
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onCategory = this.onCategory.bind(this);
        this.onClassifcation = this.onClassifcation.bind(this);
    }

    onCategory (e){
      this.setState({category: e.value})
    } 

    onClassifcation (e){
      this.setState({classification: e.value})
    } 

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const {
        category,
        classification,
        name,
        order
      } = this.state;

      const accounttype = {
          category,
          classification,
          name,
          order
      };

      this.props.addAccountType(accounttype);
      this.setState({
          category: '',
          classification: '',
          name: '',
          order: '',

        });
      this.props.history.push('/accounttypes');

    };

    static propTypes = {
        addAccountType: PropTypes.func.isRequired,
        getAccountTypesClassificationChoices: PropTypes.func.isRequired,
        getAccountTypesCategoryChoices: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getAccountTypesClassificationChoices()
      this.props.getAccountTypesCategoryChoices()
    }

    render() {
        const {
         category,
         classification,
         name,
         order
        } = this.state;

        const {categorychoices} = this.props;

        const {accounttypesclassificationchoices} = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>AddAccountType</h2>
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
                  <label>Order</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="order"
                    onChange={this.onChange}
                    value={order}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT CATEGORIES"
                      value={category}
                      onChange={this.onCategory}
                      options={categorychoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="key"
                    />
                </div>
                <div className="p-field p-col-12 p-md-6">
                    <Dropdown 
                      placeholder ="SELECT CLASSIFICATIONS"
                      value={classification}
                      onChange={this.onClassifcation}
                      options={accounttypesclassificationchoices}
                      filter={true} 
                      filterBy="id,name" 
                      showClear={true}
                      optionLabel="value" 
                      optionValue="key"
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
    accounttypesclassificationchoices: state.accounttypesclassificationchoices.accounttypesclassificationchoices,
    categorychoices: state.categorychoices.categorychoices,
})

export default connect(mapStateToProps, {getAccountTypesCategoryChoices, getAccountTypesClassificationChoices, addAccountType })(AccountTypeForm);
