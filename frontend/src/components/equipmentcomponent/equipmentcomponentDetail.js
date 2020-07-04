import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getEquipmentComponent } from '..//../actions/equipmentcomponents';





class EquipmentComponentDetail extends Component {

	static propTypes = {
        getEquipmentComponent: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getEquipmentComponent(this.props.match.params.id);
    }

	render() {
		const { equipmentcomponent } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Equipment Component Details</h1>
	            	<h1>ID: { equipmentcomponent.id } </h1>
                    <h1>NAME: { equipmentcomponent.name } </h1>
                    <h1>CONDITION: { equipmentcomponent.condition } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    equipmentcomponent: state.equipmentcomponents.equipmentcomponent
})

export default connect(mapStateToProps, {getEquipmentComponent} ) (EquipmentComponentDetail);
