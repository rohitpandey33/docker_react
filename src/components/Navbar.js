import React, { useState } from "react";
import {
	Navbar,
	NavbarBrand,
	NavItem,
	Nav,
	NavLink,
	NavbarToggler,
	Collapse,
	Media
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";

const Navbarbar = props => {
	// creating state using hooks

	const [collapse, setCollapse] = useState(true);

	const toggleNavbar = () => {
		setCollapse(!collapse);
	};

	return (
		<Navbar color="dark" dark expand="sm">
			<NavbarBrand href="/">
				<Media left href="/" style={{ marginRight: 10 }}>
					<Media
						style={{ maxHeight: 28, maxWidth: 28 }}
						object
						src="./code.png"
						alt="icon"
					/>
				</Media>
				Rohit CV
			</NavbarBrand>
			<NavbarToggler onClick={toggleNavbar}></NavbarToggler>
			<Collapse isOpen={!collapse} navbar>
				<Nav navbar>
					<NavItem>
						<NavLink href="/">Home</NavLink>
					</NavItem>

					<NavItem>
						<NavLink href="/projects">Projects</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="/skills">Skills</NavLink>
					</NavItem>
				</Nav>
			</Collapse>
		</Navbar>
	);
};

export default Navbarbar;
