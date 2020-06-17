import { combineReducers } from 'redux';
import taxes from './taxes';
import errors from './errors';



export default combineReducers({
    taxes,
    errors

});
