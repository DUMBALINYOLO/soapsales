import axios from 'axios';
import { ADD_ACCOUNT, GET_ACCOUNTS, DELETE_ACCOUNT } from './types';


// Get Taxes
export const getAccounts = () => dispatch => {
    axios.get('http://localhost:8000/api/accounting/accounts/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete Taxes

export const deleteAccount = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/accounts/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_ACCOUNT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add Taxes
// Get Taxes
export const addAccount = account => dispatch => {
    axios.post('http://localhost:8000/api/accounting/accounts/', account)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}