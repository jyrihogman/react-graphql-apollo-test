import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import * as classNames from 'classnames';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List from 'material-ui/List';
// import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { gql } from 'apollo-boost';
import { graphql, QueryProps } from 'react-apollo';
import { mailFolderListItems, otherMailFolderListItems } from './DrawerList';
import MovieList from './MovieList';
import { Grid, Theme } from 'material-ui';
import { CSSProperties, WithStyles } from 'material-ui/styles/withStyles';
import { IMovie } from '../../api/models/movie';

const drawerWidth = 240;

const styles = (theme: Theme): Record<string, CSSProperties> => ({
	root: {
		flexGrow: 1,
	},
	appFrame: {
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',
	},
	appBar: {
		position: 'absolute',
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'appBarShift-left': {
		marginLeft: drawerWidth,
	},
	'appBarShift-right': {
		marginRight: drawerWidth,
	},
	menuButton: {
		marginLeft: 12,
		marginRight: 20,
	},
	hide: {
		display: 'none',
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-end',
		padding: '0 8px',
		...theme.mixins.toolbar,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	'content-right': {
		marginRight: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},
	'contentShift-right': {
		marginRight: 0,
	},
});

const getMoviesQuery = gql`
{
  movies {
    id
    title
    genre
    description
    director {
      name
    }
    year
  }
}
`

interface AppDrawerProps {
	data: any & QueryProps;
}

interface AppDrawerState {
	open: boolean;
}

class AppDrawer extends React.Component<AppDrawerProps & WithStyles, AppDrawerState>{
	state = {
		open: false,
	};

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;

		const drawer = (
			<Drawer
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper,
				}}
			>
				<div className={classes.drawerHeader}>
					<IconButton onClick={this.handleDrawerClose}>
						{theme!.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>{mailFolderListItems}</List>
				<Divider />
				<List>{otherMailFolderListItems}</List>
			</Drawer>
		);

		return (
			<Grid container className={classes.root}>
				<Grid className={classes.appFrame}>
					<AppBar
						className={classNames(classes.appBar, {
							[classes.appBarShift]: open,
							[classes[`appBarShift-left`]]: open,
						})}
					>
						<Toolbar disableGutters={!open}>
							<IconButton
								color="inherit"
								aria-label="open drawer"
								onClick={this.handleDrawerOpen}
								className={classNames(classes.menuButton, open && classes.hide)}
							>
								<MenuIcon />
							</IconButton>
							{/* <Typography variant="title" color="inherit" noWrap>
								E
							</Typography> */}
						</Toolbar>
					</AppBar>
					{drawer}
					<main
						className={classNames(classes.content, classes[`content-left`], {
							[classes.contentShift]: open,
							[classes[`contentShift-left`]]: open,
						})}
					>
						<div className={classes.drawerHeader} />
						<Grid style={{ paddingLeft: '6%' }} item container spacing={16} xs={12}>
							{this.props.data.loading ? null : <MovieList movies={this.props.data.movies} />}
						</Grid>
					</main>
				</Grid>
			</Grid>
		);
	}
}

export default graphql(getMoviesQuery)(withStyles(styles, { withTheme: true })(AppDrawer));