import axios from 'axios';
import { ADD_UNITMEASURE, GET_UNITMEASURES, DELETE_UNITMEASURE } from './types';


// Get
export const getUnitmeasures = () => dispatch => {
    axios.get('http://localhost:8000/api/inventory/unit-of-measure/')
        .then(res => {
            dispatch({
                type: GET_UNITMEASURES ,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteUnitmeasure = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/inventory/unit-of-measure/${id}/`)
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
    axios.post('http://localhost:8000/api/inventory/unit-of-measure/', unitmeasure)
        .then(res => {
            dispatch({
                type: ADD_UNITMEASURE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
