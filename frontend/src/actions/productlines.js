import axios from 'axios';
import { GET_PRODUCTLINES, DELETE_PRODUCTLINE, ADD_PRODUCTLINE } from './types';


// Get
export const getProductlines = () => dispatch => {
    axios.get('http://localhost:8000/api/sales/productlinecomponent/')
        .then(res => {
            dispatch({
                type: GET_PRODUCTLINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProductline = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/sales/productlinecomponent/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTLINE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProductline = (productline) => dispatch => {
    axios.post('http://localhost:8000/api/sales/productlinecomponent/', productline)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTLINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
