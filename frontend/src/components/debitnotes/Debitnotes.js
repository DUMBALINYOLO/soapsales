import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getDebitnotes, deleteDebitnote } from '..//../actions/debitnotes';


class Debitnotes extends Component {
    static propTypes = {
        debitnotes : PropTypes.array.isRequired,
        getDebitnotes: PropTypes.func.isRequired,
        deleteDebitnote: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getDebitnotes();
    }

    render(){
        return (
            <Fragment>
                <h1>Debit Notes</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>ORDER</th>
                        <th>COMMENTS</th>
                        <th>ENTRY</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.debitnotes.map(debitnote =>(
                            <tr key={debitnote.id}>
                                <td>{ debitnote.id }</td>
                                 <td>{ debitnote.date }</td>
                                <td>{ debitnote.order }</td>
                                <td>{ debitnote.comments }</td>
                                <td>{ debitnote.entry }</td>
                                <td><button onClick={this.props.deleteDebitnote.bind(this, debitnote.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    debitnotes: state.debitnotes.debitnotes
})

export default connect(mapStateToProps, {getDebitnotes, deleteDebitnote} ) (Debitnotes);
