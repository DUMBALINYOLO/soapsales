import React, {Component} from 'react';
import classNames from 'classnames';
import {AppTopbar} from './AppTopbar';
import {AppFooter} from './AppFooter';
import {AppMenu} from './AppMenu';
import {AppProfile} from './AppProfile';
import Dashboard from './components/Dashboard';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './layout/layout.scss';
import './App.scss';

class Content extends Component {

    constructor() {
        super();
        this.state = {
            layoutMode: 'static',
            layoutColorMode: 'dark',
            staticMenuInactive: false,
            overlayMenuActive: false,
            mobileMenuActive: false
        };

        this.onWrapperClick = this.onWrapperClick.bind(this);
        this.onToggleMenu = this.onToggleMenu.bind(this);
        this.onSidebarClick = this.onSidebarClick.bind(this);
        this.onMenuItemClick = this.onMenuItemClick.bind(this);
        this.createMenu();
    }

    onWrapperClick(event) {
        if (!this.menuClick) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            });
        }

        this.menuClick = false;
    }

    onToggleMenu(event) {
        this.menuClick = true;

        if (this.isDesktop()) {
            if (this.state.layoutMode === 'overlay') {
                this.setState({
                    overlayMenuActive: !this.state.overlayMenuActive
                });
            }
            else if (this.state.layoutMode === 'static') {
                this.setState({
                    staticMenuInactive: !this.state.staticMenuInactive
                });
            }
        }
        else {
            const mobileMenuActive = this.state.mobileMenuActive;
            this.setState({
                mobileMenuActive: !mobileMenuActive
            });
        }

        event.preventDefault();
    }

    onSidebarClick(event) {
        this.menuClick = true;
    }

    onMenuItemClick(event) {
        if(!event.item.items) {
            this.setState({
                overlayMenuActive: false,
                mobileMenuActive: false
            })
        }
    }

    createMenu() {
        this.menu = [
            {label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {window.location = '#/dash-view'}},
            {
                label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
                items: [
                    {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'static'}) },
                    {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutMode: 'overlay'}) }
                ]
            },
            {
                label: 'Menu Colors', icon: 'pi pi-fw pi-align-left',
                items: [
                    {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'dark'}) },
                    {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => this.setState({layoutColorMode: 'light'}) }
                ]
            },
            {
                label: 'Configurations', icon: 'pi pi-fw pi-user-plus',
                items: [
                    {
                        label: 'Pricing Groups', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Processed Components', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
            {
                label: 'Accounting', icon: 'pi pi-fw pi-ticket',
                items: [
                    {
                        label: 'Accounts', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark', to: '/account-form'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/accounts'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/account-detail/:id'},

                        ]
                    },
                    {
                        label: 'Accounts Type', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/accounttypes'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/accounttype-detail/:id'},

                        ]
                    },
                    {
                        label: 'Journal Entries', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/journals'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/journal-detail/:id'},

                        ]
                    },
                    {
                        label: 'Assets', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/assets'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/asset-detail/:id'},

                        ]
                    },
                    {
                        label: 'Accounting Configurations', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/accountingConfig'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/accountconfig-detail/:id'},

                        ]
                    },
                    {
                        label: 'Taxes', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/taxes'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/'},

                        ]
                    },
                    {
                        label: 'Currency', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/currencies'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Book Keepers', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/bookkeepers'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'My Bills', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/bills'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Bill Payments', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/billpayments'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Transactions', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/transactions'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
            {
                label: 'Inventory', icon: 'pi pi-fw pi-search',
                items: [
                    {
                        label: 'Inventory Category', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/inventorycategory'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Unit Measure', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/unitmeasure'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Inventory Controllers', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/inventorycontrollers'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Debit Note', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/debitnotes'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Orders', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/orders'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Order Payments', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/orderpayments'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Inventory Items', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/inventoryitems'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
            {
                label: 'Manufacturing', icon: 'pi pi-fw pi-file-o',
                items: [
                    {
                        label: 'Process Machines', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/processmachines'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Process Machine Groups', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/processgroups'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Process', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/process'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Process Rate', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/processrates'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Production Orders', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/productionorders'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Products', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/products'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark', to: '/product-detail/:id'},

                        ]
                    },
                    {
                        label: 'Processed Products', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: './processproducts'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Waste Reports', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/waste'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Bill Of Materials', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/billmaterials'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
            {
                label: 'Sales', icon: 'pi pi-fw pi-money-bill',
                items: [
                    {
                        label: 'Credit Note', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/creditnotes'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Customers', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/customers'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Payments', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/payments'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Sales Rep', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/sales-rep'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Invoices', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/invoices'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Product Line Components', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/productlines'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
            {
                label: 'Stock', icon: 'pi pi-fw pi-shopping-cart',
                items: [
                    {
                        label: 'Pricing Groups', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/pricinggroups'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                    {
                        label: 'Processed Components', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Create', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'View', icon: 'pi pi-fw pi-bookmark', to: '/processproducts'},
                            {label: 'Details', icon: 'pi pi-fw pi-bookmark'},

                        ]
                    },
                ]
            },
        ];
    }

    addClass(element, className) {
        if (element.classList)
            element.classList.add(className);
        else
            element.className += ' ' + className;
    }

    removeClass(element, className) {
        if (element.classList)
            element.classList.remove(className);
        else
            element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }

    isDesktop() {
        return window.innerWidth > 1024;
    }

    componentDidUpdate() {
        if (this.state.mobileMenuActive)
            this.addClass(document.body, 'body-overflow-hidden');
        else
            this.removeClass(document.body, 'body-overflow-hidden');
    }

    render() {

        const wrapperClass = classNames('layout-wrapper', {
            'layout-overlay': this.state.layoutMode === 'overlay',
            'layout-static': this.state.layoutMode === 'static',
            'layout-static-sidebar-inactive': this.state.staticMenuInactive && this.state.layoutMode === 'static',
            'layout-overlay-sidebar-active': this.state.overlayMenuActive && this.state.layoutMode === 'overlay',
            'layout-mobile-sidebar-active': this.state.mobileMenuActive
        });

        const sidebarClassName = classNames("layout-sidebar", {
            'layout-sidebar-dark': this.state.layoutColorMode === 'dark',
            'layout-sidebar-light': this.state.layoutColorMode === 'light'
        });

        return (
            <div className={wrapperClass} onClick={this.onWrapperClick}>
                <AppTopbar onToggleMenu={this.onToggleMenu}/>

                <div ref={(el) => this.sidebar = el} className={sidebarClassName} onClick={this.onSidebarClick}>
                    <AppProfile />
                    <AppMenu model={this.menu} onMenuItemClick={this.onMenuItemClick} />
                </div>

                <Dashboard />

                <AppFooter />

                <div className="layout-mask"></div>
            </div>
        );
    }
}

export default Content;
