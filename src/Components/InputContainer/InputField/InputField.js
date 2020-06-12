import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Textfield from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';

const useStyles = makeStyles(theme => ({
	inputField: {
		textTransform:"capitalize",
		marginBottom:theme.spacing(1.5)
	},
	inputAdornment: {
		textTransform:"lowercase"
	}
}));

const InputField = props => {
	const classes = useStyles();
	let inputError = false;
	let inputErrorMessage = "";
	
	if(props.value.match(/^\d*(\.?\d+?$|\.$)/) === null && props.value.length > 0){
		inputError = true;
		inputErrorMessage = "Only numerical values are allowed.";
	}

	return (
		<Textfield
			type="text"
			className={classes.inputField}
			label={props.label}
			variant="outlined"
			fullWidth
			value={props.value}
			InputProps={{
				endAdornment: <InputAdornment position="end" className={classes.inputAdornment}>{props.adornment}</InputAdornment>
			}}
			onChange={(event) => props.change(event,props.inputName)}
			error={inputError ? true : false}
			helperText={inputError ? inputErrorMessage : null}
		/>
	);
};

export default InputField;