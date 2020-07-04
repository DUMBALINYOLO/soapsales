import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getInventorycategory } from '..//../actions/inventorycategory';





class InventorycategoryDetail extends Component {

	static propTypes = {
        getInventorycategory: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getInventorycategory(this.props.match.params.id);
    }

	render() {
		const { inventorycategory } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Inventory Category Details</h1>
	            	<h1>ID: { inventorycategory.id } </h1>
                    <h1>NAME: { inventorycategory.name } </h1>
                    <h1>PARENT: { inventorycategory.parent } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    inventorycategory: state.inventorycategories.inventorycategory
})

export default connect(mapStateToProps, {getInventorycategory} ) (InventorycategoryDetail);
