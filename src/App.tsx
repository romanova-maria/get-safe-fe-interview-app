import React from 'react'
import logo from './logo.svg'
import './App.scss'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Buyflow from './buyflow/Buyflow'
import Home from "./Home";
import {createInsuranceList} from "./insurance/createInsuranceList";

const App = () => {
	const insurances = createInsuranceList();

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo"/>
				</header>
				<Routes>
					<Route path="/" element={<Home insurances={insurances} />}/>
					{insurances.map((insurance) =>
						<Route key={`insurance-${insurance.getId()}`} path={insurance.getRoute()} element={<Buyflow insurance={insurance} />} />
					)}
				</Routes>
			</div>
		</Router>
	)
}

export default App
