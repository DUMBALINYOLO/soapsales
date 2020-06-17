import React,  {Component} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {ButtonContainer} from '../assets/button'

class Navbar extends Component {
	render(){
		return (
			<NavWrapper className="navbar navbar-expand-sm bg-secondary navbar-dark px-sm-5">
				<Link to="/sidebar" >
					<span className="fas fa-home navbar-brand">Mel'Cin</span>
				</Link>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/" className="nav-link">Products</Link>
					</li>
				</ul>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/taxes" className="nav-link">Taxes</Link>
					</li>
				</ul>
				<ul className="navbar-nav align-items-center">
					<li className="nav-item ml-5">
						<Link to="/create-tax" className="nav-link">Create-Tax</Link>
					</li>
				</ul>

				<Link to="/shopping-basket" className='ml-auto'>
					<ButtonContainer>
						<span className="mr-2">
							<i className="fas fa-cart-plus"/>
						</span>
						BASKET
					</ButtonContainer>
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
		font-size: 1.3em !important;
		text-transform: uppercase !important;
	}
`
