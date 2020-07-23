import axios from 'axios';
import { ADD_INVOICE, GET_INVOICES, GET_INVOICE, DELETE_INVOICE } from '../types/invoiceTypes';
import { invoicesURL } from '../constants';
import {createMessage} from "./messages";
import {GET_ERRORS} from "./types"

// Get
export const getInvoices = () => dispatch => {
    axios.get(invoicesURL)
        .then(res => {
            dispatch({
                type: GET_INVOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete


export const deleteInvoice = (id) => dispatch => {
    axios.delete(invoicesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_INVOICE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addInvoice = invoice => dispatch => {
    axios.post(invoicesURL, invoice)
        .then(res => {
            dispatch({
                type: ADD_INVOICE,
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

export const getInvoice = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/invoices/${id}`)
        .then(res => {
            dispatch({
                type: GET_INVOICE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
