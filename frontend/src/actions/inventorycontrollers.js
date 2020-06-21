import axios from 'axios';
import { ADD_INVENTORYCONTROLLER, GET_INVENTORYCONTROLLERS, DELETE_INVENTORYCONTROLLER } from './types';


// Get
export const getInventorycontrollers = () => dispatch => {
    axios.get('http://localhost:8000/api/inventory/inventory-controllers/')
        .then(res => {
            dispatch({
                type: GET_INVENTORYCONTROLLERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventorycontroller = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/inventory/inventory-controllers/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_INVENTORYCONTROLLER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addInventorycontroller = inventorycontroller => dispatch => {
    axios.post('http://localhost:8000/api/inventory/inventory-controllers/', inventorycontroller)
        .then(res => {
            dispatch({
                type: ADD_INVENTORYCONTROLLER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
