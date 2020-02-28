import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/styles";
import Sidebar from "../supportcomponents/Sidebar";

const useStyles = makeStyles({
	// root: {
	// 	flexGrow: 1
	// },
	typography: {
		marginLeft: "5px",
		marginRight: "5px"
	},
	menuButton: {
		color: "white",
		float: "left"
	},
	brand: {
		maxHeight: 28,
		maxWidth: 28
	},
	profilePic: {
		maxHeight: 128,
		maxwidth: 64,
		borderRadius: 20,
		marginTop: 20,
		marginBottom: 20
	}
});

const NavbarMaterial = () => {
	const style = useStyles();
	const [state, setState] = React.useState({ left: false });
	const toggleSidebar = () => {
		setState({ left: !state.left });
	};
	const toggleDrawer = (side, open) => event => {
		if (
			event &&
			event.type === "keydown" &&
			(event.key === "Tab" || event.key === "Shift")
		) {
			return;
		}

		setState({ ...state, [side]: open });
	};
	return (
		<div>
			<AppBar position="static" color="secondary">
				<Toolbar>
					<IconButton onClick={toggleSidebar}>
						<MenuIcon></MenuIcon>
					</IconButton>
					<Typography variant="h4" className={style.typography}>
						Rohit Kumar
					</Typography>
				</Toolbar>
				<Sidebar status={state.left} toggleDrawer={toggleDrawer} />
			</AppBar>
		</div>
	);
};

export default NavbarMaterial;
