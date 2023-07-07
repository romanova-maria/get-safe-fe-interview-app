import {ReactElement} from 'react';
import {StepComponent} from '../buyflow/steps/step';

export class Step {
	private readonly name;
	private readonly nextStep;
	private readonly component;

	constructor(name: string, next: Step | null, component: StepComponent) {
		this.name = name;
		this.nextStep = next;
		this.component = component;
	}

	next(): Step | null {
		return this.nextStep;
	}

	getComponent(props: any): ReactElement {
		return this.component(props);
	}
}