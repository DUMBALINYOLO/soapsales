import axios from 'axios';
import {
    GET_BILLS,
    GET_BILL,
    ADD_BILL,
    DELETE_BILL,
} from "../types/billTypes";
import { GET_ERRORS } from './types';
import { billsURL } from '../constants';

// Get
export const getBills = () => dispatch => {
    axios.get(billsURL)
        .then(res => {
            dispatch({
                type: GET_BILLS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBill = (id) => dispatch => {
    axios.delete(billsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_BILL,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addBill = (bill) => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    axios.post(billsURL, bill, config)
        .then(res => {
            dispatch({
                type: ADD_BILL,
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




export const getBill = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/bills/${id}`)
        .then(res => {
            dispatch({
                type: GET_BILL,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
