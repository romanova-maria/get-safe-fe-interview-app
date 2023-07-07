import {ButtonHTMLAttributes} from 'react';

interface NextButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	onClick: () => void;
	disabled: boolean;
	testId: string;
	label?: string;
}

const NextButton = ({onClick, disabled, testId, label = 'Save and Next', ...props}: NextButtonProps) => (
	<button onClick={onClick}
          disabled={disabled}
          data-testid={testId}
          {...props}
	>
		{label}
	</button>
);

export default NextButton;