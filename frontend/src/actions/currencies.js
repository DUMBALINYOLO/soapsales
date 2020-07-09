import axios from 'axios';
import { GET_CURRENCIES, GET_CURRENCY, DELETE_CURRENCY, ADD_CURRENCY} from '../types/currencyTypes';
import { currenciesURL } from '../constants';


// Get Taxes
export const getCurrencies = () => dispatch => {
    axios.get(currenciesURL)
        .then(res => {
            dispatch({
                type: GET_CURRENCIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete Taxes

export const deleteCurrency = (id) => dispatch => {
    axios.delete(currenciesURL, id)
        .then(res => {
            dispatch({
                type: DELETE_CURRENCY,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add Taxes
// Get Taxes
export const addCurrency = currency => dispatch => {
    axios.post(currenciesURL, currency)
        .then(res => {
            dispatch({
                type: ADD_CURRENCY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCurrency = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/accounting/currencies/${id}`)
        .then(res => {
            dispatch({
                type: GET_CURRENCY,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
