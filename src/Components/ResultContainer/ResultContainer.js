import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';
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
	tableBody:{
		"&:before":{
			content:"''",
			display:"block",
			height:theme.spacing(2)
		}
	},
	tableTitle:{
		textTransform:"capitalize",
		fontWeight:"500"
	},
	tableCell:{
		width:"50%",
		borderBottom:"none"
	},
	tableCellLeft:{
		paddingRight:2
	},
	tableCellRight:{
		paddingLeft:2
	},
	resultFormat:{
		fontWeight:"500",
		float:"left"
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
			{
				format:"mm",
			 	tooltip:"millimetres",
				value:parseFloat((time / (pace * 60) * 100000).toFixed(2))
			},
			{
				format:"cm",
				tooltip:"centimetres",
				value:parseFloat((time / (pace * 60) * 10000).toFixed(2))
			},
			{
				format:"m",
				tooltip:"metres",
				value:parseFloat((time / (pace * 60) * 1000).toFixed(2))
			},
			{
				format:"km",
				tooltip:"kilometres",
				value:parseFloat((time / (pace * 60)).toFixed(2))
			},
			{
				format:"mi",
				tooltip:"miles",
				value:parseFloat((time / (pace * 60) * 1.609344).toFixed(2))
			}
		],
		time:[
			{
				format:"sec",
				tooltip:"seconds",
				value:parseFloat((distance * (pace * 60) / 1000).toFixed(2))
			},
			{
				format:"min",
			 	tooltip:"minutes",
				value:parseFloat((distance * pace / 1000).toFixed(2))},
			{
				format:"h",
			 	tooltip:"hours",
				value:parseFloat(((distance * pace / 1000)/60).toFixed(2))},
			{
				format:"d",
			 	tooltip:"days",
				value:parseFloat(((distance * pace / 1000)/60/24).toFixed(2))},
			{
				format:"mo",
			 	tooltip:"months",
				value:parseFloat(((distance * pace / 1000)/60/24/(365/12)).toFixed(2))},
			{
				format:"yr",
			 	tooltip:"years",
				value:parseFloat(((distance * pace / 1000)/60/365).toFixed(2))},
		],
		pace:[
			{
				format:"min/km",
				tooltip:"minutes per kilometre",
				value:(time / (distance / 1000) / 60).toFixed(2)},
			{
				format:"min/mi",
				tooltip:"minutes per miles",
				value:(time / (distance / 1000) / 60 * 1.609344).toFixed(2)}
		]
	}

	return (
		<Paper elevation={3} className={classes.resultPaper}>
			<TableContainer>
				<Table size="small">
					<TableHead>
						<TableRow>
							<TableCell colSpan="100%" align="center">
								<Typography variant="h4" component="h3" className={classes.tableTitle}>{missingInput}</Typography>
							</TableCell>
						</TableRow>
					</TableHead>
					<TableBody className={classes.tableBody}>
						{formats[missingInput].map(format => (
							<TableRow
								key={format.format}>
								<TableCell
									className={`${classes.tableCell} ${classes.tableCellLeft}`}>
									<Typography
										className={classes.resultValue}
										align="right">
										{format.value}
									</Typography>
								</TableCell>
								
								<TableCell
									align="left"
									className={`${classes.tableCell} ${classes.tableCellRight}`}>
									<Tooltip title={format.tooltip} placement="right" arrow>
										<Typography 
											className={classes.resultFormat}
											align="left">
											{format.format}
										</Typography>
									</Tooltip>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Paper>
	)
}

export default ResultContainer;