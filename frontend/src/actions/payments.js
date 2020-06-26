import axios from 'axios';
import { ADD_PAYMENT, GET_PAYMENTS, DELETE_PAYMENT } from '../types/paymentTypes';
import { paymentsURL } from '../constants';


// Get
export const getPayments = () => dispatch => {
    axios.get(paymentsURL)
        .then(res => {
            dispatch({
                type: GET_PAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deletePayment = (id) => dispatch => {
    axios.delete(paymentsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PAYMENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addPayment = payment => dispatch => {
    axios.post(paymentsURL, payment)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
