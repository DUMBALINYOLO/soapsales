import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addProcessedproductcomponent } from '../../actions/processedproductcomponents';
import { getPricinggroups } from '..//../actions/pricinggroup';
import PropTypes from 'prop-types';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {Dropdown} from 'primereact/dropdown';


export class ProcessedproductcomponentForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            sku: '',
            pricing_method: null,
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onTypeChange = this.onTypeChange.bind(this);
    }
    
    onTypeChange (e){
      this.setState({pricing_method: e.value})
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { sku, pricing_method } = this.state;
      const processedproductcomponent = { sku, pricing_method };
      this.props.addProcessedproductcomponent(processedproductcomponent);
      console.log(processedproductcomponent)
      this.setState({
            sku: '',
            pricing_method: '',
        });
      this.props.history.push('/processedproductcomponents');
    };

    static propTypes = {
        addProcessedproductcomponent: PropTypes.func.isRequired,
        getPricinggroups: PropTypes.func.isRequired,

    }
    componentDidMount() {
      this.props.getPricinggroups();
    }

    render() {
        const { sku, pricing_method } = this.state;

        const {pricinggroups} = this.props;

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Processed Product Component </h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-6">
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
                  <Dropdown 
                    placeholder ="SELECT PRICING METHOD"
                    value={pricing_method}
                    onChange={this.onTypeChange}
                    options={pricinggroups}
                    filter={true} 
                    filterBy="id,name" 
                    showClear={true}
                    optionLabel="name" 
                    optionValue="id"
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
   pricinggroups: state.pricinggroups.pricinggroups
})

export default connect(mapStateToProps, {getPricinggroups, addProcessedproductcomponent })(ProcessedproductcomponentForm);
