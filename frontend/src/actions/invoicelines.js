import axios from 'axios';
import { GET_INVOICE_LINES } from '../types/invoicelineTypes';
import { invoicelineURL } from '../constants';


export const getInvoicelines = () => dispatch => {
    axios.get(invoicelineURL)
        .then(res => {
            dispatch({
                type: GET_INVOICE_LINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
