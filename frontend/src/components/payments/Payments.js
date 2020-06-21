import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPayments, deletePayment } from '..//../actions/payments';


class Payments extends Component {
    static propTypes = {
        payments : PropTypes.array.isRequired,
        getPayments: PropTypes.func.isRequired,
        deletePayment: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getPayments();
    }

    render(){
        return (
            <Fragment>
                <h1>Payment</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>DATE</th>
                        <th>AMOUNT</th>
                        <th>INVOICE</th>
                        <th>METHOD</th>
                        <th>SALES REP</th>
                        <th>COMMENTS</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.payments.map(payment =>(
                            <tr key={payment.id}>
                                <td>{ payment.id }</td>
                                 <td>{ payment.date }</td>
                                <td>{ payment.amount }</td>
                                <td>{ payment.invoice }</td>
                                <td>{ payment.method }</td>
                                <td>{ payment.sales_rep }</td>
                                <td>{ payment.comments }</td>
                                <td><button onClick={this.props.deletePayment.bind(this, payment.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    payments: state.payments.payments
})

export default connect(mapStateToProps, {getPayments, deletePayment} ) (Payments);
