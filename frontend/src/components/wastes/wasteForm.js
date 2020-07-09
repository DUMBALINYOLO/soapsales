import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWasteReport } from '..//../actions/wasteReports';
import PropTypes from 'prop-types';
import { getProcessproducts } from '..//../actions/processproducts';
import { getUnitmeasures } from '..//../actions/unitmeasure';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import {InputTextarea} from 'primereact/inputtextarea';

export class WasteReportForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            product: '',
            productOption: [],
            unit: '',
            unitOption: [],
            quantity: '',
            comments: '',
            recorded_by: '',
            recorded_byOption: []
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { product, unit, quantity, comments, recorded_by } = this.state;
      const wasteReport = { product, unit, quantity, comments, recorded_by };
      this.props.addWasteReport(wasteReport);
    };

    static propTypes = {
        addWasteReport: PropTypes.func.isRequired,
        getProcessproducts: PropTypes.func.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
    }

    componentDidMount() {
      this.props.getProcessproducts();
      this.props.getUnitmeasures()
    }


    render() {
        const { product, unit, quantity, comments, recorded_by } = this.state;
        const {processproducts, unitmeasures} = this.props;

        let productOption = processproducts.length > 0
            && processproducts.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        let unitOption = unitmeasures.length > 0
            && unitmeasures.map((item, index) => {
                return (
                    <option key={item.id } value={item.id}>{item.name}</option>
                )
            }, this);

        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Waste Report</h2>
              <form onSubmit={this.onSubmit}>
              <div className="p-fluid p-formgrid p-grid">
                <div className="p-field p-col-12 p-md-4">
                  <label>Product</label>
                  <select
                      name="product"
                      value={product}
                      onChange={this.onChange}
                  >
                      {productOption}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-4">
                  <label>Unit</label>
                  <select
                      name="unit"
                      value={unit}
                      onChange={this.onChange}
                  >
                      {unitOption}
                  </select>
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Quantity</label>
                  <InputText
                    className="form-control"
                    type="number"
                    name="qty"
                    onChange={this.onChange}
                    value={quantity}
                  />
                </div>
                <div className="p-field p-col-12 p-md-6">
                  <label>Comments</label>
                  <InputTextarea
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>
                <div className="p-field p-col-12 p-md-12">
                  <label>Recorded By</label>
                  <input
                    className="form-control"
                    type="text"
                    name="recorded by"
                    onChange={this.onChange}
                    value={recorded_by}
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
    unitmeasures: state.unitmeasures.unitmeasures,
    processproducts: state.processproducts.processproducts
})

export default connect(mapStateToProps, { getUnitmeasures, getProcessproducts, addWasteReport })(WasteReportForm);
