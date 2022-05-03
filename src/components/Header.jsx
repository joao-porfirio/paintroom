import React from 'react'
import logo from '../assets/img/logo.jpg';
import { Link } from 'react-router-dom'
import '../css/reset.css';
import '../css/style.css';

export const Header = () => {
	return (
		<header className="header">
			<nav className="header__nav">
				<ul>
					<li>
						<Link to="/">
							<img className="header__logo" src={logo} alt="Logo" />
						</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}