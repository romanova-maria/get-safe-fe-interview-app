import {ReactElement} from 'react';

export type Steps = 'email' | 'age' | 'name';

export interface StepProps {
	onSubmitData: <T>(data: T) => void;
}

export type StepComponent = (props: StepProps) => ReactElement;