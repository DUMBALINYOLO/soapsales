import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getOrders, deleteOrder } from '..//../actions/orders';


class Orders extends Component {
    static propTypes = {
        orders : PropTypes.array.isRequired,
        getOrders: PropTypes.func.isRequired,
        deleteOrder: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getOrders();
    }

    render(){
        return (
            <Fragment>
                <h1>Orders</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>STATUS</th>
                        <th>SUPPLIER</th>
                        <th>TRACKING NUMBER</th>
                        <th>RECEIVED TO DATE</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.orders.map(order =>(
                            <tr key={order.id}>
                                <td>{ order.id }</td>
                                 <td>{ order.status }</td>
                                <td>{ order.supplier }</td>
                                <td>{ order.tracking_number }</td>
                                <td>{ order.received_to_date }</td>
                                <td><button onClick={this.props.deleteOrder.bind(this, order.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    orders: state.orders.orders
})

export default connect(mapStateToProps, {getOrders, deleteOrder} ) (Orders);
