import axios from 'axios';
import { ADD_SALESREP, GET_SALESREPS, DELETE_SALESREP } from './types';


// Get
export const getSalesreps = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/sales-reps/')
        .then(res => {
            dispatch({
                type: GET_SALESREPS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteSalesrep = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/sales-reps/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_SALESREP,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addSalesrep = salesrep => dispatch => {
    axios.post('http://localhost:8000/api/sales/sales-reps/', salesrep)
        .then(res => {
            dispatch({
                type: ADD_SALESREP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
