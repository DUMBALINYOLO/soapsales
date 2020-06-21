import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getPricinggroups, deletePricinggroup } from "../../actions/pricinggroup";


class Pricinggroup extends Component {
    static propTypes = {
        pricinggroups : PropTypes.array.isRequired,
        getPricinggroups: PropTypes.func.isRequired,
        deletePricinggroup: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getPricinggroups();
    }

	render(){
		return (
			<Fragment>
                <h1>PRICING GROUP</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>GROUP PRICING</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.pricinggroups.map(pricinggroup =>(
                            <tr key={pricinggroup.id}>
                                <td>{ pricinggroup.id }</td>
                                <td>{ pricinggroup.name }</td>
                                <td>{pricinggroup.group_pricing_unit_sales_price}</td>
                                <td><button onClick={this.props.deletePricinggroup.bind(this, pricinggroup.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    pricinggroups: state.pricinggroups.pricinggroups
})

export default connect(mapStateToProps, { getPricinggroups, deletePricinggroup} ) (Pricinggroup);
