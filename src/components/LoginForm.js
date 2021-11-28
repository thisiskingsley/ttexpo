import React from 'react';
import { Form, Field } from 'react-final-form';

const LoginForm = props => {
	const renderError = ({ error, touched }) => {
		if (touched && error) {
			return (
				<div className="ui pointing red basic label">
					<div className="header">{error}</div>
				</div>
			);
		}
	};

	const renderInput = ({ placeholder, input, label, meta }) => {
		const className = `inline field ${meta.error && meta.touched ? 'error' : ''}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input {...input} autoComplete="off" placeholder={placeholder} />
				{renderError(meta)}
			</div>
		);
	};
	const onSubmit = formValues => {
		props.onSubmit(formValues);
	};
	return (
		<div id="login-form" className="ui container">
			<Form
				onSubmit={onSubmit}
				validate={formValues => {
					const errors = {};

					if (!formValues.username) {
						errors.username = 'You must enter a username!';
					}
					if (!formValues.password) {
						errors.password = 'You must enter a password!';
					}

					return errors;
				}}
				render={({ handleSubmit }) => (
					<form onSubmit={handleSubmit} className="ui form error">
						<Field
							name="username"
							component={renderInput}
							label="Username:"
							placeholder="Enter Username"
						/>
						<Field
							name="password"
							type="password"
							component={renderInput}
							label="Password:"
							placeholder="Enter Password"
						/>

						<div className="actions">
							<button className="ui button primary">Log In</button>
						</div>
					</form>
				)}
			/>
		</div>
	);
};

export default LoginForm;
