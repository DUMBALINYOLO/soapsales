import axios from 'axios';
import { ADD_INVENTORYCATEGORY, GET_INVENTORYCATEGORIES, DELETE_INVENTORYCATEGORY } from '../types/inventorycategoryTypes';
import { inventorycategoryURL } from '../constants';


// Get
export const getInventorycategories = () => dispatch => {
    axios.get(inventorycategoryURL)
        .then(res => {
            dispatch({
                type: GET_INVENTORYCATEGORIES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteInventorycategory = (id) => dispatch => {
    axios.delete(inventorycategoryURL, id)
        .then(res => {
            dispatch({
                type: DELETE_INVENTORYCATEGORY,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addInventorycategory = inventorycategory => dispatch => {
    axios.post(inventorycategoryURL, inventorycategory)
        .then(res => {
            dispatch({
                type: ADD_INVENTORYCATEGORY,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
