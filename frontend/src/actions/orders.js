import axios from 'axios';
import { ADD_ORDER, GET_ORDERS, DELETE_ORDER } from '../types/orderTypes';
import { ordersURL } from '../constants';


// Get
export const getOrders = () => dispatch => {
    axios.get(ordersURL)
        .then(res => {
            dispatch({
                type: GET_ORDERS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteOrder = (id) => dispatch => {
    axios.delete(ordersURL, id)
        .then(res => {
            dispatch({
                type: DELETE_ORDER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addOrder = order => dispatch => {
    axios.post(ordersURL, order)
        .then(res => {
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
