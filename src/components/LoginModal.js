import React from 'react';
import LoginForm from './LoginForm';
import { Button, Modal } from 'semantic-ui-react';

function exampleReducer(state, action) {
	switch (action.type) {
		case 'OPEN_MODAL':
			return { open: true };
		case 'CLOSE_MODAL':
			return { open: false };
		default:
			throw new Error();
	}
}

const LoginModal = () => {
	const [state, dispatch] = React.useReducer(exampleReducer, {
		open: false,
	});
	const { open } = state;

	return (
		<div>
			<Button primary onClick={() => dispatch({ type: 'OPEN_MODAL' })}>
				Log In
			</Button>

			<Modal id="login-modal" open={open} onClose={() => dispatch({ type: 'CLOSE_MODAL' })}>
				<Modal.Header>Please Log In</Modal.Header>
				<Modal.Content>
					<LoginForm />
				</Modal.Content>
			</Modal>
		</div>
	);
};

export default LoginModal;
