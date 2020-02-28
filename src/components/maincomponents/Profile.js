import React from "react";
import { Paper, Typography } from "@material-ui/core/";
import makeStyles from "@material-ui/styles/makeStyles";

const useStyle = makeStyles({
	mainPaper: {
		height: "600px",
		width: "100%",
		backgroundColor: "blue"
	}
});
const Profile = props => {
	const style = useStyle();
	return (
		<Paper className={style.mainPaper}>
			<Typography variant="h4">This is Profile page</Typography>
		</Paper>
	);
};

export default Profile;