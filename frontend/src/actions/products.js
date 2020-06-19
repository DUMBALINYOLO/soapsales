import axios from 'axios';
import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from './types';


// Get
export const getProducts = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/products/')
        .then(res => {
            dispatch({
                type: GET_PRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProduct = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/products/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProduct = (product) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/products/', product)
        .then(res => {
            dispatch({
                type: ADD_PRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
