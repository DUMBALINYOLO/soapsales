import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getUnitmeasures, deleteUnitmeasure } from '..//../actions/unitmeasure';


class Unitmeasure extends Component {
    static propTypes = {
        unitmeasures : PropTypes.array.isRequired,
        getUnitmeasures: PropTypes.func.isRequired,
        deleteUnitmeasure: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getUnitmeasures();
    }

	render(){
		return (
			<Fragment>
                <h1>Unit Of Measure</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EVAL STRING</th>
                        <th>IS DELIVERED</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.unitmeasures.map(unitmeasure =>(
                            <tr key={unitmeasure.id}>
                                <td>{ unitmeasure.id }</td>
                                <td>{ unitmeasure.name }</td>
                                <td>{ unitmeasure.eval_string }</td>
                                <td>{ unitmeasure.is_derived }</td>
                                <td><button onClick={this.props.deleteUnitmeasure.bind(this, unitmeasure.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
			</Fragment>
		);
	}
}

const mapStateToProps = state =>({
    unitmeasures: state.unitmeasures.unitmeasures
})

export default connect(mapStateToProps, {getUnitmeasures, deleteUnitmeasure} ) (Unitmeasure);
