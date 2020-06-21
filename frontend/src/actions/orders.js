import axios from 'axios';
import { ADD_ORDER, GET_ORDERS, DELETE_ORDER } from './types';


// Get
export const getOrders = () => dispatch => {
    axios.get('http://localhost:8000/api/inventory/orders/')
        .then(res => {
            dispatch({
                type: GET_ORDERS ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteOrder = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/inventory/orders/${id}/`)
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
    axios.post('http://localhost:8000/api/inventory/orders/', order)
        .then(res => {
            dispatch({
                type: ADD_ORDER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
