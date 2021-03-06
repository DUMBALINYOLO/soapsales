import axios from 'axios';
import { ADD_SALESREP, GET_SALESREPS, GET_SALESREP, DELETE_SALESREP } from '../types/salesrepTypes';
import { salesrepURL } from '../constants';


// Get
export const getSalesreps = () => dispatch => {
    axios.get(salesrepURL)
        .then(res => {
            dispatch({
                type: GET_SALESREPS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteSalesrep = (id) => dispatch => {
    axios.delete(salesrepURL, id)
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
    axios.post(salesrepURL, salesrep)
        .then(res => {
            dispatch({
                type: ADD_SALESREP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getSalesrep = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/sales-reps/${id}`)
        .then(res => {
            dispatch({
                type: GET_SALESREP,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
