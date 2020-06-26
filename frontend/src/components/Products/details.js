import React, { Component } from 'react';
import { connect } from 'react-redux';
import { detailsProduct } from '..//../actions/products';
import PropTypes from 'prop-types';

export class ProductDetails extends Component{
    state = {
        id: '',
        name: '',
        description: ''
    }

    render() {
        const { name, img, description } = this.state;
        return (
			<div className="container py-5">
				<div className="row">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>{name}</h1>
					</div>
				</div>
				<div className="row">
					<div className="col-10 mx-auto col-md-6 my-3">
						<img src="img" className="img-fluid" alt="..."/>
					</div>
					<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
						<h2>{name}</h2>
						<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
						made by: <span className="text-uppercase">Alms</span>
						</h4>
						<p className="text-capitalize font-weight-bold mt-3 mb-0">
						some additional info:</p>
						<p className="text-muted lead">{description}</p>
                        <h4 className="text-blue" style={{color: "lightseagreen"}}>Melcin fair &copy;{`${new Date().getFullYear()}`}</h4>
					</div>
				</div>
			</div>
        );
	}
}

export default connect(null, { detailsProduct })(ProductDetails);
