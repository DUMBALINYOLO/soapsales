import axios from 'axios';
import { GET_PROCESSPRODUCTS, DELETE_PROCESSPRODUCT, ADD_PROCESSPRODUCT } from './types';


// Get
export const getProcessproducts = () => dispatch => {
    axios.get('http://localhost:8000/api/stock/processed-product-components/')
        .then(res => {
            dispatch({
                type: GET_PROCESSPRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessproduct = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/stock/processed-product-components/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSPRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessproduct = (processproduct) => dispatch => {
    axios.post('http://localhost:8000/api/stock/processed-products/', processproduct)
        .then(res => {
            dispatch({
                type: ADD_PROCESSPRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
