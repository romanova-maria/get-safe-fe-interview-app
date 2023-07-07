import {useState} from 'react';
import {StepComponent} from './step';
import NextButton from './NextButton';

const MIN_NAME_LENGTH = 2;

export type NameStepData = {
	firstName: string;
	lastName: string;
}

const NameStep: StepComponent = ({ onSubmitData }) => {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	// todo: investigate name requirements and improve validation
	const isDisabled = firstName.length < MIN_NAME_LENGTH || lastName.length < MIN_NAME_LENGTH;

	return <>
		<div>
			First name:{' '}
			<input
				type="string"
				onChange={({ target: { value } }) => {
					setFirstName(value);
				}}
				value={firstName}
			/>
		</div>
		<div>
			Last name:{' '}
			<input
				type="string"
				onChange={({ target: { value } }) => {
					setLastName(value);
				}}
				value={lastName}
			/>
		</div>

		<NextButton
			onClick={() => {
				if (isDisabled) { return; }
				onSubmitData<NameStepData>({ firstName, lastName });
			}}
      disabled={isDisabled}
      testId='name-submit-next'
		/>
	</>
}

export default NameStep;