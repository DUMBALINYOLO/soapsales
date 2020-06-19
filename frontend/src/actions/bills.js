import axios from 'axios';
import { GET_BILLS, DELETE_BILL, ADD_BILL } from './types';


// Get
export const getBills = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/bills-of-materials/')
        .then(res => {
            dispatch({
                type: GET_BILLS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteBill = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/bills-of-materials/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_BILL,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addBill = (bill) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/bills-of-materials/', bill)
        .then(res => {
            dispatch({
                type: ADD_BILL,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
