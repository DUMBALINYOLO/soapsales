import axios from 'axios';
import { ADD_ACCOUNT_TYPE, GET_ACCOUNT_TYPES, GET_ACCOUNT_TYPE, DELETE_ACCOUNT_TYPE } from '../types/accounttypeTypes';
import { accounttypesURL } from '../constants';


// Get
export const getAccountTypes = () => dispatch => {
    axios.get(accounttypesURL)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteAccountType = (id) => dispatch => {
    axios.delete(accounttypesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ACCOUNT_TYPE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addAccountType = accounttype => dispatch => {
    axios.post(accounttypesURL, accounttype)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNT_TYPE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountType = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/accounttypes/${id}`)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
