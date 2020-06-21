import axios from 'axios';
import { ADD_CREDITNOTE, GET_CREDITNOTES, DELETE_CREDITNOTE } from './types';


// Get
export const getCreditnotes = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/creditnote/')
        .then(res => {
            dispatch({
                type: GET_CREDITNOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteCreditnote = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/creditnote/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_CREDITNOTE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addCreditnote = creditnote => dispatch => {
    axios.post('http://localhost:8000/api/sales/creditnote/', creditnote)
        .then(res => {
            dispatch({
                type: ADD_CREDITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
