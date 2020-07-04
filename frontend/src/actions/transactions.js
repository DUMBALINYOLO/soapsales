import axios from 'axios';
import { GET_TRANSACTIONS, GET_TRANSACTION, DELETE_TRANSACTION } from '../types/transactionTypes';
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

export const getTransaction = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/transactions/${id}`)
        .then(res => {
            dispatch({
                type: GET_TRANSACTION,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
