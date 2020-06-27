import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';


class MainTab extends Component{
	render(){
		return(

			<div>
				<Tabs>
					<TabList>
						<Tab>Tab Link 1</Tab>
						<Tab>Tab Link 2</Tab>
						<Tab>Tab Link 3</Tab>
						<Tab>Tab Link 4</Tab>
						<Tab>Tab Link 5</Tab>
						<Tab>Tab Link 6</Tab>
					</TabList>
				</Tabs>
			</div>

		)
	}
}

export default MainTab;