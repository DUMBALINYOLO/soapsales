import axios from 'axios';
import { GET_PROCESSRATES, DELETE_PROCESSRATE, ADD_PROCESSRATE } from '../types/processrateTypes';
import { processrateURL } from '../constants';


// Get
export const getProcessRates = () => dispatch => {
    axios.get(processrateURL)
        .then(res => {
            dispatch({
                type: GET_PROCESSRATES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteProcessRate = (id) => dispatch => {
    axios.delete(processrateURL, id)
        .then(res => {
            dispatch({
                type: DELETE_PROCESSRATE,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
export const addProcessRate = (processRate) => dispatch => {
    axios.post(processrateURL, processRate)
        .then(res => {
            dispatch({
                type: ADD_PROCESSRATE,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
