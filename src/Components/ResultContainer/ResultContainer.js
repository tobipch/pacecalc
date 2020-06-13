import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const useStyle = makeStyles(theme => ({
	resultPaper:{
		padding:theme.spacing(2)
	},
	tableTitle:{
		textTransform:"capitalize",
		fontWeight:"500"
	},
	tableCell:{
		width:"50%",
		borderBottom:"none"
	},
	tableCellRight:{
		paddingRight:"2px",
	},
	tableCellLeft:{
		paddingLeft:"2px",
		fontWeight:"500"
	}
}));

const ResultContainer = props => {
	const classes = useStyle();

	
	const inputs = [...props.inputs];
	const missingInput = inputs.filter(el => !props.inputsWithValue.includes(el.inputName))[0].inputName;
	const distance = inputs.find(el => el.inputName === "distance").inputValue;
	const time = inputs.find(el => el.inputName === "time").inputValue;
	const pace = inputs.find(el => el.inputName === "pace").inputValue;

	const formats = {
		distance:[
			{format:"mm", value:parseFloat((time / (pace * 60) * 100000).toFixed(2))},
			{format:"cm", value:parseFloat((time / (pace * 60) * 10000).toFixed(2))},
			{format:"m", value:parseFloat((time / (pace * 60) * 1000).toFixed(2))},
			{format:"km", value:parseFloat((time / (pace * 60)).toFixed(2))},
			{format:"mi", value:parseFloat((time / (pace * 60) * 1.609344).toFixed(2))}
		],
		time:[
			{format:"sec", value:parseFloat((distance * (pace * 60) / 1000).toFixed(2))},
			{format:"min", value:parseFloat((distance * pace / 1000).toFixed(2))},
			{format:"h", value:parseFloat(((distance * pace / 1000)/60).toFixed(2))},
			{format:"d", value:parseFloat(((distance * pace / 1000)/60/24).toFixed(2))},
			{format:"mo", value:parseFloat(((distance * pace / 1000)/60/24/(365/12)).toFixed(2))},
			{format:"yr", value:parseFloat(((distance * pace / 1000)/60/365).toFixed(2))},
		],
		pace:[
			{format:"min/km", value:(time / (distance / 1000) / 60).toFixed(2)}
		]
	}

	return (
		<Paper elevation={3} className={classes.resultPaper}>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell colSpan="2" align="center">
								<Typography variant="h4" component="h3" className={classes.tableTitle}>{missingInput}</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{formats[missingInput].map(format => (
							<TableRow
								key={format.format}>
								<TableCell align="right" className={`${classes.tableCell} ${classes.tableCellRight}`}>{format.value}</TableCell>
								<TableCell align="left" className={`${classes.tableCell} ${classes.tableCellLeft}`}>{format.format}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default ResultContainer;