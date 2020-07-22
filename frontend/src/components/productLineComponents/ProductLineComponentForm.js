import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProductLineComponent } from '..//../actions/productlinecomponents';
import { getProcessedproducts } from '..//../actions/processedproducts';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputNumber} from 'primereact/inputnumber';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Checkbox} from 'primereact/checkbox';
import {RadioButton} from 'primereact/radiobutton';
import {Dropdown} from 'primereact/dropdown';
import {InputTextarea} from 'primereact/inputtextarea';
import {Calendar} from "primereact/calendar"

export class ProductLineComponentForm extends Component{
  constructor(props){
      super(props);
      this.state = {
          product: '',
          returned: false,
          unit_price: '',
          value: '',
          quantity: '',
          productList:[],
      }
      this.onChange = this.onChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);
      this.handleReturned = this.handleReturned.bind(this);

  }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleReturned(event) {
      const target = event.target;
      const value = target.name === 'returned' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }

    onSubmit = (e) => {
      e.preventDefault();
      const { 
        product,
        returned,
        unit_price,
        value,
        quantity 
      } = this.state;
      const productlinecomponent = { 
        product,
        returned,
        unit_price,
        value,
        quantity
      };
      this.props.addProductLineComponent(productlinecomponent);
      this.setState({
          product: '',
          returned: false,
          unit_price: '',
          value: '',
          quantity: '',

        });
      this.props.history.push('/productlinecomponents');

    };

    static propTypes = {
        addProductLineComponent: PropTypes.func.isRequired,
        getProcessedproducts: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcessedproducts()
    }
    render() {
        const { 
          product,
          returned,
          unit_price,
          value,
          quantity
        } = this.state;

        

        const { processedproducts } = this.props;


        let productList = processedproducts.length > 0
            && processedproducts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.product}</option>
                )
            }, this);

        
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Asset</h2>
              <form onSubmit={this.onSubmit}>
                <div className="p-fluid p-formgrid p-grid">
                  <div className="p-field p-col-12 p-md-12">
                    <label>UNIT PRICE</label>
                    <InputNumber
                      name="unit_price"
                      onChange={this.onChange}
                      value={unit_price}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>VALUE</label>
                    <InputNumber
                      name="value"
                      onChange={this.onChange}
                      value={value}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>QUANTITY</label>
                    <InputNumber
                      name="quantity"
                      onChange={this.onChange}
                      value={quantity}
                      showButtons
                      buttonLayout="horizontal"
                      decrementButtonClassName="p-button-danger"
                      incrementButtonClassName="p-button-success"
                      incrementButtonIcon="pi pi-plus"
                      decrementButtonIcon="pi pi-minus"
                      step={1}
                    />
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                    <label>
                        RETURNED:
                        <input
                          name="returned"
                          type="checkbox"
                          checked={this.state.returned}
                          onChange={this.handleReturned} />
                    </label>
                  </div>
                  <div className="p-field p-col-12 p-md-6">
                      <label>PRODUCT</label>
                      <select
                          name="product"
                          value={product}
                          onChange={this.onChange}
                      >
                          {productList}
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
    processedproducts: state.processedproducts.processedproducts
})

export default connect(
        mapStateToProps, 
        { addProductLineComponent, getProcessedproducts })
        (ProductLineComponentForm);
