import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addBillMaterial } from '../../actions/billMaterials';
import PropTypes from 'prop-types';

export class BillMaterialForm extends Component{
    state = {
        bill: '',
        type: '',
        raw_material: '',
        product: '',
        quantity: '',
        unit: ''
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
      e.preventDefault();
      const { bill, type, raw_material, product, quantity, unit } = this.state;
      const billMaterials = { bill, type, raw_material, product, quantity, unit };
      this.props.addBillMaterial(billMaterials);
    };

    static propTypes = {
        addBillMaterial: PropTypes.func.isRequired,
    }


    render() {
        const { bill, type, raw_material, product, quantity, unit } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
              <h2>Add Bill Material</h2>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <label>Bill</label>
                  <input
                    className="form-control"
                    type="text"
                    name="bill"
                    onChange={this.onChange}
                    value={bill}
                  />
                </div>
                <div className="form-group">
                  <label>Type</label>
                  <input
                    className="form-control"
                    type="choice"
                    name="bill type"
                    onChange={this.onChange}
                    value={type}
                  />
                </div>
                <div className="form-group">
                  <label>Raw Material</label>
                  <input
                    className="form-control"
                    type="text"
                    name="raw material"
                    onChange={this.onChange}
                    value={raw_material}
                  />
                </div>
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
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
             </form>
         </div>
        );
    }
}


export default connect(null, { addBillMaterial })(BillMaterialForm);
