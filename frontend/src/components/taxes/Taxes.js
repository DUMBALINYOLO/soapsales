import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table'
import { getTaxes, deleteTax } from '..//../actions/taxes';



class Taxes extends Component {
    static propTypes = {
        taxes : PropTypes.array.isRequired,
        getTaxes: PropTypes.func.isRequired,
        deleteTax: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getTaxes();
    }

	render(){
		return (
			<Fragment>
                <h1>TAXES</h1>
                <div className='thebuli'>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>RATE</th>
                            <th />
                        </thead>
                        <tbody>
                            { this.props.taxes.map(tax =>(
                                <tr key={tax.id}>
                                    <td>{ tax.id }</td>
                                    <td>{ tax.name }</td>
                                    <td>{ tax.rate }</td>
                                    <td><button onClick={this.props.deleteTax.bind(this, tax.id)} className="btn btn-danger btn-sm">Delete</button></td>
                                </tr>
                            )) }
                        </tbody>
                    </Table>
                </div>
                
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    taxes: state.taxes.taxes
})

export default connect(mapStateToProps, {getTaxes, deleteTax} ) (Taxes);
