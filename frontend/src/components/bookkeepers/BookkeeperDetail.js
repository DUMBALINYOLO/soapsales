import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBookkeeper } from '..//../actions/bookkeepers';





class BookkeeperDetail extends Component {

	static propTypes = {
        getBookkeeper: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getBookkeeper(this.props.match.params.id);
    }

	render() {
		const { bookkeeper } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Bookkeeper Details</h1>
	            	<h1>ID: { bookkeeper.id } </h1>
                    <h1>EMPLOYEE: { bookkeeper.employee } </h1>
                    <h1>CAN CREATE JOURNALS: { bookkeeper.can_create_journals } </h1>
                    <h1>CAN CREATE ORDERS AND INVOICES: { bookkeeper.can_create_orders_and_invoices } </h1>
                    <h1>CAN RECORD EXPENSES: { bookkeeper.can_record_expenses } </h1>
                    <h1>CAN RECORD ASSETS: { bookkeeper.can_record_assets } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    bookkeeper: state.bookkeepers.bookkeeper
})

export default connect(mapStateToProps, {getBookkeeper} ) (BookkeeperDetail);
