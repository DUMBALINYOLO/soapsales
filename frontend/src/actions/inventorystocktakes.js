import axios from 'axios';
import { ADD_INVENTORY_STOCK_TAKE, GET_INVENTORY_STOCK_TAKES, GET_INVENTORY_STOCK_TAKE, DELETE_INVENTORY_STOCK_TAKE } from '../types/inventorystocktakeTypes';
import { inventorystocktakeURL } from '../constants';


// Get
export const getInventorystocktakes = () => dispatch =>{
    axios.get(inventorystocktakeURL)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_STOCK_TAKES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventorystocktake = (id) => dispatch => {
    axios.delete(inventorystocktakeURL, id)
        .then(res => {
            dispatch({
                type: DELETE_INVENTORY_STOCK_TAKE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addInventorystocktake = inventorystocktake => dispatch => {
    axios.post(inventorystocktakeURL, inventorystocktake)
        .then(res => {
            dispatch({
                type: ADD_INVENTORY_STOCK_TAKE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventorystocktake = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/inventorystocktakes/${id}`)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_STOCK_TAKE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
