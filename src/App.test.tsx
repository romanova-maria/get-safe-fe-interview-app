import { render, screen } from '@testing-library/react'
import App from './App'
import {Insurance} from './insurance/insurance';
import * as List from './insurance/createInsuranceList';

test('renders title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to Getsafe's Insurance/i);
  expect(linkElement).toBeInTheDocument();
})

test('renders all insurance links', () => {
  jest.spyOn(List, 'createInsuranceList').mockReturnValue(
    [
      new Insurance("dev_ins", "developer", ['email', 'age']),
      // @ts-expect-error: argument of type "doctor" is not assignable to parameter of type 'InsuranceTypes'. Suitable for tests
      new Insurance("doctor_ins", "doctor", ['email', 'age'])
    ]
  );

  render(<App />);
  const devLink = screen.getByTestId("dev_ins");
  expect(devLink).toBeInTheDocument();
  const doctorLink = screen.getByTestId("doctor_ins");
  expect(doctorLink).toBeInTheDocument();
})
