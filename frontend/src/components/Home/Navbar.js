import React,  {Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';



class Navbar extends Component {
	render(){
		const { Header, Content, Footer } = Layout;

		return (
			<Fragment>
				<Layout className="layout" >
				    <Header>
				      <div className="logo" />
				      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
					      <Menu.Item key="1"><Link to='/dash'>Side Kick</Link></Menu.Item>
					      <Menu.Item key="2">Currencies</Menu.Item>
					      <Menu.Item key="3">Test 3</Menu.Item>
				      </Menu>
				    </Header>
				    <Footer style={{ textAlign: 'center' }}>SoapSales System</Footer>
				</Layout>
					
			</Fragment>
		);
	}
}

export default Navbar;



