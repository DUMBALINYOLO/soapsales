import axios from 'axios';
import { ADD_BILLPAYMENT, GET_BILLPAYMENTS, DELETE_BILLPAYMENT } from '../types/billpaymentTypes';
import { billpaymentsURL } from '../constants';


// Get
export const getBillpayments = () => dispatch => {
    axios.get(billpaymentsURL)
        .then(res => {
            dispatch({
                type: GET_BILLPAYMENTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBillpayment = (id) => dispatch => {
    axios.delete(billpaymentsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_BILLPAYMENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addBillpayment = billpayment => dispatch => {
    axios.post(billpaymentsURL, billpayment)
        .then(res => {
            dispatch({
                type: ADD_BILLPAYMENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
