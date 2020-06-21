import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCreditnotes, deleteCreditnote } from '..//../actions/creditnotes';


class Creditnotes extends Component {
    static propTypes = {
        creditnotes : PropTypes.array.isRequired,
        getCreditnotes: PropTypes.func.isRequired,
        deleteCreditnote: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getCreditnotes();
    }

    render(){
        return (
            <Fragment>
                <h1>Credit Notes</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>INVOICE</th>
                        <th>COMMENTS</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.creditnotes.map(creditnote =>(
                            <tr key={creditnote.id}>
                                <td>{ creditnote.id }</td>
                                 <td>{ creditnote.date }</td>
                                <td>{ creditnote.invoice }</td>
                                <td>{ creditnote.comments }</td>
                                <td><button onClick={this.props.deleteCreditnote.bind(this, creditnote.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    creitnotes: state.creditnotes.creditnotes
})

export default connect(mapStateToProps, {getCreditnotes, deleteCreditnote} ) (Creditnotes);
