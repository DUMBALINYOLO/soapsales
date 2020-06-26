import axios from 'axios';
import { GET_CURRENCIES, DELETE_CURRENCY, ADD_CURRENCY} from '../types/currencyTypes';
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
