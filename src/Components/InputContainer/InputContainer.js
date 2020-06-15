import React from 'react';
// import Select from "@material-ui/core/Select";

// Components
import InputField from "./InputField/InputField";

const InputContainer = props => {
	const inputsToRender = props.inputs.map(input => {
		const inputHelper = props.units[input.inputName].find(el => el.unit === input.inputUnit).inputHelper;
		return (
			<InputField
				key={input.inputName}
				adornment={input.inputUnit}
				value={input.inputValue}
				inputName={input.inputName}
				change={props.updateInput}
				clearInput={props.clearInput}
				inputHelper={inputHelper === "" ? null : inputHelper}
			/>
		)
	});

	return (
		<>
			{inputsToRender}
		</>
	);
};

export default React.memo(InputContainer);