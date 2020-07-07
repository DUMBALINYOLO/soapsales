
const localhost = "http://127.0.0.1:8000"

const apiURL = "/api"

const endpoint = `${localhost}${apiURL}`

export const taxesURL = `${endpoint}/accounting/taxes/`
export const accountsURL = `${endpoint}/accounting/accounts/`
export const accountingConfigURL =`${endpoint}/accounting/accounting-configuration/`
export const accounttypesURL= `${endpoint}/accounting/accounttypes/`
export const assetsURL= `${endpoint}/accounting/assets/`
export const billmaterialURL= `${endpoint}/manufacture/bills-of-materials-line/`
export const billsURL= `${endpoint}/accounting/my-bills/`
export const bookkeepersURL= `${endpoint}/accounting/bookkeepers/`
export const creditnoteURL= `${endpoint}/sales/creditnote/`
export const currenciesURL= `${endpoint}/accounting/currencies/`
export const customersURL= `${endpoint}/sales/customers/`
export const debitnoteURL= `${endpoint}/inventory/debit-note/`
export const inventorycategoryURL= `${endpoint}/inventory/inventory-categories/`
export const inventorycontrollerURL= `${endpoint}/inventory/inventory-controllers/`
export const invoicesURL= `${endpoint}/sales/invoices/`
export const orderpaymentsURL= `${endpoint}/inventory/orderpayments/`
export const ordersURL= `${endpoint}/inventory/orders/`
export const paymentsURL= `${endpoint}/sales/payments/`
export const pricinggroupsURL= `${endpoint}/stock/pricing-groups/`
export const processURL= `${endpoint}/manufacture/process/`
export const processproductURL= `${endpoint}/stock/processed-product-components/`
export const processgroupURL= `${endpoint}/manufacture/process-machine-group/`
export const processmachineURL= `${endpoint}/manufacture/process-machines/`
export const processrateURL= `${endpoint}/manufacture/process-rates/`
export const productlineURL= `${endpoint}/sales/productlinecomponent/`
export const productsURL= `${endpoint}/manufacture/products/`
export const salesrepURL= `${endpoint}/sales/sales-reps/`
export const transactionURL= `${endpoint}/accounting/transactions/`
export const unitmeasureURL= `${endpoint}/inventory/unit-of-measure/`
export const suppliersURL= `${endpoint}/inventory/suppliers/`
export const wastereportURL= `${endpoint}/manufacture/waste-generation-reports/`

export const billpaymentsURL = `${endpoint}/accounting/bill-payments/`
export const journalURL = `${endpoint}/accounting/journal-entries/`
export const inventoryitemURL = `${endpoint}/inventory/inventoryitem/`
export const equipmentcomponentURL = `${endpoint}/inventory/equipment-components/`
export const productionorderURL = `${endpoint}/manufacture/production-orders/`
export const processproductsURL= `${endpoint}/manufacture/process-products/`
