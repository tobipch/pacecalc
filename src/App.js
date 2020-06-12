import React, {useState} from 'react';
// import {makeStyles} from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";

// Components
import Header from "./Components/Header/Header";
import InputValidation from "./Components/InputValidation/InputValidation";
import InputContainer from "./Components/InputContainer/InputContainer";

// const useStyle = makeStyles(theme => ({
// 	paper: {
// 		padding:theme.spacing(1.5)
// 	}
// }));

const initialState = {
	inputs: [
		{inputName: "distance", inputValue:"", inputFormat:"m"},
		{inputName: "time", inputValue:"", inputFormat:"min"},
		{inputName: "pace", inputValue:"", inputFormat:"min/km"}
	],
	inputsWithValue: []
}

const App = props => {
	//const classes = useStyle();
	const [inputs, setInputs] = useState(initialState.inputs);
	const [inputsWithValue, setInputsWithValue] = useState(initialState.inputsWithValue);

	const updateInputHandler = (event, inputName, inputValid) => {
		// Update input values
		const inputCopy = [...inputs];
		const inputIndex = inputCopy.findIndex(el => el.inputName === inputName);
		inputCopy[inputIndex] = {
			inputName:inputName,
			inputValue:event.target.value,
			inputFormat:inputCopy.find(el => el.inputName === inputName).inputFormat};
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

	const deleteInputHandler = () => {
		setInputs(initialState.inputs);
		setInputsWithValue(initialState.inputsWithValue);
	}

	return (
		<div className="App">
			<Header />
			<Container maxWidth="md">
				<InputContainer 
					updateInput={updateInputHandler}
					inputs={inputs}
				/>

				<Button 
					fullWidth 
					onClick={deleteInputHandler}
					startIcon={<DeleteIcon />}
					variant="contained"
					color="primary">
					Clear Input
				</Button>

				<InputValidation 
					inputsWithValue={inputsWithValue} 
					inputs={inputs}
				/>
			</Container>
		</div>
	);
}

export default App;