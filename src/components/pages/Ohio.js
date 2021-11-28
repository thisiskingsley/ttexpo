import React from 'react';

class Ohio extends React.Component {
	render() {
		return (
			<>
				<div id="state" className="ui centered padded grid">
					<div className="row">
						<h1 className="ui header">OHIO</h1>
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
							<li>Filled in Austin</li>
							<li>
								Enter STATs into the current day's dailies batch (e.g.,{' '}
								<em>D1019</em> if today was October 19<sup>th</sup>)
							</li>
							<li>
								Enter PCPs into the next day's dailies batch (e.g., <em>D1020</em>{' '}
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
							<li>Filled in Austin</li>
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
							<li>Filled in Austin</li>
							<li>
								Enter active month's Cycle Fill medications once the LCF batch is
								created
							</li>
						</ul>
					</div>
					<div className="row cutOffTimes">
						<h3>
							<u>Cut Off Times:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>Refills: 3:30PM CST</li>
							<li>New Prescriptions: 4:00PM CST</li>
						</ul>
					</div>
					<div className="row inventory">
						<h3>
							<u>Inventory Specialist:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>
								Kyle Green <span className="temporary">(temporarily)</span>
							</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Ohio;