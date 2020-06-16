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
				spacing={2}>
				<Grid item xs={9}>
					<InputField
						adornment={input.inputUnit}
						value={input.inputValue}
						inputName={input.inputName}
						change={props.updateInput}
						clearInput={props.clearInput}
						inputHelper={inputHelper == null ? null : inputHelper}
					/>
				</Grid>
				
				<Grid item xs={2}>
					<Select 
						className={classes.unitSelect}
						variant="outlined"
						value={input.inputUnit}
						onChange={(event) => props.updateUnit(event.target.value, input.inputName)}>
						{selectItems}
					</Select>
				</Grid>

				<Grid item xs={1}>
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