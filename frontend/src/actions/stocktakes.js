import axios from 'axios';
import {
    GET_STOCK_TAKES,
    DELETE_STOCK_TAKE,
    ADD_STOCK_TAKE,
    GET_STOCK_TAKE
 
} from "../types/stockTakesTypes";



import { GET_ERRORS } from './types';
import { stockTakesURL } from '../constants';

// Get
export const getStockTakes = () => dispatch => {
    axios.get(stockTakesURL)
        .then(res => {
            dispatch({
                type: GET_STOCK_TAKES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteStockTake = (id) => dispatch => {
    axios.delete(stockTakesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_STOCK_TAKE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addStockTake = (stocktake) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post(stockTakesURL, stocktake, config)
        .then(res => {
            dispatch({
                type: ADD_STOCK_TAKE,
                payload: res.data
            });
        }).catch(err =>{
            const errors = {
                msg: err.response.data,
                status: err.response.status

        }
        dispatch({
            type: GET_ERRORS,
            payload: errors
        });
    });
}




export const getStockTake = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/stocktakes/${id}`)
        .then(res => {
            dispatch({
                type: GET_STOCK_TAKE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
