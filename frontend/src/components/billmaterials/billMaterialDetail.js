import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBillMaterial } from '..//../actions/billMaterials';





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
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Bill Material Details</h1>
	            	<h1>ID: { billmaterial.id } </h1>
                    <h1>NAME: { billmaterial.name } </h1>
                    <h1>DESCRIPTION: { billmaterial.description } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    billmaterial: state.billmaterials.billmaterial
})

export default connect(mapStateToProps, {getBillMaterial} ) (BillMaterialDetail);
