import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBillMaterial } from '..//../actions/billmaterials';





class BillMaterialDetail extends Component {

	static propTypes = {
        getBillMaterial: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getBillMaterial(this.props.match.params.id);
    }

	render() {
		const { billmaterial } = this.props;


        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Bill Of Material Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ billmaterial.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Name: <span className="text-uppercase">{ billmaterial.name }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Bill Lines: <span className="text-uppercase">{ billmaterial.bill_lines }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					some info about the bill of material :</p>
					<p className="text-muted lead">{ billmaterial.description }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    billmaterial: state.billmaterials.billmaterial
})

export default connect(mapStateToProps, {getBillMaterial} ) (BillMaterialDetail);
