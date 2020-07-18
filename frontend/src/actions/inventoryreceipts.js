import axios from 'axios';
import { GET_INVENTORY_RECEIPTS, GET_INVENTORY_RECEIPT, DELETE_INVENTORY_RECEIPT } from '../types/inventoryreceiptTypes';
import { inventoryreceiptURL } from '../constants';


// Get
export const getInventoryreceipts = () => dispatch => {
    axios.get(inventoryreceiptURL)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_RECEIPTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventoryreceipt = (id) => dispatch => {
    axios.delete(inventoryreceiptURL, id)
        .then(res => {
            dispatch({
                type: DELETE_INVENTORY_RECEIPT,
                payload: id
            });
        }).catch(err => console.log(err))
}

export const getInventoryreceipt = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/inventoryreceipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_INVENTORY_RECEIPT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
