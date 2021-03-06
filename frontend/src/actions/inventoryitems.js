import axios from 'axios';
import { ADD_INVENTORYITEM, GET_INVENTORYITEMS, GET_INVENTORYITEM, DELETE_INVENTORYITEM } from '../types/inventoryitemTypes';
import { inventoryitemURL } from '../constants';


// Get
export const getInventoryitems = () => dispatch =>{
    axios.get(inventoryitemURL)
        .then(res => {
            dispatch({
                type: GET_INVENTORYITEMS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventoryitem = (id) => dispatch => {
    axios.delete(inventoryitemURL, id)
        .then(res => {
            dispatch({
                type: DELETE_INVENTORYITEM,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addInventoryitem = inventoryitem => dispatch => {
    axios.post(inventoryitemURL, inventoryitem)
        .then(res => {
            dispatch({
                type: ADD_INVENTORYITEM,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryitem = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/inventoryitem/${id}`)
        .then(res => {
            dispatch({
                type: GET_INVENTORYITEM,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
