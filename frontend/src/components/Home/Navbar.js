import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

class Navbar extends Component {
	render(){
		return (
			<NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
				<Link to="/sidebar" >
					<span className="navbar-brand">User Dashboard</span>
				</Link>
				<Link to="/login" className='ml-auto'>
					<span className="mr-2">
						<i className="fas fa-user"/>
					</span>
					Login
				</Link>
			</NavWrapper>
		);
	}
}

export default Navbar;


const NavWrapper = styled.nav`
	background-color: 4B0082 !important;
	.navlink{
		color : FFD700 !important;
		font-size: 2.1em !important;
		text-transform: uppercase !important;
	}
`
