import axios from 'axios';
import {
    GET_JOURNALS,
    GET_JOURNAL,
    ADD_JOURNAL,
    DELETE_JOURNAL,
} from "../types/journalTypes";
import { journalURL } from '../constants';

// Get
export const getJournals = () => dispatch => {
    axios.get(journalURL)
        .then(res => {
            dispatch({
                type: GET_JOURNALS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteJournal = (id) => dispatch => {
    axios.delete(journalURL, id)
        .then(res => {
            dispatch({
                type: DELETE_JOURNAL,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addJournal = (journal) => dispatch => {
    axios.post(journalURL, journal)
        .then(res => {
            dispatch({
                type: ADD_JOURNAL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getJournal = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/journal-entries/${id}`)
        .then(res => {
            dispatch({
                type: GET_JOURNAL,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
