import React from 'react';
import moment from 'moment';
moment().format();

class Illinois extends React.Component {
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
						<h1 className="ui header">ILLINOIS</h1>
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
							<li>Filled in Illinois</li>
							<li>
								Enter STATs into the current day's IL batch (e.g., <em>IL19</em> if
								today was October 19<sup>th</sup>)
							</li>
							<li>
								Enter Shelf PCPs into the next day's IL batch (e.g., <em>IL20</em>{' '}
								if today was October 19<sup>th</sup>)
							</li>
							<li>
								Enter PCPs replacing calendar CF medications in next day's PCP batch
								(e.g., PCP 20)
								<ul>
									<li>This batch is for the Austin pharmacy</li>
								</ul>
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
					<div className="row primeBatch">
						<h3>
							<u>Prime Batch:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>
								Prime Therapeutics contract still pending
								<ul>
									<li>PRIME plans: PRI3, DPRIL, BCBSIL1, PRMD</li>
								</ul>
							</li>
							<li>
								If less than $100: MCDWO, will attempt re-billing when contract
								becomes active
							</li>
							<li>If over $100: Enter in Prime batch; will send from ATX</li>
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
								Refills: 3:30PM CST{' '}
								<span className="countdown">{this.state.refill}</span>
							</li>
							<li>
								New Prescriptions: 4:00PM CST{' '}
								<span className="countdown">{this.state.newRx}</span>
								<ul>
									<li>
										If prescription is recieved before 3:30PM, you can enter it
										into today's batch until 4PM
									</li>
									<li>
										If you get to that same document after 4PM, enter it into
										the next day's batch
										<ul>
											<li>
												If a prescription <u>needs</u> to go out today, such
												as an antibiotic, make sure you alert the IL staff
											</li>
										</ul>
									</li>
								</ul>
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
							<li>Chase Roberson</li>
							<li>Wade Olsen</li>
							<li>Kyle Green</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default Illinois;
