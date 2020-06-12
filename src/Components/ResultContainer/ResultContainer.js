import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyle = makeStyles(theme => ({
	resultPaper:{
		padding:theme.spacing(2)
	}
}));

const ResultContainer = props => {
	const classes = useStyle();

	let resultMessage = "";
	let resultTitle = "";
	const inputs = [...props.inputs];
	const distanceInput = inputs.find(el => el.inputName === "distance");
	const timeInput = inputs.find(el => el.inputName === "time");
	const paceInput = inputs.find(el => el.inputName === "pace");
	const distance = distanceInput.inputValue;
	const time = timeInput.inputValue;
	const pace = paceInput.inputValue;

	if(!props.inputsWithValue.includes("distance")){
		const newDistance = (time * 60 / (pace * 60) * 1000).toFixed(2);
		resultMessage = newDistance + " " + distanceInput.inputFormat;
		resultTitle = "Distance";
	} else if (!props.inputsWithValue.includes("time")){
		const newTime = (distance * (pace * 60) / 1000 / 60).toFixed(2);
		const newTimeMinutes = ("0" + Math.floor(newTime)).slice(-2);
		const newTimeSeconds = ((newTime - newTimeMinutes) * 60).toFixed(2);
		resultMessage = newTimeMinutes + ":" + newTimeSeconds + " " + timeInput.inputFormat;
		resultTitle = "Time";
	} else if (!props.inputsWithValue.includes("pace")){
		const newPace = (time * 60 / (distance / 1000) / 60).toFixed(2);
		resultMessage = newPace + " " + paceInput.inputFormat;	
		resultTitle = "Pace";
	}

	if(resultMessage.length){
		return (
			<Paper elevation="4" className={classes.resultPaper}>
				<Typography variant="h4" component="h3" gutterBottom>{resultTitle}</Typography>
				<b>{resultMessage}</b>
			</Paper>
		)
	} else {
		return null;
	}
}

export default ResultContainer;