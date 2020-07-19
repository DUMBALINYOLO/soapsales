import axios from 'axios';
import { GET_PROCESSEDPRODUCTS, GET_PROCESSEDPRODUCT, DELETE_PROCESSEDPRODUCT, ADD_PROCESSEDPRODUCT } from '../types/processedproductsTypes';
import { processedproductURL } from '../constants';


// Get
export const getProcessedproducts = () => dispatch => {
    axios.get(processedproductURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSEDPRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessedproduct = (id) => dispatch => {
    axios.delete(processedproductURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSEDPRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessedproduct = (processedproduct) => dispatch => {
    axios.post(processedproductURL)
        .then(res => {
            dispatch({
                type: ADD_PROCESSEDPRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessedproduct = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/stock/processed-products/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROCESSEDPRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
