import React from 'react';
import moment from 'moment';
moment().format();

class Louisiana extends React.Component {
	state = { refill: null, newRx: null };

	componentDidMount() {
		setInterval(() => {
			const cutoffRefill = moment({ hour: 21, minute: 30, seconds: 0 });
			const cutoffNew = moment({ hour: 22, minute: 0, seconds: 0 });
			const currentTime = moment();
			const timeLeftRefill = cutoffRefill.subtract(currentTime);
			const timeLeftNew = cutoffNew.subtract(currentTime);
			this.setState({
				refill: timeLeftRefill.format('(HH:mm:ss [Before Cutoff])'),
				newRx: timeLeftNew.format('(HH:mm:ss [Before Cutoff])'),
			});
		}, 1000);
	}

	componentWillUnmount() {
		// fix Warning: Can't perform a React state update on an unmounted component
		this.setState = (state, callback) => {
			return;
		};
	}

	render() {
		return (
			<>
				<div id="state" className="ui centered padded grid">
					<div className="row">
						<h1 className="ui header">LOUISIANA</h1>
					</div>
				</div>
				<div id="content" className="ui padded grid">
					<div className="row dailies">
						<h3>
							<u>Dailies:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>Filled in Louisiana</li>
							<li>
								Enter STATs into the current day's dailies batch (e.g.,{' '}
								<em>LA 19</em> if today was October 19<sup>th</sup>)
							</li>
							<li>
								Enter PCPs into the next day's dailies batch (e.g., <em>LA 20</em>{' '}
								if today was October 19<sup>th</sup>)
							</li>
						</ul>
					</div>
					<div className="row cycleFill">
						<h3>
							<u>Cycle Fill:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>Filled in Louisiana</li>
							<li>Enter active month's Cycle Fill medications in the CF batch</li>
						</ul>
					</div>
					<div className="row lateCycleFill">
						<h3>
							<u>Late Cycle Fill:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>Filled in Louisiana</li>
							<li>
								Enter active month's Cycle Fill medications once the LCF batch is
								created
							</li>
						</ul>
					</div>
					<div className="row cutoffTimes">
						<h3>
							<u>Cutoff Times:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>
								<span className="temporary">TBD</span>
							</li>
						</ul>
					</div>
					<div className="row inventory">
						<h3>
							<u>Inventory Specialist:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>Kyle Green</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Louisiana;
