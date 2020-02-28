import React from "react";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Link
} from "@material-ui/core/";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { makeStyles } from "@material-ui/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";

import HomeIcon from "@material-ui/icons/Home";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import BuildIcon from "@material-ui/icons/Build";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";

const useStyles = makeStyles({
	list: {
		width: 250
	},
	drawer: {
		width: 250,
		color: "blue"
	},
	link: {
		color: "Black"
	}
});

const Sidebar = props => {
	const style = useStyles();

	return (
		<div>
			<div>
				<SwipeableDrawer
					open={props.status}
					onClose={props.toggleDrawer("left", false)}
					onOpen={props.toggleDrawer("left", true)}
				>
					<List className={style.list}>
						<Link href="/" className={style.link}>
							<ListItem>
								<ListItemIcon>
									<HomeIcon />
								</ListItemIcon>
								<ListItemText>Home</ListItemText>
							</ListItem>
						</Link>
						<Link href="/projects" className={style.link}>
							<ListItem>
								<ListItemIcon>
									<AccountBoxIcon />
								</ListItemIcon>
								<ListItemText>Profile</ListItemText>
							</ListItem>
						</Link>
						<Link href="/projects" className={style.link}>
							<ListItem>
								<ListItemIcon>
									<BuildIcon />
								</ListItemIcon>
								<ListItemText>Projects</ListItemText>
							</ListItem>
						</Link>
						<Link href="/skills" className={style.link}>
							<ListItem>
								<ListItemIcon>
									<LocalLibraryIcon />
								</ListItemIcon>
								<ListItemText>Skill</ListItemText>
							</ListItem>
						</Link>
						<Link href="/contact" className={style.link}>
							<ListItem>
								<ListItemIcon>
									<ContactPhoneIcon />
								</ListItemIcon>
								<ListItemText>Contact</ListItemText>
							</ListItem>
						</Link>
					</List>
				</SwipeableDrawer>
			</div>
		</div>
	);
};

export default Sidebar;
