import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'
import TextField from 'material-ui/TextField/TextField';
import { withStyles } from 'material-ui/styles';
import { Typography, Divider, Button, Theme } from 'material-ui';
import { loginUser, openRegistrationModal } from '../actions/authActions';
import RegistrationModal from './RegistrationModal';

export const styles = (theme: Theme): any => ({
	container: {
		display: 'flex',
		flexWrap: 'wrap',
	},
	registerLink: {
		cursor: 'pointer',
		'&:hover': {
			textDecoration: 'underline',
		},
	},
	flex: {
		flex: 1
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: 300,
	},
	menu: {
		width: 200,
	},
	typography: {
		fontSize: '22px',
		textAlign: 'center',
		paddingBottom: '7%'
	},
	root: theme.mixins.gutters({
		marginTop: '10%',
		paddingTop: 24,
		paddingBottom: 24,
	}),
	menuButton: {
		marginLeft: -12,
		marginRight: 20,
	},
	tabsRoot: {
		borderBottom: '1px solid #e8e8e8',
	},
});

interface LoginFormState {
	email: string;
	password: string;
	registrationModal: boolean;
}

class LoginForm extends React.Component<any, LoginFormState> {
	state = {
		email: '',
		password: '',
		registrationModal: false
	};

	UNSAFE_componentWillReceiveProps(nextProps: any) {
		console.log(nextProps);
		if (nextProps.isAuthenticated) {
			nextProps.history.push('/app');
			return console.log('authi onnistuii');
		}
		console.log('no ee');
	}

	handleInput = (event: any) => {
		this.setState({
			[event.target.id]: event.target.value
		});
	}

	handleSubmit = () => {
		// console.log(this.props);
		const user = {
			email: this.state.email,
			password: this.state.password,
		};

		this.props.loginUser(user, this.props.history);
	}

	handleCancelRegistration = () => {
		this.setState({
			registrationModal: false,
		});
	}

	handleOpenRegistrationModal = () => {
		this.setState((state: any) => ({
			registrationModal: !state.registrationModal
		}));
	}

	render() {
		const { classes, errors } = this.props;
		return (
			<>
				<Typography className={classes.typography}>Insert Login information!</Typography>
				<Divider />
				<div
					style={{
						paddingTop: '4%',
						paddingBottom: '1%', display: 'flex', justifyContent: 'center', alignItems: 'center'
					}}
				>
					<TextField
						autoFocus
						error={!!errors.username}
						id="email"
						helperText={
							errors.username ? errors.username : <span style={{ color: 'transparent' }}>Purkka</span>
						}
						label="Email"
						placeholder="Email"
						className={classes.textField}
						margin="normal"
						onChange={this.handleInput}
					/>
				</div>
				<div
					style={{
						paddingBottom: '4%', display: 'flex', justifyContent: 'center', alignItems: 'center'
					}}
				>
					<TextField
						error={!!errors.password}
						helperText={
							errors.password ? errors.password : <span style={{ color: 'transparent' }}>Purkka</span>
						}
						id="password"
						label="Password"
						placeholder="Password"
						className={classes.textField}
						margin="normal"
						onChange={this.handleInput}
					/>
				</div>
				<div style={{
					paddingTop: '5%',
					paddingBottom: '10%',
					justifyContent: 'center',
					alignItems: 'center',
					alignContent: 'center',
					display: 'flex',
				}}>
					<Button variant="raised" color="primary" onClick={this.handleSubmit} >Submit</Button>
				</div>
				<Divider />

				<Typography
					style={{ fontSize: '12px' }}
				>
					No account? Register <a className={classes.registerLink} onClick={this.props.openRegistrationModal}>here</a>
				</Typography>
				<RegistrationModal />
			</>
		);
	}
};

const mapStateToprops = (state: any) => {
	console.log(state);
	return {
		isAuthenticated: state.auth.isAuthenticated,
		errors: state.auth.errors,
	}
};

const mapDispatchToProps = {
	loginUser,
	openRegistrationModal
}

export default connect(mapStateToprops, mapDispatchToProps)(withStyles(styles)(LoginForm));