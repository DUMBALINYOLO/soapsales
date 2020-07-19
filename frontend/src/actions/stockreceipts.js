import axios from 'axios';
import { 
    ADD_STOCK_RECEIPT, 
    GET_STOCK_RECEIPTS, 
    GET_STOCK_RECEIPT, 
    DELETE_STOCK_RECEIPT 
} from '../types/stockReceiptsTypes';
import { stockReceiptsURL } from '../constants';


// Get
export const getStockReceipts = () => dispatch => {
    axios.get(stockReceiptsURL)
        .then(res => {
            dispatch({
                type: GET_STOCK_RECEIPTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteStockReceipt = (id) => dispatch => {
    axios.delete(stockReceiptsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_STOCK_RECEIPT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addStockReceipt = stockreceipt => dispatch => {
    axios.post(stockReceiptsURL, stockreceipt)
        .then(res => {
            dispatch({
                type: ADD_STOCK_RECEIPT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStockReceipt = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/stockreceipts/${id}`)
        .then(res => {
            dispatch({
                type: GET_STOCK_RECEIPT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
