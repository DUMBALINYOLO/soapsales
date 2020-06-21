import axios from 'axios';
import { ADD_ORDERPAYMENT, GET_ORDERPAYMENTS, DELETE_ORDERPAYMENT } from './types';


// Get
export const getOrderpayments = () => dispatch => {
    axios.get('http://localhost:8000/api/inventory/orderpayments/')
        .then(res => {
            dispatch({
                type: GET_ORDERPAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteOrderpayment = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/inventory/orderpayments/${id}/`)
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
    axios.post('http://localhost:8000/api/inventory/orderpayments/', orderpayment)
        .then(res => {
            dispatch({
                type: ADD_ORDERPAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
