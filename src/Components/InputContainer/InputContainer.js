import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

// Components
import InputField from "./InputField/InputField";

const useStyles = makeStyles(theme => ({
	iconButton: {
		height:56,
		width:56
	},
	unitSelect: {
		height:56,
		width:"100%"
	}
}));

const InputContainer = props => {
	const classes = useStyles();
	const inputsToRender = props.inputs.map(input => {
		const applyingUnits = props.units[input.inputName];
		const inputUnit = applyingUnits.find(el => el.unit === input.inputUnit);
		const inputHelper = inputUnit === undefined ? null : inputUnit.inputHelper;
		
		const selectItems = applyingUnits.map(unit => {
			return (
				<MenuItem
					key={unit.unit}
					value={unit.unit}>
					{unit.unit}
				</MenuItem>
			)
		})

		return (
			<Grid 
				container
				key={input.inputName}
				spacing={1}>
				<Grid item xs={6} sm={8}>
					<InputField
						adornment={input.inputUnit}
						value={input.inputValue}
						inputName={input.inputName}
						change={props.updateInput}
						clearInput={props.clearInput}
						inputValidation={inputUnit.inputValidation}
						inputValidationMessage={inputUnit.inputValidationMessage}
						inputHelper={inputHelper == null ? null : inputHelper}
					/>
				</Grid>
				
				<Grid item xs={4} sm={3}>
					<Select 
						className={classes.unitSelect}
						variant="outlined"
						value={input.inputUnit}
						onChange={(event) => props.updateUnit(event.target.value, input.inputName)}>
						{selectItems}
					</Select>
				</Grid>

				<Grid item xs={2} sm={1}>
					<IconButton 
						className={classes.iconButton}
						color="primary"
						disabled={input.inputValue.length ? false : true}
						onClick={() => props.clearInput(input.inputName)}>
						<DeleteIcon />
					</IconButton>
				</Grid>
			</Grid>
		)
	});

	return (
		<>
			{inputsToRender}
		</>
	);
};

export default React.memo(InputContainer);