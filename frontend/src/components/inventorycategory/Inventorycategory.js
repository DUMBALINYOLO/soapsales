import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInventorycategories, deleteInventorycategory } from '..//../actions/inventorycategory';


class Inventorycategory extends Component {
    static propTypes = {
        inventorycategories : PropTypes.array.isRequired,
        getInventorycategories: PropTypes.func.isRequired,
        deleteInventorycategory: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getInventorycategories();
    }

    render(){
        return (
            <Fragment>
                <h1>INVENTORY CATEGORY</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>DESCRIPTION</th>
                        <th>PARENT</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.inventorycategories.map(inventorycategory =>(
                            <tr key={inventorycategory.id}>
                                <td>{ inventorycategory.id }</td>
                                <td>{ inventorycategory.name }</td>
                                <td>{ inventorycategory.description }</td>
                                <td>{ inventorycategory.parent }</td>
                                <td><button onClick={this.props.deleteInventorycategory.bind(this, inventorycategory.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    inventorycategories: state.inventorycategories.inventorycategories
})

export default connect(mapStateToProps, {getInventorycategories, deleteInventorycategory} ) (Inventorycategory);
