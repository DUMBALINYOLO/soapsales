import axios from 'axios';
import { GET_PRODUCTCOMPONENTS, GET_PRODUCTCOMPONENT, DELETE_PRODUCTCOMPONENT, ADD_PRODUCTCOMPONENT } from '../types/productcomponentTypes';
import { productcomponentURL } from '../constants';


// Get
export const getProductcomponents = () => dispatch => {
    axios.get(productcomponentURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCTCOMPONENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProductcomponent = (id) => dispatch => {
    axios.delete(productcomponentURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTCOMPONENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProductcomponent = (productcomponet) => dispatch => {
    axios.post(productcomponentURL)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProductcomponent = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/inventory/product-components/${id}`)
        .then(res => {
            dispatch({
                type: GET_PRODUCTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
