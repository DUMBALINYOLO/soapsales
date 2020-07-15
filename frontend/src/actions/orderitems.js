import axios from 'axios';
import { GET_ORDER_ITEMS } from './types';
import { orderItemsURL } from '../constants';
import { tokenConfig } from "./auth";
import {GET_ERRORS} from "./types"


export const getOrderItems = () => dispatch => {
    axios.get(orderItemsURL)
        .then(res => {
            dispatch({
                type: GET_ORDER_ITEMS,
                payload: res.data
            });
        }).catch(err => console.log(err))
}









