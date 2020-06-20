import { combineReducers } from 'redux';
import taxes from './taxes';
<<<<<<< Updated upstream
import currencies from './currencies';
import errors from './errors';
import bookkeepers from './bookkeepers';
import accounttypes from './accounttypes';
import accounts from './accounts';
import products from "./products";
import processMachines from "./processMachines";
import processGroups from "./processGroups";
import billMaterials from "./billMaterials";
import bills from "./billsOfMaterials";
import wasteReports from "./wasteReports";
import processRates from "./processRates";
import process from "./process";
import assets from "./assets";
import transactions from "./transactions";

export default combineReducers({
    taxes,
    products,
    processMachines,
    processGroups,
    billMaterials,
    bills,
    wasteReports,
    processRates,
    process,
    assets,
    transactions,
    taxes,
    errors,
    currencies,
    bookkeepers,
    accounttypes,
    accounts,

});
