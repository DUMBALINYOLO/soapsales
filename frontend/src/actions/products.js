import axios from 'axios';
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT, DETAIL_PRODUCT  } from "../types/productTypes";
import { productsURL } from '../constants';


// Get
export const getProducts = () => dispatch => {
    axios.get(productsURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Details

export const detailsProduct = (id) => dispatch => {
    axios.get(productsURL, id)
        .then(res => {
            dispatch({
                type: DETAIL_PRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProduct = (id) => dispatch => {
    axios.delete(productsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProduct = (product) => dispatch => {
    axios.post(productsURL, product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
