import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getJournal } from '..//../actions/journals';





class JournalDetail extends Component {

	static propTypes = {
        getJournal: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getJournal(this.props.match.params.id);
    }

	render() {
		const { journal } = this.props;

        return (
        	<Fragment>
	            <div>
	            	<h1 style={{color: "white"}}>Journal Details</h1>
	            	<h1>ID: { journal.id } </h1>
                    <h1>CREATOR: { journal.creator } </h1>
                    <h1>TRANSACTIONS: { journal.transactions } </h1>
                    <h1>RECEIPTS: { journal.receipts } </h1>
                    <h1>ENTRY TYPE: { journal.entry_type } </h1>
                    <h1>IS APPROVED: { journal.is_approved } </h1>
                    <h1>DATE CREATED: { journal.date_created } </h1>
                    <h1>DATE: { journal.date } </h1>
                    <h1>MEMO: { journal.memo } </h1>
	            </div>
            </Fragment>
        );
    }
}


const mapStateToProps = state =>({
    journal: state.journals.journal
})

export default connect(mapStateToProps, {getJournal} ) (JournalDetail);
