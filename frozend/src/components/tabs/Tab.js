import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';




class Tab extends Component{
	constructor() {
	    super();
	    this.state = {
	        items: [
	            {label: 'Home', icon: 'pi pi-fw pi-home'},
	            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
	            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
	            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
	            {label: 'Settings', icon: 'pi pi-fw pi-cog'},
	            {label: 'Accounting', icon: 'pi pi-fw pi-cog'},
	            {label: 'Inventory', icon: 'pi pi-fw pi-cog'},
	            {label: 'Sales', icon: 'pi pi-fw pi-cog'},
	            {label: 'Manufacturing', icon: 'pi pi-fw pi-cog'},


	        ]
	    };
	}
	render() {

		return (
			<TabMenu model={this.state.items} activeItem={this.state.activeItem} onTabChange={(e) => this.setState({activeItem: e.value})}/>
		);
	}
}

export default Tab;
	