import EmailStep from '../buyflow/steps/EmailStep';
import AgeStep from '../buyflow/steps/AgeStep';
import NameStep from '../buyflow/steps/NameStep';
import {StepComponent, Steps} from '../buyflow/steps/step';
import {Step} from './step';

export type InsuranceTypes = 'developer' | 'designer';

const StepComponentMap: {[K in Steps]: StepComponent } = {
	email: EmailStep,
	age: AgeStep,
	name: NameStep,
};

export class Insurance {
	private readonly id;
	private readonly name;
	private readonly steps: Step;
	constructor(id: string, name: InsuranceTypes, steps: Steps[]) {
		this.id = id;
		this.name = name;
		this.steps = createStepsChain(steps);
	}

	getId(): string {
		return this.id;
	}

	getName(): string {
		return this.name;
	}

	getSteps(): Step {
		return this.steps;
	}

	getRoute(): string {
		return `/buy/${this.name}`
	}

	getLabel(): string {
		const capitalizedName = this.name.charAt(0).toUpperCase() + this.name.slice(1);
		return `${capitalizedName} Insurance`;
	}
}

function createStepsChain(steps: Steps[]) {
	let lastStep: Step | null = null;
	for (let i=steps.length - 1; i>=0; i--) {
		lastStep = new Step(steps[i], lastStep, StepComponentMap[steps[i]]);
	}

	if (!lastStep) { throw new Error('There are no steps') }
	
	return lastStep;
}