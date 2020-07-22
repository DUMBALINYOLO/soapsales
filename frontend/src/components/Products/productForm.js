import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProduct } from '..//../actions/products';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar";

export class ProductForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            description: '',
            created_on: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { name, description, created_on } = this.state;
      const product = { name, description, created_on };
      this.props.addProduct(product);
      this.setState({
            name: '',
            description: '',
            created_on: '',
        });
      this.props.history.push('/products');
    };

    static propTypes = {
        addProduct: PropTypes.func.isRequired,
    }


    render() {
        const { name, description, created_on } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Product</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
                  <label>Name</label>
                  <InputText
                    name="name"
                    onChange={this.onChange}
                    value={name}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                <label>Created On</label>
                    <Calendar
                      showIcon={true}
                      className="form-control"
                      name="created_on"
                      onChange={this.onChange}
                      value={created_on}
                      dateFormat="yy-mm-dd"
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

                <div className="p-field p-col-12 p-md-6">
                  <Button label="Submit" className="p-button-success p-button-rounded" />
                </div>
              </div>
             </form>
         </div>
        );
    }
}


export default connect(null, { addProduct })(ProductForm);
