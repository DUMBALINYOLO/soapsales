import axios from 'axios';
import { ADD_EQUIPMENTCOMPONENT, GET_EQUIPMENTCOMPONENTS, DELETE_EQUIPMENTCOMPONENT } from '../types/equipmentcomponentTypes';
import { equipmentcomponentURL } from '../constants';


// Get
export const geEquipmentcomponents = () => dispatch => {
    axios.get(equipmentcomponentURL)
        .then(res => {
            dispatch({
                type: GET_EQUIPMENTCOMPONENTS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

//Delete

export const deleteEquipmentcomponent = (id) => dispatch => {
    axios.delete(equipmentcomponentURL, id)
        .then(res => {
            dispatch({
                type: DELETEEQUIPMENTCOMPONENT,
                payload: id
            });
        }).catch(err => console.log(err))
}


// Add
// Get
export const addEquipmentcomponent = equipmentcomponent => dispatch => {
    axios.post(equipmentcomponentURL, equipmentcomponent)
        .then(res => {
            dispatch({
                type: ADDEQUIPMENTCOMPONENT,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
