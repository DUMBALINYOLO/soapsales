import axios from 'axios';
import { GET_PROCESSPRODUCTS, DELETE_PROCESSPRODUCT, ADD_PROCESSPRODUCT } from '../types/processproductsTypes';
import { processproductsURL } from '../constants';


// Get
export const getProcessproducts = () => dispatch => {
    axios.get(processproductsURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSPRODUCTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessproduct = (id) => dispatch => {
    axios.delete(processproductsURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSPRODUCT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessproduct = (processproduct) => dispatch => {
    axios.post(processproductsURL)
        .then(res => {
            dispatch({
                type: ADD_PROCESSPRODUCT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
