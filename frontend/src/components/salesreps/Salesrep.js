import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getSalesreps, deleteSalesrep } from "../../actions/salesrep";


class Salesrep extends Component {
    static propTypes = {
        salesreps : PropTypes.array.isRequired,
        getSalesreps: PropTypes.func.isRequired,
        deleteSalesrep: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getSalesreps();
    }

	render(){
		return (
			<Fragment>
                <h1>SALES REP</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>EMPLOYEE</th>
                        <th>CAN REVERSE INVOICES</th>
                        <th>CAN OFFER DISCOUNTS</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.salesreps.map(salesrep =>(
                            <tr key={salesrep.id}>
                                <td>{ salesrep.id }</td>
                                <td>{ salesrep.employee }</td>
                                <td>{ salesrep.can_reverse_invoices }</td>
                                <td>{salesrep.can_offer_discounts}</td>
                                <td><button onClick={this.props.deleteSalesrep.bind(this, salesrep.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    salesreps: state.salesreps.salesreps
})

export default connect(mapStateToProps, { getSalesreps, deleteSalesrep} ) (Salesrep);
