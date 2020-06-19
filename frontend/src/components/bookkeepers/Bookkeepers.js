import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBookkeepers, deleteBookkeeper } from '..//../actions/bookkeepers';


class Bookkeepers extends Component {
    static propTypes = {
        bookkeepers : PropTypes.array.isRequired,
        getBookkeepers: PropTypes.func.isRequired,
        deleteBookkeeper: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getBookkeepers();
    }

    render(){
        return (
            <Fragment>
                <h1>BOOKKEEPERS</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>EMPLOYEE</th>
                        <th>CAN_CREATE_JOURNALS</th>
                        <th>CAN_CREATE_ORDERS_AND_INVOICES</th>
                        <th>CAN_RECORD_EXPENSES</th>
                        <th>CAN_RECORD_ASSETS</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.bookkeepers.map(bookkeeper =>(
                            <tr key={bookkeeper.id}>
                                <td>{ bookkeeper.id }</td>
                                <td>{ bookkeeper.employee }</td>
                                <td>{ bookkeeper.can_create_journals }</td>
                                <td>{ bookkeeper.can_create_orders_and_invoices }</td>
                                <td>{ bookkeeper.can_record_expenses}</td>
                                <td>{ bookkeeper.can_record_assets}</td>
                                <td><button onClick={this.props.deleteBookkeeper.bind(this, bookkeeper.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    bookkeepers: state.bookkeepers.bookkeepers
})

export default connect(mapStateToProps, {getBookkeepers, deleteBookkeeper} ) (Bookkeepers);
