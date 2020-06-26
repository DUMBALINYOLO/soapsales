import axios from 'axios';
import { GET_BOOKKEEPERS, DELETE_BOOKKEEPER, ADD_BOOKKEEPER} from '../types/bookkeeperTypes.js';
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
