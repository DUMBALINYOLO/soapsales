import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getInventorycontrollers, deleteInventorycontroller } from '..//../actions/inventorycontrollers';


class Inventorycontroller extends Component {
    static propTypes = {
        inventorycontrollers : PropTypes.array.isRequired,
        getInventorycontrollers: PropTypes.func.isRequired,
        deleteInventorycontroller: PropTypes.func.isRequired,
    };

    componentDidMount(){
        this.props.getInventorycontrollers();
    }

    render(){
        return (
            <Fragment>
                <h1>Inventory Controller</h1>
                <table className="table table-striped">
                    <thead>
                        <th>ID</th>
                        <th>Employee</th>
                        <th>Can authorize Equipment Requisitions</th>
                        <th>can_authorize_consumables_requisitions</th>
                        <th />
                    </thead>
                    <tbody>
                        { this.props.inventorycontrollers.map(inventorycontroller =>(
                            <tr key={inventorycontroller.id}>
                                <td>{ inventorycontroller.id }</td>
                                 <td>{ inventorycontroller.employee }</td>
                                <td>{ inventorycontroller.can_authorize_equipment_requisitions }</td>
                                <td>{ inventorycontroller.can_authorize_consumables_requisitions }</td>

                                <td><button onClick={this.props.deleteInventorycontroller.bind(this, inventorycontroller.id)} className="btn btn-danger btn-sm">Delete</button></td>
                            </tr>
                        )) }
                    </tbody>
                </table>
            </Fragment>
        );
    }
}

const mapStateToProps = state =>({
    inventorycontrollers: state.inventorycontrollers.inventorycontrollers
})

export default connect(mapStateToProps, {getInventorycontrollers, deleteInventorycontroller} ) (Inventorycontroller);
