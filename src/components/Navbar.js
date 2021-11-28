import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Menu } from 'semantic-ui-react';

class Navbar extends Component {
	handleItemClick = (e, { name }) => this.props.setState(name);

	render() {
		const { activeItem } = this.props.state;

		return (
			<>
				<div id="largeNavbar">
					<Menu fixed="top" pointing widths={10}>
						<Menu.Item
							name="texas"
							active={activeItem === 'texas'}
							onClick={this.handleItemClick}
							as={Link}
							to="/"
						/>
						<Menu.Item
							name="illinois"
							active={activeItem === 'illinois'}
							onClick={this.handleItemClick}
							as={Link}
							to="/illinois"
						/>
						<Menu.Item
							name="new jersey"
							active={activeItem === 'new jersey'}
							onClick={this.handleItemClick}
							as={Link}
							to="/newjersey"
						/>
						<Menu.Item
							name="georgia"
							active={activeItem === 'georgia'}
							onClick={this.handleItemClick}
							as={Link}
							to="/georgia"
						/>
						<Menu.Item
							name="utah"
							active={activeItem === 'utah'}
							onClick={this.handleItemClick}
							as={Link}
							to="/utah"
						/>
						<Menu.Item
							name="south carolina"
							active={activeItem === 'south carolina'}
							onClick={this.handleItemClick}
							as={Link}
							to="/southcarolina"
						/>
						<Menu.Item
							name="louisiana"
							active={activeItem === 'louisiana'}
							onClick={this.handleItemClick}
							as={Link}
							to="/louisiana"
						/>
						<Menu.Item
							name="ohio"
							active={activeItem === 'ohio'}
							onClick={this.handleItemClick}
							as={Link}
							to="/ohio"
						/>
						<Menu.Item
							name="kentucky"
							active={activeItem === 'kentucky'}
							onClick={this.handleItemClick}
							as={Link}
							to="/kentucky"
						/>
						<Menu.Item
							name="tennessee"
							active={activeItem === 'tennessee'}
							onClick={this.handleItemClick}
							as={Link}
							to="/tennessee"
						/>
					</Menu>
				</div>
				<div id="smallNavbar">
					<Menu fixed="top" secondary>
						<Dropdown icon="dropdown" text="States" item>
							<Dropdown.Menu>
								<Dropdown.Item
									name="texas"
									onClick={this.handleItemClick}
									text="Texas"
									as={Link}
									to="/"
								/>
								<Dropdown.Item
									name="illinois"
									onClick={this.handleItemClick}
									text="Illinois"
									as={Link}
									to="/illinois"
								/>
								<Dropdown.Item
									name="new jersey"
									onClick={this.handleItemClick}
									text="New Jersey"
									as={Link}
									to="/newjersey"
								/>
								<Dropdown.Item
									name="georgia"
									onClick={this.handleItemClick}
									text="Georgia"
									as={Link}
									to="/georgia"
								/>
								<Dropdown.Item
									name="utah"
									onClick={this.handleItemClick}
									text="Utah"
									as={Link}
									to="/utah"
								/>
								<Dropdown.Item
									name="south carolina"
									onClick={this.handleItemClick}
									text="South Carolina"
									as={Link}
									to="/southcarolina"
								/>
								<Dropdown.Item
									name="louisiana"
									onClick={this.handleItemClick}
									text="Louisiana"
									as={Link}
									to="/louisiana"
								/>
								<Dropdown.Item
									name="ohio"
									onClick={this.handleItemClick}
									text="Ohio"
									as={Link}
									to="/ohio"
								/>
								<Dropdown.Item
									name="kentucky"
									onClick={this.handleItemClick}
									text="Kentucky"
									as={Link}
									to="/kentucky"
								/>
								<Dropdown.Item
									name="tennessee"
									onClick={this.handleItemClick}
									text="Tennessee"
									as={Link}
									to="/tennessee"
								/>
							</Dropdown.Menu>
						</Dropdown>
					</Menu>
				</div>
			</>
		);
	}
}

export default Navbar;
