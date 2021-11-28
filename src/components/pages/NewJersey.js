import React from 'react';

class NewJersey extends React.Component {
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
							<li>
								Filled in Austin <span className="temporary">(temporarily)</span>
							</li>
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

					<div className="row cutOffTimes">
						<h3>
							<u>Cut Off Times by Nursing Station ID:</u>
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
												12:30PM CST
												<ul>
													<li>1PM Delivery</li>
												</ul>
											</li>
											<li>
												4:30PM CST
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
												12:30PM CST
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
												2:30PM CST
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
