import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const Header = () => {
	return (
		<Grid container justify="center" alignItems="baseline">
			<Typography variant="h1">Pacecalc</Typography>
			<Typography variant="subtitle2" component="h2">v2</Typography>
		</Grid>
	);
};

export default Header;