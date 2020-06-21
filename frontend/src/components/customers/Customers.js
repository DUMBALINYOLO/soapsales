import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCustomers, deleteCustomer } from '..//../actions/customers';


class Customers extends Component {
    static propTypes = {
        customers : PropTypes.array.isRequired,
        getCustomers: PropTypes.func.isRequired,
        deleteCustomer: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getCustomers();
    }

	render(){
		return (
			<Fragment>
                <h1>CUSTOMER</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>IS ORGANIZATION</th>
                        <th>BILLING ADDRESS</th>
                        <th>BANKING DETAILS</th>
                        <th>WEBSITE</th>
                        <th>BP NUMBER</th>
                        <th>EMAIL</th>
                        <th>PHONE</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.customers.map(customer =>(
                            <tr key={customer.id}>
                                <td>{ customer.id }</td>
                                <td>{ customer.is_organization }</td>
                                <td>{ customer.billing_address }</td>
                                <td>{ customer.banking_details }</td>
                                <td>{ customer.website }</td>
                                <td>{ customer.bp_number }</td>
                                <td>{ customer.email }</td>
                                <td>{ customer.phone }</td>
                                <td><button onClick={this.props.deleteCustomer.bind(this, customer.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    customers: state.customers.customers
})

export default connect(mapStateToProps, {getCustomers, deleteCustomer} ) (Customers);
