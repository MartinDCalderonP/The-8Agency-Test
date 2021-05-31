import React from 'react';
import './Header.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Logo from '../images/Logo.png';
import LogoWhite from '../images/Logo White.png';

function Header({white}) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div className="header">
			<AppBar className="header__navbar" position="absolute" color="transparent">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="menu"
						onClick={handleClick}
					>
						<div className="header__menuIcon">
							<MenuIcon /> <span className="header__menuWord">menu</span>
						</div>
					</IconButton>
					<Menu
						id="simple-menu"
						className="header__menu"
						anchorEl={anchorEl}
						keepMounted
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<a href="#home">
							<MenuItem onClick={handleClose}>home</MenuItem>
						</a>
						<a href="#projects">
							<MenuItem onClick={handleClose}>works</MenuItem>
						</a>
						<a href="#contact">
							<MenuItem onClick={handleClose}>find us</MenuItem>
						</a>
					</Menu>
					<img
						className="header__logo"
						src={white ? LogoWhite : Logo}
						alt="AIRhitect logo"
					/>
					<div className="header__contact">
						<a href="#contact">
							<span className="header__contactWord">contact</span>
						</a>
					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}

export default Header;
