import * as React from 'react';
import { withStyles, Theme, WithStyles } from 'material-ui/styles';
// import TextField from 'material-ui/TextField/TextField';
import Paper from 'material-ui/Paper';
import { Grid } from 'material-ui';
import LoginForm from './LoginForm';
// import Toolbar from 'material-ui/Toolbar';
// import IconButton from 'material-ui/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Typography from 'material-ui/Typography';
// import { CSSProperties } from 'material-ui/styles/withStyles';
// import { CSSProperties, ClassNameMap } from 'material-ui/styles/withStyles';

type withStyle = 'container' | 'textField' | 'menu' | 'root' |
	'root2' | 'typography' | 'button' | 'menuButton' | 'flex' | 'tabsRoot';

export const styles = (theme: Theme): any => ({
	root: theme.mixins.gutters({
		marginTop: '7%',
		paddingTop: 24,
		paddingBottom: 24,
	}),
});

interface LoginProps {
	classes?: WithStyles;
}

class Login extends React.Component<LoginProps & WithStyles<withStyle>, {}> {
	render() {
		const { classes } = this.props!;

		return (
			<Grid lg={12} justify="center" alignItems="center" container item>
				<Grid lg={3} item />
				<Grid lg={3} item>
					<Paper elevation={4} style={{ width: '100%', marginTop: '30%' }}>
						<div
							className={classes.root}
						>
							<LoginForm {...this.props} />
						</div>
					</Paper>
				</Grid>
				<Grid lg={3} item />
			</Grid >
		);
	}
}

export default withStyles(styles, { withTheme: true })<LoginProps>(Login);