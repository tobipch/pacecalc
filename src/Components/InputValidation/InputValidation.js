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
	}

	// Validate input content
	for(let input of props.inputs){
		const unitRegex = props.units[input.inputName].find(el => el.unit === input.inputUnit).inputValidation;
		const inputValidationRegex = unitRegex || /^\d*(\.?\d+?$|\.$)/;
		
		if(input.inputValue.match(inputValidationRegex) === null && input.inputValue.length > 0){
			inputsValid = false;
		}
	}

	return inputsValid ? props.children : validationResult;
}

export default InputValidation;