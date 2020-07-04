import axios from 'axios';
import { GET_PRODUCTLINES, GET_PRODUCTLINE, DELETE_PRODUCTLINE, ADD_PRODUCTLINE } from '../types/productlineTypes';
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

export const getProductline = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/sales/productlinecomponent/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTLINE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
