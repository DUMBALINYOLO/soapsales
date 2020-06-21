import axios from 'axios';
import { ADD_DEBITNOTE, GET_DEBITNOTES, DELETE_DEBITNOTE } from './types';


// Get
export const getDebitnotes = () => dispatch => {
    axios.get('http://localhost:8000/api/inventory/debit-note/')
        .then(res => {
            dispatch({
                type: GET_DEBITNOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteDebitnote = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/inventory/debit-note/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_DEBITNOTE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addDebitnote = debitnote => dispatch => {
    axios.post('http://localhost:8000/api/inventory/debit-note/', debitnote)
        .then(res => {
            dispatch({
                type: ADD_DEBITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
