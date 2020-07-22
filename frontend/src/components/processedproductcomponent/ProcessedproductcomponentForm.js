import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessedproductcomponent } from '../../actions/processedproductcomponents';
import { getProductComponentPricingChoices } from '..//../actions/choices';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputNumber} from 'primereact/inputnumber';


export class ProcessedproductcomponentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            direct_price: '',
            margin: '',
            markup: '',
            sku: '',
            pricing_method: '',
            salesGroup: [],
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { direct_price, margin, markup, sku, pricing_method } = this.state;
      const processedproductcomponent = { direct_price, margin, markup, sku, pricing_method };
      this.props.addProcessedproductcomponent(processedproductcomponent);
      this.setState({
            direct_price: '',
            margin: '',
            markup: '',
            sku: '',
            pricing_method: '',
        });
      this.props.history.push('/processedproductcomponents');
    };

    static propTypes = {
        addProcessedproductcomponent: PropTypes.func.isRequired,
        getProductComponentPricingChoices: PropTypes.func.isRequired,

    }
    componentDidMount() {
      this.props.getProductComponentPricingChoices();
    }

    render() {
        const { direct_price, margin, markup, sku, pricing_method } = this.state;

        const {productcomponentpricingchoices} = this.props;

        let salesGroup = productcomponentpricingchoices.length > 0
            && productcomponentpricingchoices.map((item, index) => {
                return (
                    <option key={item.key } value={item.key}>{item.value}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Processed Product Component </h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-12">
                  <label>SKU</label>
                  <InputText
                    className="form-control"
                    type="text"
                    name="sku"
                    onChange={this.onChange}
                    value={sku}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>DIRECT PRICE</label>
                  <InputNumber
                    name="direct_price"
                    onChange={this.onChange}
                    value={direct_price}
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
                  <label>MARGIN</label>
                  <InputNumber
                    name="margin"
                    onChange={this.onChange}
                    value={margin}
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
                  <label>MARKUP</label>
                  <InputNumber
                    name="markup"
                    onChange={this.onChange}
                    value={markup}
                    showButtons
                    buttonLayout="horizontal"
                    decrementButtonClassName="p-button-danger"
                    incrementButtonClassName="p-button-success"
                    incrementButtonIcon="pi pi-plus"
                    decrementButtonIcon="pi pi-minus"
                    step={1}
                  />
                </div>
                <div className="p-field p-col-12 p-md-4">
                    <label>PRICING METHOD</label>
                    <select
                        name="pricing_method"
                        value={pricing_method}
                        onChange={this.onChange}
                    >
                        {salesGroup}
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
    productcomponentpricingchoices: state.productcomponentpricingchoices.productcomponentpricingchoices,
})

export default connect(mapStateToProps, {getProductComponentPricingChoices, addProcessedproductcomponent })(ProcessedproductcomponentForm);
