import axios from 'axios';
import { ADD_INVENTORYCONTROLLER, GET_INVENTORYCONTROLLERS, GET_INVENTORYCONTROLLER, DELETE_INVENTORYCONTROLLER } from '../types/inventorycontrollerTypes';
import { inventorycontrollerURL } from '../constants';


// Get
export const getInventorycontrollers = () => dispatch => {
    axios.get(inventorycontrollerURL)
        .then(res => {
            dispatch({
                type: GET_INVENTORYCONTROLLERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventorycontroller = (id) => dispatch => {
    axios.delete(inventorycontrollerURL, id)
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
    axios.post(inventorycontrollerURL, inventorycontroller)
        .then(res => {
            dispatch({
                type: ADD_INVENTORYCONTROLLER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventorycontroller = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/inventory-controllers/${id}`)
        .then(res => {
            dispatch({
                type: GET_INVENTORYCONTROLLER,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
