import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrderpayments, deleteOrderpayment } from '..//../actions/orderpayments';


class Orderpayments extends Component {
    static propTypes = {
        orderpayments : PropTypes.array.isRequired,
        getOrderpayments: PropTypes.func.isRequired,
        deleteOrderpayment: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getOrderpayments();
    }

    render(){
        return (
            <Fragment>
                <h1>Order Payment</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>AMMOUNT</th>
                        <th>ORDER</th>
                        <th>COMMENTS</th>
                        <th>ENTRY</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.orderpayments.map(orderpayment =>(
                            <tr key={orderpayment.id}>
                                <td>{ orderpayment.id }</td>
                                 <td>{ orderpayment.date }</td>
                                <td>{ orderpayment.ammount }</td>
                                <td>{ orderpayment.order }</td>
                                <td>{ orderpayment.comments }</td>
                                <td>{ orderpayment.entry }</td>
                                <td><button onClick={this.props.deleteOrderpayment.bind(this, orderpayment.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    orderpayments: state.orderpayments.orderpayments
})

export default connect(mapStateToProps, {getOrderpayments, deleteOrderpayment} ) (Orderpayments);
