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

export class AccountTypeForm extends Component{
    constructor(props){
        super(props);
            this.state = {
                category: '',
                classification: '',
                name: '',
                order: '',
                accounttypescategorychoices: [],
                accounttypesclassificationchoices: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
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

        const {categories} = this.props.accounttypescategorychoices;
        console.log(categories)

        // let accounttypescategorychoices = categories.length > 0
        //     && categories.map((item, index) => {
        //         return (
        //             <option key={item.key } value={item.key}>{item.value}</option>
        //         )
        //     }, this);

        // const {classifications} = this.props.accounttypesclassificationchoices;

        // let accounttypesclassificationchoices = classifications.length > 0
        //     && classifications.map((item, index) => {
        //         return (
        //             <option key={item.key } value={item.key}>{item.value}</option>
        //         )
        //     }, this);





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
    accounttypescategorychoices: state.accounttypescategorychoices.accounttypescategorychoices,
})

export default connect(mapStateToProps, {getAccountTypesCategoryChoices, getAccountTypesClassificationChoices, addAccountType })(AccountTypeForm);
