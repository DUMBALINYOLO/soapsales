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
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Journal Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ journal.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					CREATOR: <span className="text-uppercase">{ journal.creator }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					TRANSACTIONS: <span className="text-uppercase">{ journal.transactions }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					RECEIPTS: <span className="text-uppercase">{ journal.receipts }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ENTRY TYPE: <span className="text-uppercase">{ journal.entry_type }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					IS APPROVED: <span className="text-uppercase">{ journal.is_approved }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DATE CREATED: <span className="text-uppercase">{ journal.date_created }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					DATE: <span className="text-uppercase">{ journal.date }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					MEMO: <span className="text-uppercase">{ journal.memo }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					DESCRIPTION :</p>
					<p className="text-muted lead">{ journal.description }</p>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    journal: state.journals.journal
})

export default connect(mapStateToProps, {getJournal} ) (JournalDetail);
