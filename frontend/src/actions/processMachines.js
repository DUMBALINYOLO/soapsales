import axios from 'axios';
import { GET_PROCESSMACHINES, GET_PROCESSMACHINE, DELETE_PROCESSMACHINE, ADD_PROCESSMACHINE } from '../types/processmachineTypes';
import { processmachineURL } from '../constants';


// Get
export const getProcessMachines = () => dispatch => {
    axios.get(processmachineURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSMACHINES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessMachine = (id) => dispatch => {
    axios.delete(processmachineURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSMACHINE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessMachine = (processmachine) => dispatch => {
    axios.post(processmachineURL, processmachine)
        .then(res => {
            dispatch({
                type: ADD_PROCESSMACHINE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessMachine = id => dispatch =>{
      axios.get(`http://127.0.0.1:8000/api/manufacture/process-machines/${id}`)
        .then(res => {
            dispatch({
                type: GET_PROCESSMACHINE,
                payload: res.data
            });
        }).catch(err => console.log(err))

}
