import axios from 'axios';
import { ADD_ACCOUNTINGCONFIG, GET_ACCOUNTINGCONFIG, DELETE_ACCOUNTINGCONFIG } from '../types/accountingconfigTypes';
import { accountingConfigURL } from '../constants';


// Get
export const getAccountingConfig = () => dispatch => {
    axios.get(accountingConfigURL)
        .then(res => {
            dispatch({
                type: GET_ACCOUNTINGCONFIG ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteAccountingConfig = (id) => dispatch => {
    axios.delete(accountingConfigURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ACCOUNTINGCONFIG,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addAccountingConfig = accountingConfig => dispatch => {
    axios.post(accountingConfigURL, accountingConfig)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNTINGCONFIG,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
