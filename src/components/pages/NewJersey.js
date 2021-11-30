import React from 'react';
import moment from 'moment';
moment().format();

class NewJersey extends React.Component {
	state = { nursingNS1: null, nursingNS2: null, nursingS: null, nursingN: null };

	componentDidMount() {
		setInterval(() => {
			const cutoffNS1 = moment({ hour: 18, minutes: 30, seconds: 0 });
			const cutoffNS2 = moment({ hour: 22, minute: 30, seconds: 0 });
			const cutoffS = moment({ hour: 18, minutes: 30, seconds: 0 });
			const cutoffN = moment({ hour: 20, minute: 30, seconds: 0 });
			const currentTime = moment();
			const timeLeftNS1 = cutoffNS1.subtract(currentTime);
			const timeLeftNS2 = cutoffNS2.subtract(currentTime);
			const timeLeftS = cutoffS.subtract(currentTime);
			const timeLeftN = cutoffN.subtract(currentTime);
			this.setState({
				nursingNS1: timeLeftNS1.format('(HH:mm:ss [Before Cutoff])'),
				nursingNS2: timeLeftNS2.format('(HH:mm:ss [Before Cutoff])'),
				nursingS: timeLeftS.format('(HH:mm:ss [Before Cutoff])'),
				nursingN: timeLeftN.format('(HH:mm:ss [Before Cutoff])'),
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
						<h1 className="ui header">NEW JERSEY</h1>
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
							<li>Filled in New Jersey</li>
							<li>
								Enter STATs into the current day's NJ batch (e.g., <em>NJ 19</em> if
								today was October 19<sup>th</sup>)
							</li>
							<li>
								Enter Shelf PCPs into the next day's NJ batch (e.g., <em>NJ 20</em>{' '}
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
							<li>Filled in New Jersey</li>
							<li>
								Enter active month's Cycle Fill medications once the NJ LCF batch is
								created
							</li>
						</ul>
					</div>

					<div className="row cutoffTimes">
						<h3>
							<u>Cutoff Times by Nursing Station ID:</u>
						</h3>
					</div>
					<div className="row">
						<ul>
							<li>
								<span className="nursing">
									These nursing stations have <b>2 deliveries</b>:
								</span>
								<ul>
									<li>
										Nursing Station IDs ending with "
										<span className="highlight">N</span>" or "
										<span className="highlight">S</span>" (no asterick*):
										<ul>
											<li>
												12:30PM CST{' '}
												<span className="countdown">
													{this.state.nursingNS1}
												</span>
												<ul>
													<li>1PM Delivery</li>
												</ul>
											</li>
											<li>
												4:30PM CST{' '}
												<span className="countdown">
													{this.state.nursingNS2}
												</span>
												<ul>
													<li>5PM Delivery</li>
												</ul>
											</li>
										</ul>
									</li>
								</ul>
							</li>
							<li>
								<span className="nursing">
									These nursing stations have <b>1 delivery</b>:
								</span>
								<ul>
									<li>
										Nursing Station IDs ending with "
										<span className="highlight">*S</span>":
										<ul>
											<li>
												12:30PM CST{' '}
												<span className="countdown">
													{this.state.nursingS}
												</span>
												<ul>
													<li>1PM Delivery</li>
												</ul>
											</li>
										</ul>
									</li>
									<li>
										Nursing Station IDs ending with "
										<span className="highlight">*N</span>":
										<ul>
											<li>
												2:30PM CST{' '}
												<span className="countdown">
													{this.state.nursingN}
												</span>
												<ul>
													<li>3PM Delivery</li>
												</ul>
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
							<li>Hilary Gerrish</li>
						</ul>
					</div>
				</div>
			</>
		);
	}
}

export default NewJersey;
