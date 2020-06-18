import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles(theme => ({
	root:{
		marginTop:theme.spacing(1)
	},
	headline:{
		fontWeight:400,
		borderBottom:"3px solid transparent",
		borderBottomColor:theme.palette.primary.main
	},
	subtitle:{
		marginLeft:theme.spacing(1)
	}
}));

const Header = () => {
	const classes = useStyle();

	return (
		<Grid container justify="center" alignItems="baseline" className={classes.root}>
			<Typography
				variant="h1" 
				className={classes.headline}>
				Pacecalc
			</Typography>

			<Typography
				variant="subtitle2"
				component="h2"
				className={classes.subtitle}>
				v2.1
			</Typography>
		</Grid>
	);
};

export default Header;