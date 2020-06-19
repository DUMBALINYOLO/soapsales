import axios from 'axios';
import { GET_PROCESSGROUPS, DELETE_PROCESSGROUP, ADD_PROCESSGROUP } from './types';


// Get
export const getProcessGroups = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/process-machine-group/')
        .then(res => {
            dispatch({
                type: GET_PROCESSGROUPS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessGroup = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/process-machine-group/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSGROUP,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessGroup = (processGroup) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/process-machine-group/', processGroup)
        .then(res => {
            dispatch({
                type: ADD_PROCESSGROUP,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
