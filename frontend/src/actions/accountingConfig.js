import axios from 'axios';
import { ADD_ACCOUNTINGCONFIG, GET_ACCOUNTINGCONFIG, DELETE_ACCOUNTINGCONFIG } from './types';


// Get
export const getAccountingConfig = () => dispatch => {
    axios.get('http://localhost:8000/api/accounting/accounting-configuration/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNTINGCONFIG ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteAccountingConfig = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/accounting-configuration/${id}/`)
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
    axios.post('http://localhost:8000/api/accounting/accounting-configuration/', accountingConfig)
        .then(res => {
            dispatch({
                type: ADD_ACCOUNTINGCONFIG,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
