import axios from 'axios';
import { GET_WASTEREPORTS, DELETE_WASTEREPORT, ADD_WASTEREPORT } from '../types/wastereportTypes';
import { wastereportURL } from '../constants';


// Get
export const getWasteReports = () => dispatch => {
    axios.get(wastereportURL)
        .then(res => {
            dispatch({
                type: GET_WASTEREPORTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteWasteReport = (id) => dispatch => {
    axios.delete(wastereportURL, id)
        .then(res => {
            dispatch({
                type: DELETE_WASTEREPORT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addWasteReport = (waste) => dispatch => {
    axios.post(wastereportURL, waste)
        .then(res => {
            dispatch({
                type: ADD_WASTEREPORT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
