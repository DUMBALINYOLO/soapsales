import axios from 'axios';
import { ADD_CUSTOMER, GET_CUSTOMERS, GET_CUSTOMER, DELETE_CUSTOMER } from '../types/customerTypes';
import { customersURL } from '../constants';


// Get
export const getCustomers = () => dispatch => {
    axios.get(customersURL)
        .then(res => {
            dispatch({
                type: GET_CUSTOMERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteCustomer = (id) => dispatch => {
    axios.delete(customersURL, id)
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
    axios.post(customersURL, customer)
        .then(res => {
            dispatch({
                type: ADD_CUSTOMER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCustomer = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/customers/${id}`)
        .then(res => {
            dispatch({
                type: GET_CUSTOMER,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
