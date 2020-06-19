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
import Currencies from './components/currencies/Currencies';
import CurrencyForm from './components/currencies/CurrencyForm';

import Bookkeepers from './components/bookkeepers/Bookkeepers';
import BookkeeperForm from './components/bookkeepers/BookkeeperForm';

import AccountTypes from './components/accounttypes/AccountTypes';
import AccountTypeForm from './components/accounttypes/AccountTypeForm';


import Accounts from './components/accounts/Accounts';
import AccountForm from './components/accounts/AccountForm';


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
			</Provider>
		);
	}
}

export default App;
