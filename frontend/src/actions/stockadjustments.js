import axios from 'axios';
import { ADD_STOCK_ADJUSTMENT, GET_STOCK_ADJUSTMENTS, GET_STOCK_ADJUSTMENT, DELETE_STOCK_ADJUSTMENT } from '../types/stockadjustmentTypes';
import { stockadjustmentURL } from '../constants';


// Get
export const getStockadjustments = () => dispatch =>{
    axios.get(stockadjustmentURL)
        .then(res => {
            dispatch({
                type: GET_STOCK_ADJUSTMENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteStockadjustment = (id) => dispatch => {
    axios.delete(stockadjustmentURL, id)
        .then(res => {
            dispatch({
                type: DELETE_STOCK_ADJUSTMENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addStockadjustment = stockadjustment => dispatch => {
    axios.post(stockadjustmentURL, stockadjustment)
        .then(res => {
            dispatch({
                type: ADD_STOCK_ADJUSTMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getStockadjustment = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/stockadjustments/${id}`)
        .then(res => {
            dispatch({
                type: GET_STOCK_ADJUSTMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
