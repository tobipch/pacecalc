import React from "react";
import Alert from "@material-ui/lab/alert";

const InputValidation = props => {
	let validationResult = "";
	let inputsValid = true;
	
	// Validate number of inputs with value
	if(props.inputsWithValue.length > 2){
		inputsValid = false;
		validationResult = <Alert severity="warning">Please enter exactly two values of distance, time and pace.</Alert>;
	} else if(props.inputsWithValue.length === 0){
		inputsValid = false;
		validationResult = <Alert severity="info">Enter two values to calculate the third one!</Alert>;
	} else if(props.inputsWithValue.length === 1){
		inputsValid = false;
	}

	// Validate input content
	for(let input of props.inputs){
		if(input.inputValue.match(/^\d*(\.?\d+?$|\.$)/) === null && input.inputValue.length > 0){
			inputsValid = false;
		}
	}

	return inputsValid ? props.children : validationResult;
}

export default InputValidation;