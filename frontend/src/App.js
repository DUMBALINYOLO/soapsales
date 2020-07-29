import React, {Component, Fragment} from 'react';
import {HashRouter as Router} from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import './App.css';
import Home from './components/Home/Home';
import Default from './components/Home/Default';

import Alerts from './components/alerts/Alert';
import Content from "./dashboard/Content";

import Taxes from './components/taxes/Taxes';
import TaxForm from './components/taxes/TaxForm';
//import TaxDetail from './components/taxes/TaxDetail';


import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';
import CurrencyDetail from './components/currencies/CurrencyDetail';
import UpdateCurrency from './components/currencies/CurrencyUpdate';

import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';
import BookkeeperDetail from './components/bookkeepers/BookkeeperDetail';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';
import AccountTypeDetail from './components/accounttypes/AccountTypeDetail';

import Form from './components/accounts/testForm';


import Orders from './components/orders/Orders';
import OrderForm from './components/orders/OrderForm';
import OrderDetail from './components/orders/OrderDetail';

import OrderItemsList from './components/orders/OrderItemsList';

import Invoice from './components/invoices/Invoices';
import InvoiceForm from './components/invoices/InvoiceForm';
import InvoiceDetail from './components/invoices/InvoiceDetail';

import QuotationForm from './components/quotations/QuotationForm';

import Salesrep from './components/salesreps/Salesrep';
import SalesrepForm from './components/salesreps/SalesrepForm';
import SalesrepDetail from './components/salesreps/SalesrepDetail';

import Customers from './components/customers/Customers';
import CustomerForm from './components/customers/CustomerForm';
import CustomerDetail from './components/customers/CustomerDetail';

import Pricinggroup from './components/pricinggroups/Pricinggroup';
import PricinggroupForm from './components/pricinggroups/PricinggroupForm';
import PricinggroupDetail from './components/pricinggroups/PricinggroupDetail';

import Unitmeasure from './components/unitmeasure/Unitmeasure';
import UnitmeasureForm from './components/unitmeasure/UnitmeasureForm';
import UnitmeasureDetail from './components/unitmeasure/UnitmeasureDetail';

import Orderpayments from './components/orderpayments/Orderpayments';
import OrderPaymentForm  from './components/orderpayments/OrderpaymentForm';
import OrderpaymentDetail from './components/orderpayments/OrderpaymentDetail';

import Payments from './components/payments/Payments';
import PaymentForm from './components/payments/PaymentForm';
import PaymentDetail from './components/payments/PaymentDetail';

import Debitnotes from './components/debitnotes/Debitnotes';
import DebitnotesForm from './components/debitnotes/DebitnoteForm';
import DebitnoteDetail from './components/debitnotes/DebitnoteDetail';

import Creditnotes from './components/creditnotes/Creditnotes';
import CreditnotesForm from './components/creditnotes/CreditnoteForm';
import CreditnoteDetail from './components/creditnotes/CreditnoteDetail';

import AccountingConfig from './components/accountingConfig/AccountingConfig';
import AccountingConfigForm from './components/accountingConfig/AccountingConfigForm';
import AccountConfigDetail from "./components/accountingConfig/AccountingDetail";


import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';
import AccountDetail from './components/accounts/AccountDetail';


import Products from "./components/Products/Products";
import ProductForm from './components/Products/ProductForm';
import ProductDetail from "./components/Products/ProductDetail";

import ProcessMachines from "./components/machines/processMachines";
import ProcessMachineDetail from "./components/machines/processMachineDetail";
import ProcessMachineForm from "./components/machines/processMachineForm";


import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';
import ProcessGroupDetail from "./components/machinegroup/processGroupDetail";

import BillMaterials from "./components/billmaterials/billMaterials";
import BillMaterialDetail from "./components/billmaterials/billMaterialDetail";
import BillOfMaterialsForm from "./components/billmaterials/BillOfMaterialsForm";


import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';
import WasteReportDetail from "./components/wastes/wasteReportDetail";

import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/ProcessRateForm';
import ProcessRateDetail from "./components/processrate/processRateDetail";

import { loadUser } from "./actions/auth";

import Process from "./components/Process/process";
import ProcessForm from './components/Process/ProcessForm';
import ProcessDetail from "./components/Process/processDetail";

import Assets from "./components/assets/Assets";
import AssetForm from './components/assets/AssetForm';
import AssetDetail from "./components/assets/AssetDetail";

import Transactions from "./components/transactions/Transactions";
import TransactionDetail from "./components/transactions/TransactionDetail";


import Inventorycontroller from './components/inventorycontrollers/Inventorycontroller';
import InventorycontrollerForm from './components/inventorycontrollers/InventorycontrollerForm';
import InventorycontrollerDetail from './components/inventorycontrollers/InventorycontrollerDetail';

import Inventorycategory from './components/inventorycategory/Inventorycategory';
import InventorycategoryForm from './components/inventorycategory/InventorycategoryForm';
import InventorycategoryDetail from './components/inventorycategory/InventorycategoryDetail';

import Productcomponents from "./components/productcomponents/Productcomponents";
import ProductcomponentForm from './components/productcomponents/ProductcomponentForm';
import ProductcomponentDetail from "./components/productcomponents/ProductcomponentDetail";

import Mali from './components/table/Mali';
import Thebuli from './components/table/Thebuli';
import MainTab from './components/configurations/MainConfig';
// import Sidebar from "./components/sidebar/Sidebar";
import Register from "./components/employees/Register";
import Login from "./components/employees/Login";
import PrivateRoute from "./components/common/PrivateRoute";

import Journals from "./components/journals/Journals";
import JournalDetail from "./components/journals/JournalDetail";
import JournalForm from "./components/journals/JournalForm";

import BillPayments from "./components/billpayment/Billpayments";
import BillPaymentForm from "./components/billpayment/BillpaymentForm";
import BillPaymentDetail from "./components/billpayment/BillpaymentDetail";

import Bills from "./components/bills/Bills";
import BillDetail from "./components/bills/BillDetail";
import BillForm from './components/bills/BillForm'
import DetailTest from "./components/bills/DetailTest";


import EquipmentComponents from "./components/equipmentcomponent/equipmentcomponents";
import EquipmentComponentDetail from "./components/equipmentcomponent/equipmentcomponentDetail";
import EquipmentComponentForm from "./components/equipmentcomponent/equipmentcomponentForm";


import Inventoryitems from "./components/inventoryitem/Inventoryitems";
import InventoryitemForm from "./components/inventoryitem/InventoryitemForm";
import InventoryitemDetail from "./components/inventoryitem/InventoryitemDetail";

import Productionorders from "./components/productionorder/Productionorders";
import ProductionorderDetail from "./components/productionorder/ProductionorderDetail";
import ProductionorderForm from "./components/productionorder/ProductionorderForm";

import Processedproductcomponents from "./components/processedproductcomponent/Processedproductcomponent";
import ProcessedproductcomponentDetail from "./components/processedproductcomponent/ProcessedproductcomponentDetail";
import ProcessedproductcomponentForm from "./components/processedproductcomponent/ProcessedproductcomponentForm";

import Processproducts from "./components/processproducts/Processproducts";
import ProcessproductDetail from "./components/processproducts/ProcessproductDetail";
import ProcessproductForm from "./components/processproducts/ProcessproductForm";

import Processedproducts from "./components/processedproducts/Processedproducts";
import ProcessedproductForm from "./components/processedproducts/ProcessedproductsForm";
import ProcessedproductDetail from "./components/processedproducts/ProcessedproductsDetail";

import InvoiceExample from "./components/nestedforms/NestedForm";
import Dashboard from './dashboard/components/Dashboard';


import StockReceiptForm from './components/stockreceipts/StockReceiptForm';
import StockReceipts from './components/stockreceipts/StockReceipts';

import StockTakeForm from './components/stocktakes/StockTakeForm';


import SupplierForm from './components/suppliers/SupplierForm';
import Suppliers from './components/suppliers/Suppliers';


import Receipts from "./components/receipts/Receipts";

import Warehouses from "./components/warehouses/Warehouses";
import WarehouseForm from "./components/warehouses/WarehouseForm";


import WarehouseItems from "./components/warehouseitems/WarehouseItems";
import WarehouseItemForm from "./components/warehouseitems/WarehouseItemForm";

import StockAdjustments from "./components/stockreceipts/StockAdjustments";
import Storagemedia from "./components/storagemedia/Storagemedia";

import ProductLineComponentForm from './components/productLineComponents/ProductLineComponentForm';
import ProductLineComponents from './components/productLineComponents/ProductLineComponents';


//Alert Options
const alertOptions = {
	timeout: 30000,
	position: 'top center'
}

class App extends Component {
	// componentDidMount(){
	// 	store.dispatch(loadUser());
	// }


	render(){
		return (
			<Provider store={store}>
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						< Alerts />
						<Switch>
							<Route exact path='/' component={Home} />
							<Route exact path='/form' component={Form} />

							<Route exact path='/dashboard' component={Content} />
							<Route exact path='/dash-view' component={Dashboard} />
							<Route exact path='/test-form' component={InvoiceExample} />

							<Route exact path='/stockreceipts/create' component={StockReceiptForm} />
							<Route exact path='/stockreceipts' component={StockReceipts} />

							<Route exact path='/quotations/create' component={QuotationForm} />

							<Route exact path='/productlinecomponents' component={ProductLineComponents} />
							<Route exact path='/productlinecomponents/create' component={ProductLineComponentForm} />


							<Route exact path='/stocktakes/create' component={StockTakeForm} />

							<Route exact path='/suppliers' component={Suppliers} />
							<Route exact path='/suppliers/create' component={SupplierForm} />


							<Route exact path='/processmachines' component={ProcessMachines} />
							<Route exact path='/processmachines/create' component={ProcessMachineForm} />


							<Route exact path='/processmachinegroups' component={ProcessGroups} />
							<Route exact path='/processmachinegroups/create' component={ProcessGroupForm} />


							<Route exact path='/billofmaterials' component={BillMaterials} />
							<Route exact path='/billofmaterials/create' component={BillOfMaterialsForm} />
							<Route exact path='/billmaterial-detail/:id' component={BillMaterialDetail} />

							<Route exact path='/bills' component={Bills} />
							<Route exact path='/bills/create' component={BillForm} />
							<Route exact path='/bills/:id' component={BillDetail} />
							<Route exact path='/detail/:id' component={DetailTest} />


							<Route exact path='/receipts' component={Receipts} />

							<Route exact path='/warehouses' component={Warehouses} />
							<Route exact path='/warehouses/create' component={WarehouseForm} />

							<Route exact path='/warehouseitems' component={WarehouseItems} />
							<Route exact path='/warehouseitems/create' component={WarehouseItemForm} />

							<Route exact path='/orderitems' component={OrderItemsList} />

							<Route exact path='/stockadjustments' component={StockAdjustments} />

							<Route exact path='/storagemedia' component={Storagemedia} />


							<Route exact path='/billpayments' component={BillPayments} />
							<Route exact path='/billpayments/create' component={BillPaymentForm} />
							<Route exact path='/billpayment-detail/:id' component={BillPaymentDetail} />

							<Route exact path='/mali' component={Mali} />
							<Route exact path='/table' component={Thebuli} />

							<Route exact path='/journals' component={Journals} />
							<Route exact path='/journals/create' component={JournalForm} />

							<Route exact path='/tab' component={MainTab} />

							<Route exact path='/processrates' component={ProcessRates} />
							<Route exact path='/processrates/create' component={ProcessRateForm} />


							<Route exact path='/assets' component={Assets} />
							<Route exact path='/assets/create' component={AssetForm} />
							<Route exact path='/asset-detail/:id' component={AssetDetail} />

							<Route exact path='/productionorders' component={Productionorders} />
							<Route exact path='/productionorders/create' component={ProductionorderForm} />

							<Route exact path='/products' component={Products} />
							<Route exact path='/product-detail/:id' component={ProductDetail} />
							<Route exact path='/products/create' component={ProductForm} />

							<Route exact path='/wastereportgenerations' component={WasteReports} />
							<Route exact path='/wastereportgenerations/create' component={WasteReportForm} />
							<Route exact path='/waste-report-detail/:id' component={WasteReportDetail} />

							<Route exact path='/processes' component={Process} />
							<Route exact path='/processes/create' component={ProcessForm} />

							<Route exact path='/transactions' component={Transactions} />

							<Route exact path='/currencies' component={Currencies} />
							<Route exact path='/currencies/create' component={CurrencyForm} />
							<Route exact path='/currencies/edit/:id' component={UpdateCurrency} />
							<Route exact path='/currencies/:id' component={CurrencyDetail} />

							<Route exact path='/bookkeepers' component={Bookkeepers} />
							<Route exact path='/bookkeepers/create' component={BookkeeperForm} />

							<Route exact path='/accounttypes' component={AccountTypes} />
							<Route exact path='/accounttypes/create' component={AccountTypeForm} />
							<Route exact path='/accounttype-detail/:id' component={AccountTypeDetail} />

							<Route exact path='/accounts' component={Accounts} />
							<Route exact path='/account-detail/:id' component={AccountDetail} />
							<Route exact path='/accounts/create' component={AccountForm} />

							<Route exact path='/accountingConfig' component={AccountingConfig} />
							<Route exact path='/accountingConfig-form' component={AccountingConfigForm} />
							<Route exact path='/accountconfig-detail/:id' component={AccountConfigDetail} />

							<Route exact path='/debitnotes' component={Debitnotes} />
							<Route exact path='/debitnotes/create' component={DebitnotesForm} />


							<Route exact path='/creditnotes' component={Creditnotes} />
							<Route exact path='/creditnotes/create' component={CreditnotesForm} />
							<Route exact path='/creditnote-detail/:id' component={CreditnoteDetail} />

							<Route exact path='/orders' component={Orders} />
							<Route exact path='/orders/create' component={OrderForm} />

							<Route exact path='/orderpayments' component={Orderpayments} />
							<Route exact path='/orderpayments/create' component={OrderPaymentForm } />

							<Route exact path='/inventorycontrollers' component={Inventorycontroller} />
							<Route exact path='/inventorycontrollers/create' component={InventorycontrollerForm} />

							<Route exact path='/unitofmeasures' component={Unitmeasure} />
							<Route exact path='/unitofmeasures/create' component={UnitmeasureForm} />
							<Route exact path='/unitmeasure-detail/:id' component={UnitmeasureDetail} />

							<Route exact path='/inventorycategories' component={Inventorycategory} />
							<Route exact path='/inventorycategories/create' component={InventorycategoryForm} />

							<Route exact path='/inventoryitems' component={Inventoryitems} />
							<Route exact path='/inventoryitems/create' component={InventoryitemForm} />
							<Route exact path='/inventoryitem-detail/:id' component={InventoryitemDetail} />

							<Route exact path='/pricinggroups' component={Pricinggroup} />
							<Route exact path='/pricinggroups/create' component={PricinggroupForm} />

							<Route exact path='/customers' component={Customers} />
							<Route exact path='/customers/create' component={CustomerForm} />

							<Route exact path='/taxes' component={Taxes} />
							<Route exact path='/taxes/create' component={TaxForm} />

							<Route exact path='/payments' component={Payments} />
							<Route exact path='/payments/create' component={PaymentForm} />

							<Route exact path='/salesreps' component={Salesrep} />
							<Route exact path='/salesreps/create' component={SalesrepForm} />
							<Route exact path='/salesrep-detail/:id' component={SalesrepDetail} />

							<Route exact path='/invoices' component={Invoice} />
							<Route exact path='/invoices/create' component={InvoiceForm} />

							<Route exact path='/register' component={Register} />
							<Route exact path='/login' component={Login} />

							<Route exact path='/processedproductcomponents' component={Processedproductcomponents} />
							<Route exact path='/processedproductcomponent-detail/:id' component={ProcessedproductcomponentDetail} />
							<Route exact path='/processedproductcomponents/create' component={ProcessedproductcomponentForm} />

							<Route exact path='/productcomponents' component={Productcomponents} />
							<Route exact path='/productcomponents/create' component={ProductcomponentForm} />
							<Route exact path='/productcomponent-detail/:id' component={ProductcomponentDetail} />

							<Route exact path='/equipmentcomponents' component={EquipmentComponents} />
							<Route exact path='/equipmentcomponents/create' component={EquipmentComponentForm} />
							<Route exact path='/equipmentcomponent-detail/:id' component={EquipmentComponentDetail} />

							<Route exact path='/processproducts' component={Processproducts} />
							<Route exact path='/processproduct-detail/:id' component={ProcessproductDetail} />
							<Route exact path='/processproducts/create' component={ProcessproductForm} />

							<Route exact path='/processedproducts' component={Processedproducts} />
							<Route exact path='/processedproducts/create' component={ProcessedproductForm} />
							<Route exact path='/processedproduct-detail/:id' component={ProcessedproductDetail} />

							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
			</Provider>
		);
	}
}

export default App;
