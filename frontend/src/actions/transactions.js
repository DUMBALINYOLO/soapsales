import axios from 'axios';
import { GET_TRANSACTIONS, DELETE_TRANSACTION } from '../types/transactionTypes';
import { transactionURL } from '../constants';


// Get
export const getTransactions = () => dispatch => {
    axios.get(transactionURL)
        .then(res => {
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteTransaction = (id) => dispatch => {
    axios.delete(transactionURL, id)
        .then(res => {
            dispatch({
                type: DELETE_TRANSACTION,
                payload: id
            });
        }).catch(err => console.log(err))
}
