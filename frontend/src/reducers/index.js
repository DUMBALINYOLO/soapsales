import { combineReducers } from 'redux';
// import taxes from './taxes';
import auth from './auth';
import currencies from './currencies';
import errors from './errors';
import bookkeepers from './bookkeepers';
import accounttypes from './accounttypes';
import accounts from './accounts';
import salesreps from "./salesreps";
import journals from "./journals"
import invoices from "./invoices";
import products from "./products";
import processMachines from "./processMachines";
import billmaterials from "./billmaterials";
import processgroups from "./processgroups";
import bills from "./bills";
import billpayments from "./billpayments";
import wastereports from "./wasteReports";
import processrates from "./processrates";
import processes from "./process";
import processedproducts from "./processedproducts.js";
import assets from "./assets";
import transactions from "./transactions";
import inventoryitems from  "./inventoryitems";
import equipmentcomponents from "./equipmentcomponents";

import processproducts from "./processproducts";
import productionorders from "./productionorders";
import productlines from "./productlines";
import accountingConfig from "./accountingConfig";
import debitnotes from "./debitnotes";
import orders from "./orders";
import orderpayments from "./orderpayments";
import inventorycontrollers from "./inventorycontrollers";
import unitmeasures from "./unitmeasures";
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
    salesreps,
    bookkeepers,
    processproducts,
    pricinggroup,
    accounttypes,
    inventorycontrollers,
    inventorycategory,
    debitnotes,
    journals,
    creditnotes,
    products,
    productionorders,
    productlines,
    processproducts,
    orders,
    invoices,
    unitmeasures,
    orderpayments,
    processMachines,
    processgroups,
    billmaterials,
    bills,
    wastereports,
    processrates,
    processes,
    assets,
    transactions,
    payments,
    messages,

});
