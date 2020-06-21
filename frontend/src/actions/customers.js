import axios from 'axios';
import { ADD_CUSTOMER, GET_CUSTOMERS, DELETE_CUSTOMER } from './types';


// Get
export const getCustomers = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/customers/')
        .then(res => {
            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteCustomer = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/customers/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_CUSTOMER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addCustomer = customer => dispatch => {
    axios.post('http://localhost:8000/api/sales/customers/', customer)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
