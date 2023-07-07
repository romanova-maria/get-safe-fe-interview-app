import {Link} from 'react-router-dom';
import React from 'react';
import {Insurance} from './insurance/insurance';

const Home = ({insurances}: {insurances: Insurance[]}) => (
	<>
		<p>Welcome to Getsafe's Insurance</p>
		{insurances.map((insurance) =>
			<Link key={insurance.getName()} to={`${insurance.getRoute()}`} className='App-link insurance-link' data-testid={insurance.getId()}>
				{`${insurance.getLabel()}: get started!`}
			</Link>
		)}
	</>
)

export default Home;