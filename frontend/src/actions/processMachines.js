import axios from 'axios';
import { GET_PROCESSMACHINES, DELETE_PROCESSMACHINE, ADD_PROCESSMACHINE } from './types';


// Get
export const getProcessMachines = () => dispatch => {
    axios.get('http://localhost:8000/api/manufacture/process-machines/')
        .then(res => {
            dispatch({
                type: GET_PROCESSMACHINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessMachine = (id) => dispatch => {
    axios.delete(`http://localhost:8000/api/manufacture/process-machines/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSMACHINE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessMachine = (processMachine) => dispatch => {
    axios.post('http://localhost:8000/api/manufacture/process-machines/', processMachine)
        .then(res => {
            dispatch({
                type: ADD_PROCESSMACHINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
