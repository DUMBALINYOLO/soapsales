import axios from 'axios';
import { ADD_PAYMENT, GET_PAYMENTS, DELETE_PAYMENT } from './types';


// Get
export const getPayments = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/payments/')
        .then(res => {
            dispatch({
                type: GET_PAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deletePayment = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/payments/${id}/`)
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
    axios.post('http://localhost:8000/api/sales/payments/', payment)
        .then(res => {
            dispatch({
                type: ADD_PAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
