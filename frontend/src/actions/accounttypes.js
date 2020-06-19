import axios from 'axios';
import { ADD_ACCOUNT_TYPE, GET_ACCOUNT_TYPES, DELETE_ACCOUNT_TYPE } from './types';


// Get Taxes
export const getAccountTypes = () => dispatch => {
    axios.get('http://localhost:8000/api/accounting/accounttypes/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete Taxes

export const deleteAccountType = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/accounttypes/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_ACCOUNT_TYPE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add Taxes
// Get Taxes
export const addAccountType = accounttype => dispatch => {
    axios.post('http://localhost:8000/api/accounting/accounttypes/', accounttype)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNT_TYPE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}