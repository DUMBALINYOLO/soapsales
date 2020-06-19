import React, {Component, Fragment} from 'react';
import {Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Home/Navbar';
import Default from './components/Home/Default';
import BaseProductList from './components/Products/BaseProductList';
import ShoppingBasket from './components/Products/Basket';
import Taxes from './components/taxes/Taxes';
import TaxForm from './components/taxes/TaxForm';
<<<<<<< Updated upstream
import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';

import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';


import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';
=======
import Products from "./components/Products/products";
import ProductForm from './components/Products/productForm';
import ProcessMachines from "./components/machines/processMachines";
import ProcessMachineForm from './components/machines/processMachineForm';
import ProcessGroups from "./components/machinegroup/processGroups";
import ProcessGroupForm from './components/machinegroup/processGroupForm';
import BillMaterials from "./components/materialline/billMaterials";
import BillMaterialForm from './components/materialline/billMaterialForm';
import Bills from "./components/materials/bills";
import BillForm from './components/materials/billForm';
import WasteReports from "./components/wastes/wasteReports";
import WasteReportForm from './components/wastes/wasteForm';
import ProcessRates from "./components/processrate/processRates";
import ProcessRateForm from './components/processrate/processRateForm';
import Process from "./components/Process/process";
import ProcessForm from './components/Process/processForm';
import Assets from "./components/assets/Assets";
import AssetForm from './components/assets/AssetForm';
import Transactions from "./components/transactions/Assets";
>>>>>>> Stashed changes


import Sidebar from "./components/sidebar/Sidebar";

//Alert Options
const alertOptions = {
	timeout: 3000,
	position: 'top center'
}

class App extends Component {
	render(){
		return (
			<Provider store={store}>
<<<<<<< Updated upstream
				<AlertProvider template={AlertTemplate} {...alertOptions} >
					<Fragment>
						<Navbar />
						<Switch>
							<Route exact path='/' component={BaseProductList} />
							<Route path='/taxes' component={Taxes} />
							<Route path='/create-tax' component={TaxForm} />
							<Route path='/currency' component={Currencies} />
							<Route path='/create-currency' component={CurrencyForm} />
							<Route path='/bookkeepers' component={Bookkeepers} />
							<Route path='/create-bookkeeper' component={BookkeeperForm} />
							<Route path='/accounttypes' component={AccountTypes} />
							<Route path='/create-accounttype' component={AccountTypeForm} />
							<Route path='/accounts' component={Accounts} />
							<Route path='/create-account' component={AccountForm} />
							<Route path='/shopping-basket' component={ShoppingBasket} />
							<Route exact path='/sidebar' component={Sidebar} />
							<Route component={Default} />
						</Switch>
					</Fragment>
				</AlertProvider>
=======
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={BaseProductList} />
						<Route path='/taxes' component={Taxes} />
						<Route path='/create-tax' component={TaxForm} />
						<Route path='/shopping-basket' component={ShoppingBasket} />
						<Route exact path='/sidebar' component={Sidebar} />
						<Route exact path='/products' component={Products} />
						<Route exact path='/productsForm' component={ProductForm} />
						<Route exact path='/processMachines' component={ProcessMachines} />
						<Route exact path='/processMachineForm' component={ProcessMachineForm} />
						<Route exact path='/processGroups' component={ProcessGroups} />
						<Route exact path='/processGroupForm' component={ProcessGroupForm} />
						<Route exact path='/billMaterials' component={BillMaterials} />
						<Route exact path='/billMaterialForm' component={BillMaterialForm} />
						<Route exact path='/bills' component={Bills} />
						<Route exact path='/billForm' component={BillForm} />
						<Route exact path='/waste' component={WasteReports} />
						<Route exact path='/waste-report' component={WasteReportForm} />
						<Route exact path='/process-rate' component={ProcessRates} />
						<Route exact path='/process-rate-form' component={ProcessRateForm} />
						<Route exact path='/process' component={Process} />
						<Route exact path='/process-form' component={ProcessForm} />
						<Route exact path='/assets' component={Assets} />
						<Route exact path='/asset-form' component={AssetForm} />

						<Route component={Default} />
					</Switch>
				</Fragment>
>>>>>>> Stashed changes
			</Provider>
		);
	}
}

export default App;
