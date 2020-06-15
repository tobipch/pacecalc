import React, {useState} from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

// Components
import Header from "./Components/Header/Header";
import InputValidation from "./Components/InputValidation/InputValidation";
import InputContainer from "./Components/InputContainer/InputContainer";
import ResultContainer from "./Components/ResultContainer/ResultContainer";

const useStyle = makeStyles(theme => ({
	container: {
		marginBottom:theme.spacing(4),
		marginTop:theme.spacing(4)
	}
}));

const initialState = {
	inputs: [
		{inputName: "distance", inputValue:"", inputUnit:"m"},
		{inputName: "time", inputValue:"1020", inputUnit:"s"},
		{inputName: "pace", inputValue:"4", inputUnit:"min/km"}
	],
	inputsWithValue: ["time", "pace"]
}

const units = {
	distance: [
		{unit:"m", inputHelper:""}
	],
	time: [
		{unit:"s", inputHelper:""}
	],
	pace: [
		{unit:"min/km", inputHelper:""}
	]
}

const App = props => {
	const classes = useStyle();
	const [inputs, setInputs] = useState(initialState.inputs);
	const [inputsWithValue, setInputsWithValue] = useState(initialState.inputsWithValue);

	const updateInputHandler = (event, inputName, inputValid) => {
		// Update input values
		const inputCopy = [...inputs];
		const inputIndex = inputCopy.findIndex(el => el.inputName === inputName);
		inputCopy[inputIndex] = {
			inputName:inputName,
			inputValue:event.target.value,
			inputUnit:inputCopy.find(el => el.inputName === inputName).inputUnit};
		setInputs(inputCopy);
			
		// Update list containing inputs who have value
		const currentInputsWithValue = [...inputsWithValue];
		if((!event.target.value.length || event.target.value === "0") && currentInputsWithValue.includes(inputName)){
			currentInputsWithValue.splice(currentInputsWithValue.indexOf(inputName),1);
		} else if(!currentInputsWithValue.includes(inputName) && event.target.value !== "0") {
			currentInputsWithValue.push(inputName);
		}
		setInputsWithValue(currentInputsWithValue);
	}
	
	const clearAllInputsHandler = () => {
		setInputs(initialState.inputs);
		setInputsWithValue(initialState.inputsWithValue);
	}
	
	const clearInputHandler = (inputName) => {
		const inputsCopy = [...inputs];
		const inputsWithValueCopy = [...inputsWithValue];
		inputsCopy.find(el => el.inputName === inputName).inputValue = "";
		inputsWithValueCopy.splice(inputsWithValueCopy.indexOf(inputName),1);
		setInputs(inputsCopy);
		setInputsWithValue(inputsWithValueCopy);
	} 

	return (
		<div className="App">
			<Header />
			<Container maxWidth="md" className={classes.container}>
				<InputContainer 
					updateInput={updateInputHandler}
					clearInput={clearInputHandler}
					units={units}
					inputs={inputs}
				/>

				<Button 
					fullWidth 
					onClick={clearAllInputsHandler}
					startIcon={<DeleteIcon />}
					variant="contained"
					color="primary"
					disabled={inputsWithValue.length ? false : true}>
					Clear All
				</Button>
			</Container>
			
			<Divider variant="middle" />

			<Container maxWidth="md" className={classes.container}>
				<InputValidation 
					inputsWithValue={inputsWithValue} 
					inputs={inputs}>
					<ResultContainer 
						inputsWithValue={inputsWithValue} 
						inputs={inputs} />
				</InputValidation>
			</Container>
		</div>
	);
}

export default App;