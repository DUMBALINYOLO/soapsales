import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getSalesrep } from '..//../actions/salesrep';





class SalesrepDetail extends Component {

	static propTypes = {
        getSalesrep: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getSalesrep(this.props.match.params.id);
    }

	render() {
		const { salesrep } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Sales Rep Details</h1>
	            	<h1>ID: { salesrep.id } </h1>
                    <h1>EMPLOYEE: { salesrep.employee } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    salesrep: state.salesreps.salesrep
})

export default connect(mapStateToProps, {getSalesrep} ) (SalesrepDetail);
