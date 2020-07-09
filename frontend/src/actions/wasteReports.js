import axios from 'axios';
import { GET_WASTEREPORTS, GET_WASTEREPORT, DELETE_WASTEREPORT, ADD_WASTEREPORT } from '../types/wastereportTypes';
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

export const getWasteReport = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/manufacture/waste-generation-reports/${id}`)
        .then(res => {
            dispatch({
                type: GET_WASTEREPORT,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
