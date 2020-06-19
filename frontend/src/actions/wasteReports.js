import axios from 'axios';
import { GET_WASTEREPORTS, DELETE_WASTEREPORT, ADD_WASTEREPORT } from './types';


// Get
export const getWasteReports = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/waste-generation-reports/')
        .then(res => {
            dispatch({
                type: GET_WASTEREPORTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteWasteReport = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/waste-generation-reports/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_WASTEREPORT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addWasteReport = (waste) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/waste-generation-reports/', waste)
        .then(res => {
            dispatch({
                type: ADD_WASTEREPORT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
