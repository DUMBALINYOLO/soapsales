import axios from 'axios';
import { GET_BOOKKEEPERS, DELETE_BOOKKEEPER, ADD_BOOKKEEPER} from './types';


// Get Taxes
export const getBookkeepers = () => dispatch => {
    axios.get('http://localhost:8000/api/accounting/bookkeepers/')
        .then(res => {
            dispatch({
                type: GET_BOOKKEEPERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete Taxes

export const deleteBookkeeper = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/bookkeepers/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BOOKKEEPER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add Taxes
// Get Taxes
export const addBookkeeper = bookkeeper => dispatch => {
    axios.post('http://localhost:8000/api/accounting/bookkeepers/', bookkeeper)
        .then(res => {
            dispatch({
                type: ADD_BOOKKEEPER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}