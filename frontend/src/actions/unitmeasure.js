import axios from 'axios';
import { ADD_UNITMEASURE, GET_UNITMEASURES, DELETE_UNITMEASURE } from '../types/unitmeasureTypes';
import { unitmeasureURL } from '../constants';


// Get
export const getUnitmeasures = () => dispatch => {
    axios.get(unitmeasureURL)
        .then(res => {
            dispatch({
                type: GET_UNITMEASURES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteUnitmeasure = (id) => dispatch => {
    axios.delete(unitmeasureURL, id)
        .then(res => {
            dispatch({
                type: DELETE_UNITMEASURE,
                payload: id
            });
        }).catch(err => console.log(err))
}



// Add
// Get
export const addUnitmeasure = unitmeasure => dispatch => {
    axios.post(unitmeasureURL, unitmeasure)
        .then(res => {
            dispatch({
                type: ADD_UNITMEASURE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
