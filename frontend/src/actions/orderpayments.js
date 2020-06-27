import axios from 'axios';
import { ADD_ORDERPAYMENT, GET_ORDERPAYMENTS, DELETE_ORDERPAYMENT } from '../types/orderpaymentTypes';
import { orderpaymentsURL } from '../constants';


// Get
export const getOrderpayments = () => dispatch => {
    axios.get(orderpaymentsURL)
        .then(res => {
            dispatch({
                type: GET_ORDERPAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteOrderpayment = (id) => dispatch => {
    axios.delete(orderpaymentsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ORDERPAYMENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addOrderpayment = orderpayment => dispatch => {
    axios.post(orderpaymentsURL, orderpayment)
        .then(res => {
            dispatch({
                type: ADD_ORDERPAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
