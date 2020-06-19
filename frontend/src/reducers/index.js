import { combineReducers } from 'redux';
import taxes from './taxes';
import currencies from './currencies';
import errors from './errors';
import bookkeepers from './bookkeepers';
import accounttypes from './accounttypes';
import accounts from './accounts';




export default combineReducers({
    taxes,
    errors,
    currencies,
    bookkeepers,
    accounttypes,
    accounts,

});
