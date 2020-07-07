import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {ProgressSpinner} from 'primereact/progressspinner';
import { getDebitnote } from '..//../actions/debitnotes';





class DebitnoteDetail extends Component {

	static propTypes = {
        getDebitnote: PropTypes.func.isRequired,

    };

    componentDidMount(){
        this.props.getDebitnote(this.props.match.params.id);
    }

	render() {
		const { debitnote } = this.props;

        return (
			<div className="container py-5">
				<div className="row justify-content-center">
					<div className="col-10 mx-auto text-center text-slanted text-blue my-5">
						<h1>Debit Note Details</h1>
					</div>
				</div>
				<div className="row">
				<div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ID: <span className="text-uppercase">{ debitnote.id }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					ORDER: <span className="text-uppercase">{ debitnote.order }</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					RETURNED ITEMS: <span className="text-uppercase">{debitnote.returned_items}</span>
					</h4>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					RETURNED TOTALS: <span className="text-uppercase">{ debitnote.returned_total }</span>
					</h4>
					<p className="text-capitalize font-weight-bold mt-3 mb-0">
					COMMENTS :</p>
					<p className="text-muted lead">{debitnote.comments }</p>
					<h4 className="text-title text-uppercase text-muted mt-3 mb-2">
					Date: <span className="text-uppercase">{debitnote.date}</span>
					</h4>
	            </div>
	            </div>
            </div>
        );
    }
}


const mapStateToProps = state =>({
    debitnote: state.debitnotes.debitnote
})

export default connect(mapStateToProps, {getDebitnote} ) (DebitnoteDetail);
