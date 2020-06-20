import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
		padding:theme.spacing(2),
		height:"100%"
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
	let inputsToDisplay = props.inputsWithValue;
	const distance = +inputs.find(el => el.inputName === "distance").normalizedValue || 0;
	const time = +inputs.find(el => el.inputName === "time").normalizedValue || 0;
	const pace = +inputs.find(el => el.inputName === "pace").normalizedValue || 0;
	
	// Display all inputs if two values are entered and move relevant input to the first position
	if(props.inputsWithValue.length === 2){
		inputsToDisplay = ["distance","time","pace"].filter(el => el !== missingInput);
		inputsToDisplay.unshift(missingInput);
	}
	
	console.log(props.inputsWithValue);

	const formats = {
		distance:[
			{
				format:"mm",
			 	tooltip:"millimetres",
				value:parseFloat((time / (pace * 60) * 100000).toFixed(2)),
				valueIndependent:parseFloat((distance * 1000).toFixed(2))
			},
			{
				format:"cm",
				tooltip:"centimetres",
				value:parseFloat((time / (pace * 60) * 10000).toFixed(2)),
				valueIndependent:parseFloat((distance * 100).toFixed(2))
			},
			{
				format:"m",
				tooltip:"metres",
				value:parseFloat((time / (pace * 60) * 1000).toFixed(2)),
				valueIndependent:parseFloat((distance).toFixed(2))
			},
			{
				format:"km",
				tooltip:"kilometres",
				value:parseFloat((time / (pace * 60)).toFixed(2)),
				valueIndependent:parseFloat((distance / 1000).toFixed(2))
			},
			{
				format:"mi",
				tooltip:"miles",
				value:parseFloat((time / (pace * 60) * 1.609344).toFixed(2)),
				valueIndependent:parseFloat((distance / 1609.344).toFixed(2))
			}
		],
		time:[
			{
				format:"sec",
				tooltip:"seconds",
				value:parseFloat((distance * (pace * 60) / 1000).toFixed(2)),
				valueIndependent:parseFloat((time).toFixed(2))
			},
			{
				format:"min",
			 	tooltip:"minutes",
				value:parseFloat((distance * pace / 1000).toFixed(2)),
				valueIndependent:parseFloat((time / 60).toFixed(2))
			},
			{
				format:"h",
			 	tooltip:"hours",
				value:parseFloat(((distance * pace / 1000)/60).toFixed(2)),
				valueIndependent:parseFloat((time / 3600).toFixed(2))
			},
			{
				format:"d",
			 	tooltip:"days",
				value:parseFloat(((distance * pace / 1000)/60/24).toFixed(2)),
				valueIndependent:parseFloat((time / 3600 / 24).toFixed(2))
			},
			{
				format:"mo",
			 	tooltip:"months",
				value:parseFloat(((distance * pace / 1000)/60/24/(365/12)).toFixed(2)),
				valueIndependent:parseFloat((time / 3600 / 24 / (365 / 12)).toFixed(2))
			},
			{
				format:"yr",
			 	tooltip:"years",
				value:parseFloat(((distance * pace / 1000)/60/365).toFixed(2)),
				valueIndependent:parseFloat((time / 3600 / 24 / 365).toFixed(2))
			},
		],
		pace:[
			{
				format:"min/km",
				tooltip:"minutes per kilometre",
				value:(time / (distance / 1000) / 60).toFixed(2),
				valueIndependent:parseFloat((pace).toFixed(2))
			},
			{
				format:"min/mi",
				tooltip:"minutes per miles",
				value:(time / (distance / 1000) / 60 * 1.609344).toFixed(2),
				valueIndependent:parseFloat((pace * 1.609344).toFixed(2))
			},
			{
				format:"km/h",
				tooltip:"kilometres per hour",
				value:((distance * 1000) / (time * 3600)).toFixed(2),
				valueIndependent:parseFloat((60 / pace).toFixed(2))
			},
			{
				format:"m/s",
				tooltip:"metres per second",
				value:(distance / time).toFixed(2),
				valueIndependent:parseFloat((16.666666666667 / pace).toFixed(2))
			}
		]
	}

	return (
		<Grid container spacing={2}>
			{inputsToDisplay.map(input => (
				<Grid 
					item
					key={input}
					xs={12 / inputsToDisplay.length}>	
					<Paper elevation={3} className={classes.resultPaper}>
						<TableContainer>
							<Table size="small">
								<TableHead>
									<TableRow>
										<TableCell colSpan="100%" align="center">
											<Typography variant="h4" component="h3" className={classes.tableTitle}>{input}</Typography>
										</TableCell>
									</TableRow>
								</TableHead>
								<TableBody className={classes.tableBody}>
									{formats[input].map(format => (
										<TableRow
											key={format.format}>
											<TableCell
												className={`${classes.tableCell} ${classes.tableCellLeft}`}>
												<Typography
													className={classes.resultValue}
													align="right">
													{input === missingInput ? format.value : format.valueIndependent}
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
				</Grid>
			))}
		</Grid>
	)
}

export default ResultContainer;