import axios from 'axios';
import { GET_TRANSACTIONS, DELETE_TRANSACTION } from './types';


// Get
export const getTransactions = () => dispatch => {
    axios.get('http://localhost:8000/api/accounting/transactions/')
        .then(res => {
            dispatch({
                type: GET_TRANSACTIONS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteTransaction = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/accounting/transactions/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_TRANSACTION,
                payload: id
            });
        }).catch(err => console.log(err))
}
