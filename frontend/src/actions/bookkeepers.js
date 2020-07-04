import axios from 'axios';
import { GET_BOOKKEEPERS, GET_BOOKKEEPER, DELETE_BOOKKEEPER, ADD_BOOKKEEPER} from '../types/bookkeeperTypes.js';
import { bookkeepersURL } from '../constants';


// Get
export const getBookkeepers = () => dispatch => {
    axios.get(bookkeepersURL)
        .then(res => {
            dispatch({
                type: GET_BOOKKEEPERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBookkeeper = (id) => dispatch => {
    axios.delete(bookkeepersURL, id)
        .then(res => {
            dispatch({
                type: DELETE_BOOKKEEPER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addBookkeeper = bookkeeper => dispatch => {
    axios.post(bookkeepersURL, bookkeeper)
        .then(res => {
            dispatch({
                type: ADD_BOOKKEEPER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBookkeeper = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/bookkeepers/${id}`)
        .then(res => {
            dispatch({
                type: GET_BOOKKEEPER,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
