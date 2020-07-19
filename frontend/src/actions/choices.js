import axios from 'axios';
import {
    GET_ACCOUNT_TYPE_CATEGORY_CHOICES,
    GET_ACCOUNT_TYPE_CLASSIFICATION_CHOICES,
    GET_ASSET_DEPRECIATION_METHOD_CHOICES,
    GET_ASSET_TYPE_CHOICES,
    GET_ACCOUNTING_PERIOD_CHOICES,
    GET_JOURNAL_ENTRY_TYPE_CHOICES,
    GET_EMPLOYEE_GENDER_CHOICES,
    GET_INVENTORY_TYPE_CHOICES,
    GET_PRODUCT_COMPONENT_PRICING_CHOICES,
    GET_EQUIPMENT_COMPONENT_CONDITION_CHOICES,
    GET_INVENTORY_ORDER_STATUS_CHOICES,
    GET_INVOICE_SALE_CHOICES,
    GET_INVOICE_LINE_CHOICES,
    GET_CUSTOMER_PAYMENT_METHOD_CHOICES,
    GET_PROCESS_RATE_UNIT_TIME_CHOICES,
    GET_MANUFACTURING_PRODUCT_TYPE_CHOICES,
    GET_BILL_OF_MATERIAL_LINE_CHOICES,
    GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,

} from './types';
import {
	accountTypesCategoryChoicesURL,
	accountTypesClassificationChoicesURL,
} from '../constants';


export const getAccountTypesCategoryChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/account-types-category-choices/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE_CATEGORY_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessedProductsStockStatusChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/processed-products-stock-status-choices/')
        .then(res => {
            dispatch({
                type: GET_PROCESSED_PRODUCTS_STOCK_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountTypesClassificationChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/account-types-classification-choices/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNT_TYPE_CLASSIFICATION_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAssetDepriciationMethodChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/assets-depriciation-method-choices/')
        .then(res => {
            dispatch({
                type: GET_ASSET_DEPRECIATION_METHOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAssetTypeChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/asset-types-choices/')
        .then(res => {
            dispatch({
                type: GET_ASSET_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getAccountingPeriodChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/accounting-periods-choices/')
        .then(res => {
            dispatch({
                type: GET_ACCOUNTING_PERIOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}


export const getJournalEntryTypeChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/journal-entry-types-choices/')
        .then(res => {
            dispatch({
                type: GET_JOURNAL_ENTRY_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEmployeesGenderChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/employees-gender-choices/')
        .then(res => {
            dispatch({
                type: GET_EMPLOYEE_GENDER_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryTypeChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/inventory-types-choices/')
        .then(res => {
            dispatch({
                type: GET_INVENTORY_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProductComponentPricingChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/product-component-pricing-choices/')
        .then(res => {
            dispatch({
                type: GET_PRODUCT_COMPONENT_PRICING_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getEquipmentComponentConditionChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/equipment-component-condition-choices/')
        .then(res => {
            dispatch({
                type: GET_EQUIPMENT_COMPONENT_CONDITION_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInventoryOrderStatusChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/inventory-order-status-choices/')
        .then(res => {
            dispatch({
                type: GET_INVENTORY_ORDER_STATUS_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceSaleChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/invoice-sales-choices/')
        .then(res => {
            dispatch({
                type: GET_INVOICE_SALE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getInvoiceLineChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/invoice-line-choices/')
        .then(res => {
            dispatch({
                type: GET_INVOICE_LINE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getCustomerPaymentMethodChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/customer-payment-methods-choices/')
        .then(res => {
            dispatch({
                type: GET_CUSTOMER_PAYMENT_METHOD_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getProcessRateUnitTimeChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/process-rate-unit-time-choices/')
        .then(res => {
            dispatch({
                type: GET_PROCESS_RATE_UNIT_TIME_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getManufacturingProductTypeChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/manufacturing-product-types-choices/')
        .then(res => {
            dispatch({
                type: GET_MANUFACTURING_PRODUCT_TYPE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}

export const getBillOfMaterialLineChoices = () => dispatch => {
    axios.get('http://127.0.0.1:8000/api/config/bill-of-materials-line-choices/')
        .then(res => {
            dispatch({
                type: GET_BILL_OF_MATERIAL_LINE_CHOICES,
                payload: res.data
            });
        }).catch(err => console.log(err))
}
