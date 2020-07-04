import axios from 'axios';
import { ADD_DEBITNOTE, GET_DEBITNOTES, GET_DEBITNOTE, DELETE_DEBITNOTE } from '../types/debitnoteTypes';
import { debitnoteURL } from '../constants';


// Get
export const getDebitnotes = () => dispatch => {
    axios.get(debitnoteURL)
        .then(res => {
            dispatch({
                type: GET_DEBITNOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteDebitnote = (id) => dispatch => {
    axios.delete(debitnoteURL, id)
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
    axios.post(debitnoteURL, debitnote)
        .then(res => {
            dispatch({
                type: ADD_DEBITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getDebitnote = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/debit-note/${id}`)
        .then(res => {
            dispatch({
                type: GET_DEBITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
