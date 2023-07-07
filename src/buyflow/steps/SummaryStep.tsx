import { Link } from 'react-router-dom'
import {CollectedData} from '../Buyflow';

interface SummaryStepProps {
  collectedData: CollectedData;
  insuranceId: string;
}

const SummaryStep = ({collectedData, insuranceId}: SummaryStepProps) => {
  return (
    <>
      {Object.keys(collectedData).map(key => <div key={key}>{`${key}: ${collectedData[key]}`}</div>)}
      <div>
        <Link to={`/purchased=${insuranceId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
