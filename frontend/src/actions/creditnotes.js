import axios from 'axios';
import { ADD_CREDITNOTE, GET_CREDITNOTES, GET_CREDITNOTE, DELETE_CREDITNOTE } from '../types/creditnoteTypes';
import { creditnoteURL } from '../constants';


// Get
export const getCreditnotes = () => dispatch => {
    axios.get(creditnoteURL)
        .then(res => {
            dispatch({
                type: GET_CREDITNOTES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteCreditnote = (id) => dispatch => {
    axios.delete(creditnoteURL, id)
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
    axios.post(creditnoteURL, creditnote)
        .then(res => {
            dispatch({
                type: ADD_CREDITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCreditnote = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/creditnote/${id}`)
        .then(res => {
            dispatch({
                type: GET_CREDITNOTE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
