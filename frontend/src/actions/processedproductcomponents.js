import axios from 'axios';
import { GET_PROCESSEDPRODUCTCOMPONENTS, GET_PROCESSEDPRODUCTCOMPONENT, DELETE_PROCESSEDPRODUCTCOMPONENT, ADD_PROCESSEDPRODUCTCOMPONENT } from '../types/processedproductcomponentTypes';
import { processedproductcomponentURL } from '../constants';


// Get
export const getProcessedproductcomponents = () => dispatch => {
    axios.get(processedproductcomponentURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSEDPRODUCTCOMPONENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessedproductcomponent = (id) => dispatch => {
    axios.delete(processedproductcomponentURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSEDPRODUCTCOMPONENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessedproductcomponent = (processedproductcomponent) => dispatch => {
    axios.post(processedproductcomponentURL)
        .then(res => {
            dispatch({
                type: ADD_PROCESSEDPRODUCTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessedproductcomponent = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/stock/processed-product-components/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROCESSEDPRODUCTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
