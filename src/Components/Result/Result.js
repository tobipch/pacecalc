import React from "react";

const Result = props => {
	let resultMessage = "";
	const inputs = [...props.inputs];
	const distanceInput = inputs.find(el => el.inputName === "distance");
	const timeInput = inputs.find(el => el.inputName === "time");
	const paceInput = inputs.find(el => el.inputName === "pace");
	const distance = distanceInput.inputValue;
	const time = timeInput.inputValue;
	const pace = paceInput.inputValue;

	if(!props.inputsWithValue.includes("distance")){
		const newDistance = (time * 60 / (pace * 60) * 1000).toFixed(2);
		resultMessage = "Distance: " + newDistance + " " + distanceInput.inputFormat;
	} else if (!props.inputsWithValue.includes("time")){
		const newTime = (distance * (pace * 60) / 1000 / 60).toFixed(2);
		const newTimeMinutes = ("0" + Math.floor(newTime)).slice(-2);
		const newTimeSeconds = ((newTime - newTimeMinutes) * 60).toFixed(2);
		resultMessage = "Time: " + newTimeMinutes + ":" + newTimeSeconds + " " + timeInput.inputFormat;
	} else if (!props.inputsWithValue.includes("pace")){
		const newPace = (time * 60 / (distance / 1000) / 60).toFixed(2);
		resultMessage = "Pace: " + newPace + " " + paceInput.inputFormat;	
	}

	if(resultMessage.length){
		return (
			<b>{resultMessage}</b>
		)
	} else {
		return null;
	}
}

export default Result;