import {useState} from 'react';
import {StepComponent} from './step';
import NextButton from './NextButton';

export interface EmailStepData {
  email: string;
}

const emailRegex = /^(([^<>()[\],;:\s@]+(\.[^<>()[\],;:\s@]+)*)|(.+))@(([^<>()[\],;:\s@]+\.)+[^<>()[\],;:\s@]{2,})$/i;

const EmailStep: StepComponent = ({ onSubmitData }) => {
  const [email, setEmail] = useState('');
  const isValid = emailRegex.test(email);

  return (
    <>
      <div>
        Email:{' '}
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value)
          }}
          value={email}
        />
      </div>
      <NextButton
        onClick={() => {
          if (!isValid) { return; }
          onSubmitData<EmailStepData>({ email });
        }}
        disabled={!isValid}
        testId='email-submit-next'
      />
    </>
  )
}

export default EmailStep
