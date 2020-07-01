import axios from 'axios';
import { GET_PRODUCTIONORDERS, DELETE_PRODUCTIONORDER, ADD_PRODUCTIONORDER } from '../types/productionorderTypes';
import { productionorderURL } from '../constants';


// Get
export const getProductionorders = () => dispatch => {
    axios.get(productionorderURL)
        .then(res => {
            dispatch({
                type: GET_PRODUCTIONORDERS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProductionorder = (id) => dispatch => {
    axios.delete(productionorderURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PRODUCTIONORDER,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProductionorder = (productionorder) => dispatch => {
    axios.post(productionorderURL, productionorder)
        .then(res => {
            dispatch({
                type: ADD_PRODUCTIONORDER,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
