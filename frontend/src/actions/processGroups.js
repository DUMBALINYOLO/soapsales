import axios from 'axios';
import { GET_PROCESSGROUPS, GET_PROCESSGROUP, DELETE_PROCESSGROUP, ADD_PROCESSGROUP } from '../types/processgroupTypes';
import { processgroupURL } from '../constants';


// Get
export const getProcessGroups = () => dispatch => {
    axios.get(processgroupURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessGroup = (id) => dispatch => {
    axios.delete(processgroupURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSGROUP,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessGroup = (processGroup) => dispatch => {
    axios.post(processgroupURL, processGroup)
        .then(res => {
            dispatch({
                type: ADD_PROCESSGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessGroup = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/manufacture/process-machine-group/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROCESSGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
