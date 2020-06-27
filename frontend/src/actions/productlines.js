import axios from 'axios';
import { GET_PRODUCTLINES, DELETE_PRODUCTLINE, ADD_PRODUCTLINE } from '../types/productlineTypes';
import { productlineURL } from '../constants';


// Get
export const getProductlines = () => dispatch => {
    axios.get(productlineURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCTLINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProductline = (id) => dispatch => {
    axios.delete(productlineURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTLINE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProductline = (productline) => dispatch => {
    axios.post(productlineURL, productline)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTLINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
