import axios from 'axios';
import { ADD_SUPPLIER, GET_SUPPLIERS, DELETE_SUPPLIER } from '../types/supplierTypes';
import { suppliersURL } from '../constants';


// Get
export const getSuppliers = () => dispatch => {
    axios.get(suppliersURL)
        .then(res => {
            dispatch({
                type: GET_SUPPLIERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteSupplier = (id) => dispatch => {
    axios.delete(suppliersURL, id)
        .then(res => {
            dispatch({
                type: DELETE_SUPPLIER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addSupplier = supplier => dispatch => {
    axios.post(suppliersURL, supplier)
        .then(res => {
            dispatch({
                type: ADD_SUPPLIER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
