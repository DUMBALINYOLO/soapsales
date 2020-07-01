import axios from 'axios';
import { 
    ADD_ACCOUNT, 
    GET_ACCOUNTS, 
    DELETE_ACCOUNT,
    GET_ACCOUNT

} from '../types/accountTypes';
import { accountsURL } from '../constants';


// Get
export const getAccounts = () => dispatch => {
    axios.get(accountsURL)
        .then(res => {
            dispatch({
                type: GET_ACCOUNTS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteAccount = (id) => dispatch => {
    axios.delete(accountsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ACCOUNT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addAccount = account => dispatch => {
    axios.post(accountsURL, account)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getAccount = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/accounts/${id}`)
        .then(res => {
            dispatch({
                type: GET_ACCOUNT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}











