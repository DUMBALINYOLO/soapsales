import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getBills, deleteBill } from "../../actions/bills.js";


class Bills extends Component {
    static propTypes = {
        bills : PropTypes.array.isRequired,
        getBills: PropTypes.func.isRequired,
        deleteBill: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getBills();
    }

	render(){
		return (
			<Fragment>
                <h1>Bill Materials</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Bill</th>
                        <th>Description</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.bills.map(bill =>(
                            <tr key={bill.id}>
                                <td>{ bill.id }</td>
                                <td>{ bill.name }</td>
                                <td>{bill.description}</td>
                                <td><button onClick={this.props.deleteBill.bind(this, bill.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    bills:state.bills.bills
})

export default connect(mapStateToProps, { getBills, deleteBill} ) (Bills);
