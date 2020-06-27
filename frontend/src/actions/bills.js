import axios from 'axios';
import {
    GET_BILLS,
    ADD_BILL,
    DELETE_BILL,
} from "../types/billTypes";
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
    axios.post(billsURL, bill)
        .then(res => {
            dispatch({
                type: ADD_BILL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
