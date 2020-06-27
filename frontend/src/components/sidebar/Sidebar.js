import React from 'react';
import { Link } from "react-router-dom";
import "./styled.css";



const Sidebar =() => {
    return (
        <>
        <nav className="navbar navbar-expand-md navbar-light">
          <button className="navbar-toggler ml-auto mb-2 bg-light" type="button" data-toggle="collapse" data-target="#myNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="myNavbar">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4 sidebar fixed-top scrollbar" id="style-1">
                  <ul className="navbar-nav flex-column mt-4">
                    <li className="nav-item pb-3">
                        <Link to="#" className="nav-link text-white p-3 mb-2 current">
                        <i className="fas fa-home text-light fa-lg mr-3"></i>Dashboard</Link>
                    </li>
                    <ul className="list-unstyled components">
                        <li className="active pb-3">
                        <h3 className="mb-2 text-white"><i class="fas fa-file-alt text-light fa-lg mr-3"></i>Accounting</h3>
                            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Accounts</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="homeSubmenu">
                                <li className="pb-3">
                                    <Link to="/account-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/accounts" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#typesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Account Types</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="typesSubmenu">
                                <li className="pb-3">
                                    <Link to="/accounttype-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/accounttypes" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#assetSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Assets</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="assetSubmenu">
                                <li className="pb-3">
                                    <Link to="/asset-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/assets" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#confSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Account Config</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="confSubmenu">
                                <li className="pb-3">
                                    <Link to="/accountingConfigForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/accountingConfig" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#taxSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Taxes</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="taxSubmenu">
                                <li className="pb-3">
                                    <Link to="/create-tax" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/taxes" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#curSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Currency</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="curSubmenu">
                                <li className="pb-3">
                                    <Link to="/currency-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/currencies" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#bkSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Book Keepers</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="bkSubmenu">
                                <li className="pb-3">
                                    <Link to="/bookkeeper-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/bookkeepers" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#billSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Bills</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="billSubmenu">
                                <li className="pb-3">
                                    <Link to="/billForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/bills" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#traSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Transactions</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="traSubmenu">
                                <li className="pb-3">
                                    <Link to="/transactions" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white p-3 mb-2">
                            <h3 className="mb-2 text-white"><i class="fas fa-folder text-light fa-lg mr-3"></i>Inventory</h3>
                            <a href="#inventorySubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Inventory Category</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="inventorySubmenu">
                                <li className="pb-3">
                                    <Link to="/inventorycategory-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/inventorycategory" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#uniSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Unit Measure</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="uniSubmenu">
                                <li className="pb-3">
                                    <Link to="/unitmeasure-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/unitmeasure" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#invSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Inventory Controllers</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="invSubmenu">
                                <li className="pb-3">
                                    <Link to="/inventorycontroller-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/inventorycontrollers" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#dbSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Debit Notes</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="dbSubmenu">
                                <li className="pb-3">
                                    <Link to="/debitnote-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/debitnotes" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#odSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Orders</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="odSubmenu">
                                <li className="pb-3">
                                    <Link to="/order-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/orders" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#opSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Order Payments</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="opSubmenu">
                                <li className="pb-3">
                                    <Link to="/orderpayment-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/orderpayments" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#invtSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Inventory Items</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="invtSubmenu">
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">View</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white p-3 mb-2">
                            <h3 className="mb-2 text-white"><i class="fas fa-table text-light fa-lg mr-3"></i>Manufacture</h3>
                            <a href="#manuSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Process Machines</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="manuSubmenu">
                                <li className="pb-3">
                                    <Link to="/processMachineForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/processMachines" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#pgSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Process Groups</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="pgSubmenu">
                                <li className="pb-3">
                                    <Link to="/processGroupForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/processGroups" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#procSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Process</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="procSubmenu">
                                <li className="pb-3">
                                    <Link to="/process-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/process" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#prSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Process Rate</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="prSubmenu">
                                <li className="pb-3">
                                    <Link to="/process-rate-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/process-rate" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#proSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Products</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="proSubmenu">
                                <li className="pb-3">
                                    <Link to="/productsForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/products" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/productdetails" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#ppSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Process Products</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="ppSubmenu">
                                <li className="pb-3">
                                    <Link to="/processproduct-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/processproducts" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#waSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Waste Reports</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="waSubmenu">
                                <li className="pb-3">
                                    <Link to="/waste-report" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/waste" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#dblSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Bill Materials</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="dblSubmenu">
                                <li className="pb-3">
                                    <Link to="/billMaterialForm" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/billMaterials" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white p-3 mb-2">
                            <h3 className="mb-2 text-white"><i class="fas fa-shopping-cart text-light fa-lg mr-3"></i>Sales</h3>
                            <a href="#salesSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Credit Notes</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="salesSubmenu">
                                <li className="pb-3">
                                    <Link to="/creditnote-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/creditnotes" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#cusSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Customers</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="cusSubmenu">
                                <li className="pb-3">
                                    <Link to="/customer-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/customers" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#pySubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Payments</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="pySubmenu">
                                <li className="pb-3">
                                    <Link to="/payment-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/payments" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#srSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>sales Rep</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="srSubmenu">
                                <li className="pb-3">
                                    <Link to="/salesrep-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/salesrep" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#vcSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Invoices</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="vcSubmenu">
                                <li className="pb-3">
                                    <Link to="/invoice-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/invoices" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#plSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Product Lines</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="plSubmenu">
                                <li className="pb-3">
                                    <Link to="/productline-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/productlines" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="text-white p-3 mb-2">
                            <h3 className="mb-2 text-white"><i class="fas fa-truck text-light fa-lg mr-3"></i>Stock</h3>
                            <a href="#stockSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Pricing Groups</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="stockSubmenu">
                                <li className="pb-3">
                                    <Link to="/princinggroup-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/pricinggroup" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                        <li className="active pb-3 mb-2">
                            <a href="#ppcSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
                            <i className="mr-3"></i>Processed Products</a>
                            <ul className="collapse list-unstyled mt-3 text-center" id="ppcSubmenu">
                                <li className="pb-3">
                                    <Link to="/processproduct-form" className="text-white p-3 mb-2">Create</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/processproducts" className="text-white p-3 mb-2">Views</Link>
                                </li>
                                <li className="pb-3">
                                    <Link to="/" className="text-white p-3 mb-2">Details</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <li className="nav-item"><Link to="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-envelope text-light fa-lg mr-3"></i>Inbox</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-chart-line text-light fa-lg mr-3"></i>Analytics</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link text-white p-3 mb-2 sidebar-link"><i className="fas fa-file-alt text-light fa-lg mr-3"></i>Documentation</Link></li>
                  </ul>
                </div>

                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto bg-dark fixed-top py-2 top-navbar">
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <h4 className="text-light text-uppercase mb-0">Dashboard</h4>
                    </div>
                    <div className="col-md-5">
                      <form>
                        <div className="input-group">
                          <input type="text" className="form-control search-input" placeholder="Search..."/>
                          <button type="button" className="btn btn-white search-button"><i className="fas fa-search text-danger"></i></button>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-3">
                      <ul className="navbar-nav">
                        <li className="nav-item icon-parent"><Link to="#" className="nav-link icon-bullet"><i className="fas fa-comments text-muted fa-lg"></i></Link></li>
                        <li className="nav-item icon-parent"><Link to="#" className="nav-link icon-bullet"><i className="fas fa-bell text-muted fa-lg"></i></Link></li>
                        <li className="nav-item ml-md-auto"><Link to="#" className="nav-link" data-toggle="modal" data-target="#sign-out"><i className="fas fa-sign-out-alt text-danger fa-lg"></i></Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="modal fade" id="sign-out">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Want to leave?</h4>
                <button type="button" className="close" data-dismiss="modal">&times;</button>
              </div>
              <div className="modal-body">
                Press logout to leave
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-success" data-dismiss="modal">Stay Here</button>
                <button type="button" className="btn btn-danger" data-dismiss="modal">Logout</button>
              </div>
            </div>
          </div>
        </div>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row pt-md-5 mt-md-3 mb-5">
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-shopping-cart fa-3x text-warning"></i>
                          <div className="text-right text-secondary">
                            <h5>Sales</h5>
                            <h3>$135,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                          <div className="text-right text-secondary">
                            <h5>Expenses</h5>
                            <h3>$39,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-users fa-3x text-info"></i>
                          <div className="text-right text-secondary">
                            <h5>Users</h5>
                            <h3>15,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 p-2">
                    <div className="card card-common">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <i className="fas fa-chart-line fa-3x text-danger"></i>
                          <div className="text-right text-secondary">
                            <h5>Visitors</h5>
                            <h3>45,000</h3>
                          </div>
                        </div>
                      </div>
                      <div className="card-footer text-secondary">
                        <i className="fas fa-sync mr-3"></i>
                        <span>Updated Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row mb-5">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row align-items-center">
                  <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                    <h3 className="text-muted text-center mb-3">Staff Salary</h3>
                    <table className="table table-striped bg-light text-center">
                      <thead>
                        <tr className="text-muted">
                          <th>#</th>
                          <th>Name</th>
                          <th>Salary</th>
                          <th>Date</th>
                          <th>Contact</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>John</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Ann</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Mark</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Mary</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Bob</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><button type="button" className="btn btn-info btn-sm">Message</button></td>
                        </tr>
                      </tbody>
                    </table>

                    <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            <span>&laquo;</span>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link to="#" className="page-link py-2 px-3">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            <span>&raquo;</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>

                  </div>
                  <div className="col-xl-6 col-12">
                    <h3 className="text-muted text-center mb-3">Recent Payments</h3>
                    <table className="table table-dark table-hover text-center">
                      <thead>
                        <tr className="text-muted">
                          <th>#</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Date</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th>1</th>
                          <td>Monica</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-success w-75 py-2">Approved</span></td>
                        </tr>
                        <tr>
                          <th>2</th>
                          <td>Nick</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-success w-75 py-2">Approved</span></td>
                        </tr>
                        <tr>
                          <th>3</th>
                          <td>Alex</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-danger w-75 py-2">Pending</span></td>
                        </tr>
                        <tr>
                          <th>4</th>
                          <td>Jane</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-danger w-75 py-2">Pending</span></td>
                        </tr>
                        <tr>
                          <th>5</th>
                          <td>Michael</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-success w-75 py-2">Approved</span></td>
                        </tr>
                        <tr>
                          <th>6</th>
                          <td>Kate</td>
                          <td>$2000</td>
                          <td>25/05/2018</td>
                          <td><span className="badge badge-danger w-75 py-2">Pending</span></td>
                        </tr>
                      </tbody>
                    </table>

                     <nav>
                      <ul className="pagination justify-content-center">
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            <span>Previous</span>
                          </Link>
                        </li>
                        <li className="page-item active">
                          <Link to="#" className="page-link py-2 px-3">
                            1
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            2
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            3
                          </Link>
                        </li>
                        <li className="page-item">
                          <Link to="#" className="page-link py-2 px-3">
                            <span>Next</span>
                          </Link>
                        </li>
                      </ul>
                    </nav>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row mb-4 align-items-center">
                  <div className="col-xl-6 col-12 mb-4 mb-xl-0">
                    <div className="bg-dark text-white p-4 rounded">
                      <h4 className="mb-5">Coversion Rates</h4>
                      <h6 className="mb-3">Google Chrome</h6>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold" style={{width: "91%"}}>
                          91%
                        </div>
                      </div>
                      <h6 className="mb-3">Mozilla Firefox</h6>
                      <div className="progress mb-4" style={{heigh: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-success" style={{width: "82%"}}>
                          82%
                        </div>
                      </div>
                      <h6 className="mb-3">Safari</h6>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-danger" style={{width: "67%"}}>
                          67%
                        </div>
                      </div>
                      <h6 className="mb-3">IE</h6>
                      <div className="progress mb-4" style={{height: "20px"}}>
                        <div className="progress-bar progress-bar-striped font-weight-bold bg-info" style={{width: "10%"}}>
                          10%
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-12">
                    <h4 className="text-muted p-3 mb-3">Tasks:</h4>
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked />
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top"><i className="fas fa-edit fa-lg text-success mr-2"></i></Link>
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top"><i className="fas fa-trash-alt fa-lg text-danger"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked/>
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top"><i className="fas fa-edit fa-lg text-success mr-2"></i></Link>
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top"><i className="fas fa-trash-alt fa-lg text-danger"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked/>
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top"><i className="fas fa-edit fa-lg text-success mr-2"></i></Link>
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top"><i className="fas fa-trash-alt fa-lg text-danger"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked/>
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top"><i className="fas fa-edit fa-lg text-success mr-2"></i></Link>
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top"><i className="fas fa-trash-alt fa-lg text-danger"></i></Link>
                        </div>
                      </div>
                    </div>
                    <div className="container-fluid bg-white">
                      <div className="row py-3 mb-4 task-border align-items-center">
                        <div className="col-1">
                          <input type="checkbox" checked/>
                        </div>
                        <div className="col-sm-9 col-8">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>edit</h6>" data-html="true" data-placement="top"><i className="fas fa-edit fa-lg text-success mr-2"></i></Link>
                        </div>
                        <div className="col-1">
                          <Link to="#" data-toggle="tooltip" title="<h6>delete</h6>" data-html="true" data-placement="top"><i className="fas fa-trash-alt fa-lg text-danger"></i></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row align-items-center mb-5">
                  <div className="col-xl-7">
                    <h4 className="text-muted mb-4">Recent Customer Activities</h4>
                    <div id="accordion">
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseOne">
                            <img src='' width="50" className="mr-3 rounded"/>
                            John posted a new comment
                          </button>
                        </div>
                        <div className="collapse show" id="collapseOne" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseTwo">
                            <img src='' width="50" className="mr-3 rounded"/>
                            Mark posted a new comment
                          </button>
                        </div>
                        <div className="collapse" id="collapseTwo" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseThree">
                            <img src='' width="50" className="mr-3 rounded"/>
                            Monica posted a new comment
                          </button>
                        </div>
                        <div className="collapse" id="collapseThree" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFour">
                            <img src='' width="50" className="mr-3 rounded"/>
                            Vivien posted a new comment
                          </button>
                        </div>
                        <div className="collapse" id="collapseFour" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseFive">
                            <img src='' width="50" className="mr-3 rounded"/>
                            Nick posted a new comment
                          </button>
                        </div>
                        <div className="collapse" id="collapseFive" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                      <div className="card">
                        <div className="card-header">
                          <button className="btn btn-block bg-secondary text-light text-left" data-toggle="collapse" data-target="#collapseSix">
                            <img src='' width="50" className="mr-3 rounded"/>
                            Ann posted a new comment
                          </button>
                        </div>
                        <div className="collapse" id="collapseSix" data-parent="#accordion">
                          <div className="card-body">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis earum modi delectus fugiat consectetur eaque harum obcaecati, saepe id vitae, dolore aliquam! Quos, doloribus quisquam.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 mt-5">
                    <div className="card rounded">
                      <div className="card-body">
                        <h5 className="text-muted text-center mb-4">Quick Status Post</h5>
                        <ul className="list-inline text-center py-3">
                          <li className="list-inline-item mr-4">
                            <Link to="#">
                              <i className="fas fa-pencil-alt text-success"></i>
                              <span className="h6 text-muted">Status</span>
                            </Link>
                          </li>
                          <li className="list-inline-item mr-4">
                            <Link to="#">
                              <i className="fas fa-camera text-info"></i>
                              <span className="h6 text-muted">Photo</span>
                            </Link>
                          </li>
                          <li className="list-inline-item">
                            <Link to="#">
                              <i className="fas fa-map-marker-alt text-primary"></i>
                              <span className="h6 text-muted">Check-in</span>
                            </Link>
                          </li>
                        </ul>
                        <form>
                          <div className="form-group">
                            <input type="text" className="form-control py-2 mb-3" placeholder="What's Your Status..."/>
                            <button type="button" className="btn btn-block text-uppercase font-weight-bold text-light bg-info py-2 mb-5">Submit Post</button>
                          </div>
                        </form>
                        <div className="row">
                          <div className="col-6">
                            <div className="card bg-light">
                              <i className="far fa-calendar-alt fa-8x text-warning d-block m-auto py-3"></i>
                              <div className="card-body">
                                <p className="card-text text-center font-weight-bold text-uppercase">Mon, may 26</p>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <div className="card bg-light">
                              <i className="far fa-clock fa-8x text-danger d-block m-auto py-3"></i>
                              <div className="card-body">
                                <p className="card-text text-center font-weight-bold text-uppercase">3:50 am</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                <div className="row border-top pt-3">
                  <div className="col-lg-6 text-center">
                    <h5 className="text-center" style={{color: "lightseagreen"}}>Melcin fair &copy;{`${new Date().getFullYear()}`}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        </>
    );
}
export default Sidebar;
