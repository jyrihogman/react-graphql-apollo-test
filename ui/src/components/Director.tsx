import * as React from 'react';
import { withStyles, Theme, WithStyles } from 'material-ui/styles';
import { ClassNameMap, CSSProperties } from 'material-ui/styles/withStyles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from 'material-ui/Grid';
import Tooltip from 'material-ui/Tooltip';
import IDirector from '../interfaces/director'

type withStyle = 'card' | 'media' | 'actions' | 'expand' | 'expandOpen' | 'avatar' | 'iconLiked';

const styles = (theme: Theme): Record<string, CSSProperties> => ({
	card: {
		maxWidth: 400
	},
	iconLiked: {
		color: 'red',
	},
	media: {
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	actions: {
		display: 'flex',
	},
	expand: {
		transform: 'rotate(0deg)',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest,
		}),
		marginLeft: 'auto',
	},
	expandOpen: {
		transform: 'rotate(180deg)',
	},
	avatar: {
		backgroundColor: theme.palette.primary.main,
		color: '#ffffff'
	},
});


interface DirectorProps {
	director: IDirector;
	classes?: ClassNameMap<keyof typeof styles>;
}

interface DirectorState {
	liked: boolean;
}

class Director extends React.Component<DirectorProps & WithStyles<withStyle>, DirectorState> {
	state = { liked: false };

	handleLike = () => {
		this.setState((state: DirectorState) => ({ liked: !state.liked }));
	};

	render() {
		const { classes, director } = this.props;

		return (
			<Grid md={4} item>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Tooltip id="tooltip-bottom" title={director.name} placement="bottom">
								<Avatar aria-label="Genre" className={classes.avatar}>
									{director.name.charAt(0)}
								</Avatar>
							</Tooltip>

						}
						action={
							<IconButton>
								<MoreVertIcon />
							</IconButton>
						}
						title={director.name}
						subheader={director.country}
					/>
					<CardContent>
						<Typography component="p">
							{director.birthdate}
						</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
						<IconButton onClick={this.handleLike} aria-label="Add to favorites">
							<FavoriteIcon className={this.state.liked ? classes.iconLiked : undefined} />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}


export default withStyles(styles)<DirectorProps>(Director);