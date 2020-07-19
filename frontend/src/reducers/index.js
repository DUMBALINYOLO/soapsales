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
import processmachines from "./processmachines";
import billmaterials from "./billmaterials";
import processgroups from "./processgroups";
import bills from "./bills";
import billpayments from "./billpayments";
import wastereports from "./wastereports";
import processrates from "./processrates";
import processes from "./process";
import processproducts from "./processproducts.js";
import processedproductcomponents from "./processedproductcomponents.js";
import processedproducts from "./processedproducts.js";

import assets from "./assets";
import transactions from "./transactions";
import inventoryitems from  "./inventoryitems";
import equipmentcomponents from "./equipmentcomponents";

import productcomponents from "./productcomponents";
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
import suppliers from "./suppliers";
import orderitems from "./orderitems";
import categorychoices from './categorychoices';
import accounttypesclassificationchoices from './accounttypesclassificationchoices';

import receipts from "./receipts";
import invoicelines from "./invoicelines";
import warehouses from "./warehouses";
import warehouseitems from "./warehouseitems";
import stockadjustments from "./stockadjustments";
import inventorystocktakes from "./inventorystocktakes";
import storagemedias from "./storagemedia";
import inventoryreceipts from "./inventoryreceipts";

import accountingperiodchoices from "./accountingperiodchoices";
import assetsdepreciationmethodchoices from "./assetdepreciationchoices";
import assettypeschoices from "./assettypechoices";
import billmateriallinechoices from "./billmateriallinechoices";
import customerpaymentmethodchoices from "./customerpaymentchoices";
import employeegenderchoices from "./employeegenderchoices";
import equipmentcomponentconditionchoices from "./equipmentcomponentchoices";
import inventoryorderstatuschoices from "./inventoryorderchoices";
import inventorytypechoices from "./inventorytypechoices";
import invoicelinechoices from "./invoicelinechoices";
import invoicesalechoices from "./invoicesalechoices";
import journalentrytypechoices from "./journalentrychoices";
import manufacturingproducttypechoices from "./manufacturingproductchoices";
import processrateunittimechoices from "./processratechoices";
import productcomponentpricingchoices from "./productcomponentchoices";
import processedproductstockstatuschoices from "./processedproductstockstatuschoices";

export default combineReducers({
    // taxes,
    accountingperiodchoices,
    customerpaymentmethodchoices,
    employeegenderchoices,
    invoicesalechoices,
    processedproductstockstatuschoices,
    productcomponentpricingchoices,
    manufacturingproducttypechoices,
    processrateunittimechoices,
    journalentrytypechoices,
    inventorytypechoices,
    invoicelinechoices,
    equipmentcomponentconditionchoices,
    inventoryorderstatuschoices,
    assetsdepreciationmethodchoices,
    billmateriallinechoices,
    assettypeschoices,
    auth,
    accounts,
    processedproducts,
    processedproductcomponents,
    accountingConfig,
    currencies,
    customers,
    errors,
    bills,
    //equipmemtcomponents,
    receipts,
    invoicelines,
    warehouses,
    warehouseitems,
    stockadjustments,
    inventorystocktakes,
    storagemedias,
    inventoryreceipts,
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
    productcomponents,
    orders,
    invoices,
    unitmeasures,
    orderpayments,
    processmachines,
    processgroups,
    billmaterials,
    bills,
    wastereports,
    processrates,
    processes,
    assets,
    transactions,
    equipmentcomponents,
    payments,
    messages,
    suppliers,
    orderitems,
    categorychoices,
    accounttypesclassificationchoices,


});
