import React from 'react';

// Components
import InputField from "./InputField/InputField";

const InputContainer = props => {
	const inputsToRender = props.inputs.map(input => {
		return (
			<InputField
				key={input.inputName}
				adornment={input.inputFormat}
				value={input.inputValue}
				inputName={input.inputName}
				change={props.updateInput}
				clearInput={props.clearInput}
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