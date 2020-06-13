import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Textfield from "@material-ui/core/TextField";
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";

const useStyles = makeStyles(theme => ({
	root:{
		display:"flex",
		marginBottom:theme.spacing(1)
	},
	inputField: {
		textTransform:"capitalize",
		height:"56px"
	},
	inputAdornment: {
		textTransform:"lowercase"
	},
	iconButton: {
		height:"56px",
		width:"56px"
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
		<Box className={classes.root}>
			<FormControl
				fullWidth>
				<Textfield
					// Not type="number" because of inconsistencies about allowing non-numeric characters
					// (https://material-ui.com/components/text-fields/#shrink)
					type="text"
					className={classes.inputField}
					label={props.label}
					variant="outlined"
					value={props.value}
					InputProps={{
						endAdornment: <InputAdornment position="end" className={classes.inputAdornment}>{props.adornment}</InputAdornment>
					}}
					onChange={(event) => props.change(event,props.inputName)}
					error={inputError ? true : false}
				/>
				<FormHelperText
					className={classes.inputHelper}
					error>{inputError ? inputErrorMessage : " "}</FormHelperText>
			</FormControl>
			<IconButton 
				className={classes.iconButton}
				color="primary"
				disabled={props.value.length ? false : true}>
				<DeleteIcon />
			</IconButton>
		</Box>
	);
};

export default InputField;