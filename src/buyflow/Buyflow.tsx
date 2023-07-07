import { useState } from 'react'
import {Insurance} from '../insurance/insurance';
import SummaryStep from './steps/SummaryStep';
import {Step} from '../insurance/step';

// todo: investigate possible step data types and improve CollectedData type
export type CollectedData = Record<string, any>;

const Buyflow = ({insurance}: {insurance: Insurance}) => {
  const [collectedData, updateData] = useState<CollectedData>({});
  const [step, setStep] = useState<Step | null>(insurance.getSteps());

  const onSubmitData = <T,>(data: T) => {
    updateData({...collectedData, ...data});

    if (!step) { return; }
    setStep(step.next());
  }

  const StepComponent = () => step ?
    step.getComponent({onSubmitData: onSubmitData}) :
    <SummaryStep collectedData={collectedData} insuranceId={insurance.getId()} />;

  return (
    <>
      <h4>Buying {insurance.getLabel()}</h4>
      <StepComponent />
    </>
  )
}

export default Buyflow
