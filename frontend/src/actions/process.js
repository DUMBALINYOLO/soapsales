import axios from 'axios';
import { GET_PROCESS, DELETE_PROCESS, ADD_PROCESS } from '../types/processTypes';
import { processURL } from '../constants';


// Get
export const getProcess = () => dispatch => {
    axios.get(processURL)
        .then(res => {
            dispatch({
                type: GET_PROCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcess = (id) => dispatch => {
    axios.delete(processURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESS,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcess = (process) => dispatch => {
    axios.post(processURL, process)
        .then(res => {
            dispatch({
                type: ADD_PROCESS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
