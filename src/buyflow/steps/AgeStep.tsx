import { useState } from 'react';
import {StepComponent} from './step';
import NextButton from './NextButton';

const MIN_AGE: number = 18;

export interface AgeData {
  age: number;
}

const AgeStep: StepComponent = ({ onSubmitData }) => {
  const [age, setAge] = useState(0);
  const isDisabled = age < MIN_AGE;

  return (
    <>
      <div>
        Age:{' '}
        <input
          type="number"
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
        />
      </div>
      <NextButton
        onClick={() => {
          if (isDisabled) { return; }
          onSubmitData<AgeData>({ age })
        }}
        disabled={isDisabled}
        testId='age-submit-next'
      />
    </>
  )
}

export default AgeStep
