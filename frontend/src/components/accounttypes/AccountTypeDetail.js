import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getAccountType } from '..//../actions/accounttypes';





class AccountTypeDetail extends Component {

	static propTypes = {
        getAccountType: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getAccountType(this.props.match.params.id);
    }

	render() {
		const { accounttype } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Account Types</h1>
	            	<h1>ID: { accounttype.id } </h1>
                    <h1>CATEGORY: { accounttype.category } </h1>
                    <h1>CLASSIFICATION: { accounttype.classification } </h1>
                    <h1>NAME: { accounttype.name } </h1>
                    <h1>ORDER: { accounttype.order } </h1>
                    <h1>STARTING NUMBER: { accounttype.starting_number } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    accounttype: state.accounttypes.accounttype
})

export default connect(mapStateToProps, {getAccountType} ) (AccountTypeDetail);
