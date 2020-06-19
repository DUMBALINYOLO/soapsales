import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWasteReport } from '..//../actions/wasteReports';
import PropTypes from 'prop-types';

export class WasteReportForm extends Component{
    state = {
        product: '',
        unit: '',
        quantity: '',
        comments: '',
        recorded_by: ''
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
    }


    render() {
        const { product, unit, quantity, comments, recorded_by } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Waste Report</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Product</label>
                  <input
                    className="form-control"
                    type="text"
                    name="product"
                    onChange={this.onChange}
                    value={product}
                  />
                </div>
                <div className="form-group">
                  <label>Unit</label>
                  <input
                    className="form-control"
                    type="number"
                    name="unit"
                    onChange={this.onChange}
                    value={unit}
                  />
                </div>
                <div className="form-group">
                  <label>Quantity</label>
                  <input
                    className="form-control"
                    type="number"
                    name="qty"
                    onChange={this.onChange}
                    value={quantity}
                  />
                </div>
                <div className="form-group">
                  <label>Comments</label>
                  <input
                    className="form-control"
                    type="text"
                    name="comments"
                    onChange={this.onChange}
                    value={comments}
                  />
                </div>
                <div className="form-group">
                  <label>Recorded By</label>
                  <input
                    className="form-control"
                    type="text"
                    name="recorded by"
                    onChange={this.onChange}
                    value={recorded_by}
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


export default connect(null, { addWasteReport })(WasteReportForm);
