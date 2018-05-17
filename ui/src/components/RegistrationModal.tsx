import React from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Dialog, {
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from 'material-ui/Dialog';
import { connect } from 'react-redux';
import { closeRegistrationModal, registerUser } from '../actions/authActions';

interface RegistrationModalProps {
	open: boolean;
	errors: {
		email?: string,
		name?: string,
		username?: string,
		password?: string,
	};
	registerUser: (user: any) => void;
	closeRegistrationModal: () => void;
};

interface RegistrationModalState {
	email: string;
	name: string;
	username: string;
	password: string;
	isEmailValid: boolean,
	isPasswordValid: boolean,
	isUsernameValid: boolean,
	isNameValid: boolean,
}

class RegistrationModal extends React.Component<RegistrationModalProps, RegistrationModalState> {
	state = {
		email: '',
		name: '',
		username: '',
		password: '',
		isEmailValid: false,
		isPasswordValid: false,
		isUsernameValid: false,
		isNameValid: false,
	};

	setTouched = (e: React.ChangeEvent<HTMLInputElement>): void => {
		if (e.target.id === 'usernameField' && e.target.value.length) {
			this.setState({
				isUsernameValid: true
			});
		}
		if (e.target.id === 'passwordField' && e.target.value.length) {
			this.setState({
				isPasswordValid: true
			});
		}
		if (e.target.id === 'nameField' && e.target.value.length) {
			this.setState({
				isNameValid: true
			});
		}
	}

	validateTextField = (e: React.ChangeEvent<HTMLInputElement>): boolean => {
		if (e.target.id === 'usernameField' || e.target.id === 'passwordField' || e.target.id === 'nameField') {
			return e.target.value.length < 2;
		}

		if (e.target.id === 'emailField') {
			return e.target.value.indexOf('@') === -1 && e.target.value.indexOf('.') === -1;
		}

		return false;
	}

	render() {
		const { open, errors } = this.props;
		return (
			<div>
				<Dialog
					open={open}
					aria-labelledby="form-dialog-title"
				>
					<DialogTitle id="form-dialog-title">Register</DialogTitle>
					<DialogContent>
						<DialogContentText>
							Fill in the details and you are ready to go!
						</DialogContentText>
						<TextField
							required
							style={{ paddingTop: '1%' }}
							fullWidth
							autoFocus
							margin="dense"
							id="emailField"
							label="Email Address"
							type="email"
							error={!!errors.email}
							helperText={
								errors.email ? errors.email : <span style={{ color: 'inherit' }}>Insert a proper email address</span>
							}
							onBlur={this.setTouched}
						/>
						<TextField
							required
							style={{ paddingTop: '2%' }}
							fullWidth
							margin="dense"
							id="nameField"
							label="Name"
							type="text"
							error={!!this.validateTextField && this.state.isNameValid}
							helperText={
								this.validateTextField && this.state.isNameValid ?
									<span style={{ color: 'inherit' }}>Name must be longer than 2 characters</span>
									:
									<span style={{ color: 'inherit' }}>Insert your real name</span>
							}
							onBlur={this.setTouched}
						/>
						<TextField
							required
							style={{ paddingTop: '2%' }}
							fullWidth
							margin="dense"
							id="usernameField"
							label="Username"
							type="text"
							error={!!this.validateTextField && this.state.isUsernameValid}
							helperText={
								this.validateTextField && this.state.isUsernameValid ?
									<span style={{ color: 'inherit' }}>Username must be longer than 2 characters</span>
									:
									<span style={{ color: 'inherit' }}>Insert an username</span>
							}
							onBlur={this.setTouched}
						/>
						<TextField
							required
							style={{ paddingTop: '2%' }}
							fullWidth
							margin="dense"
							id="passwordField"
							label="Password"
							type="password"
							error={!!this.validateTextField && this.state.isPasswordValid}
							helperText={
								this.validateTextField && this.state.isPasswordValid ?
									<span style={{ color: 'inherit' }}>Password must be longer than 2 characters</span>
									:
									<span style={{ color: 'inherit' }}>Insert a password</span>
							}
							onBlur={this.setTouched}
						/>
					</DialogContent>
					<DialogActions>
						<Button onClick={this.props.registerUser} color="primary">
							Subscribe
						</Button>
						<Button onClick={this.props.closeRegistrationModal} color="secondary">
							Cancel
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

const mapStateToprops = (state: any) => ({
	open: state.auth.registrationView,
	errors: state.auth.errors,
});

const mapDispatchToProps = (dispatch: (fn: {}) => void) => ({
	closeRegistrationModal: () => dispatch(closeRegistrationModal()),
	registerUser: (user: any) => dispatch(registerUser(user)),
});

export default connect(mapStateToprops, mapDispatchToProps)(RegistrationModal);