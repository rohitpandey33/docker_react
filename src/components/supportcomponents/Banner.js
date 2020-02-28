import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { Typography, GridList, Paper } from "@material-ui/core";
const useStyle = makeStyles({
	mainContainer: {
		backgroundColor: "#eef"
	},
	container: {
		position: "relative"
	},
	image: {
		height: "100%",
		width: "100%",
		border: "none",
		position: "relative",
		zIndex: 0
	},
	text: {
		zIndex: "999",
		marginLeft: "-50%",
		marginRight: "auto",
		top: "50%",
		botton: "50%",
		position: "absolute",
		color: "black"
	}
});
const Banner = props => {
	const style = useStyle();
	return (
		<div className={style.container}>
			<img src="./banner.jpg" alt="banner" className={style.image} />
			<Button
				component="a"
				href="profile"
				variant="contained"
				color="primary"
				className={style.text}
			>
				Click me
			</Button>
		</div>

		// <>
		// 	<Grid container className={style.mainContainer}>
		// 		<Grid item xs={12}>
		// 			<img src="./banner.jpg" alt="banner" className={style.image} />
		// 		</Grid>
		// 	</Grid>
		// 	<div calssName={style.text}>
		// 		<Grid container direction="row" spacing={3}>
		// 			<Grid col={4}>
		// 				<Typography variant="h6">Let's Build the world together</Typography>
		// 			</Grid>
		// 			<Grid col={4}>
		// 				<Typography variant="h6">Let's Build the world together</Typography>
		// 			</Grid>
		// 			<Grid col={4}>
		// 				<Typography variant="h6">Let's Build the world together</Typography>
		// 			</Grid>
		// 		</Grid>
		// 	</div>
		// </>
	);
};

export default Banner;
