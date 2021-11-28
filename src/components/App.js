import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; //version 6 is DIFFERENT
import Navbar from './Navbar';
import Texas from './pages/Texas';
import Illinois from './pages/Illinois';
import NewJersey from './pages/NewJersey';
import Georgia from './pages/Georgia';
import Utah from './pages/Utah';
import SouthCarolina from './pages/SouthCarolina';
import Louisiana from './pages/Louisiana';
import Ohio from './pages/Ohio';
import Kentucky from './pages/Kentucky';
import Tennessee from './pages/Tennessee';
import BackgroundImage from './BackgroundImage';

class App extends React.Component {
	state = { activeItem: window.sessionStorage.getItem('activeItem') || 'texas' };

	newState = prop => {
		window.sessionStorage.setItem('activeItem', prop);
		this.setState({ activeItem: prop });
	};

	render() {
		return (
			<div className="ui container">
				<BackgroundImage />
				<Router>
					<Navbar state={this.state} setState={this.newState} />
					<Routes>
						<Route path="/" element={<Texas />} />
						<Route path="/illinois" element={<Illinois />} />
						<Route path="/newjersey" element={<NewJersey />} />
						<Route path="/georgia" element={<Georgia />} />
						<Route path="/utah" element={<Utah />} />
						<Route path="/southcarolina" element={<SouthCarolina />} />
						<Route path="/louisiana" element={<Louisiana />} />
						<Route path="/ohio" element={<Ohio />} />
						<Route path="/kentucky" element={<Kentucky />} />
						<Route path="/tennessee" element={<Tennessee />} />
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
