import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getBill } from '..//../actions/bills';





class BillDetail extends Component {

	static propTypes = {
        getBill: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getBill(this.props.match.params.id);
    }

	render() {
		const { bill } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Bill Details</h1>
	            	<h1>ID: { bill.id } </h1>
                    <h1>DATE: { bill.date } </h1>
                    <h1>VENDOR: { bill.vendor } </h1>
                    <h1>REFERENCE: { bill.reference } </h1>
                    <h1>DUE: { bill.due } </h1>
                    <h1>MEMO: { bill.memo } </h1>
                    <h1>ENTRY: { bill.entry } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    bill: state.bills.bill
})

export default connect(mapStateToProps, {getBill} ) (BillDetail);
