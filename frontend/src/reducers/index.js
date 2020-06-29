import { combineReducers } from 'redux';
// import taxes from './taxes';
import auth from './auth';
import currencies from './currencies';
import errors from './errors';
import bookkeepers from './bookkeepers';
import accounttypes from './accounttypes';
import accounts from './accounts';
import salesrep from "./salesrep";

import invoices from "./invoices";
import products from "./products";
import processMachines from "./processMachines";
import processGroups from "./processGroups";
import billMaterials from "./billMaterials";
import bills from "./bills";
import billpayments from "./billpayments";
import wasteReports from "./wasteReports";
import processRates from "./processRates";
import process from "./process";
import processproducts from "./processedproducts.js";
import assets from "./assets";
import transactions from "./transactions";
import inventoryitems from  "./inventoryitems";
import equipmentcomponents from "./equipmentcomponents";

import productlines from "./productlines";
import accountingConfig from "./accountingConfig";
import debitnotes from "./debitnotes";
import orders from "./orders";
import orderpayments from "./orderpayments";
import inventorycontrollers from "./inventorycontrollers";
import unitmeasure from "./unitmeasure";
import inventorycategory from "./inventorycategory";
import pricinggroup from "./pricinggroup";
import creditnotes from "./creditnotes";
import customers from "./customers";
import payments from "./payments";
import messages from "./messages";




export default combineReducers({
    // taxes,
    auth,
    accounts,
    accountingConfig,
    currencies,
    customers,
    errors,
    bills,
    //equipmemtcomponents,
    billpayments,
    inventoryitems,
    salesrep,
    bookkeepers,
    pricinggroup,
    accounttypes,
    inventorycontrollers,
    inventorycategory,
    debitnotes,
    creditnotes,
    products,
    productlines,
    processproducts,
    orders,
    invoices,
    unitmeasure,
    orderpayments,
    processMachines,
    processGroups,
    billMaterials,
    bills,
    wasteReports,
    processRates,
    process,
    assets,
    transactions,
    payments,
    messages,

});
