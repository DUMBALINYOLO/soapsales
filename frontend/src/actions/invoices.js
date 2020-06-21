import axios from 'axios';
import { ADD_INVOICE, GET_INVOICES, DELETE_INVOICE } from './types';


// Get
export const getInvoices = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/invoices/')
        .then(res => {
            dispatch({
                type: GET_INVOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInvoice = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/invoices/${id}/`)
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
    axios.post('http://localhost:8000/api/sales/invoices/', invoice)
        .then(res => {
            dispatch({
                type: ADD_INVOICE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
