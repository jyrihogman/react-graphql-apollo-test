import * as React from 'react';
import { withStyles } from 'material-ui/styles';
import Card, { CardHeader, CardContent, CardActions } from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import red from 'material-ui/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Tooltip, Grid } from 'material-ui';

const styles = (theme: any) => ({
	card: {
		maxWidth: 400
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
		backgroundColor: red[500],
		color: '#ffffff'
	},
});

class Movie extends React.Component<any, any> {
	state = { expanded: false };

	handleExpandClick = () => {
		this.setState({ expanded: !this.state.expanded });
	};

	render() {
		const { classes, movie } = this.props;

		return (
			<Grid md={4} item>
				<Card className={classes.card}>
					<CardHeader
						avatar={
							<Tooltip id="tooltip-bottom" title={movie.genre} placement="bottom">
								<Avatar aria-label="Genre" className={classes.avatar}>
									{movie.genre.charAt()}
								</Avatar>
							</Tooltip>

						}
						action={
							<IconButton>
								<MoreVertIcon />
							</IconButton>
						}
						title={movie.title}
						subheader={movie.year}
					/>
					<CardContent>
						<Typography component="p">
							{movie.description}
						</Typography>
					</CardContent>
					<CardActions className={classes.actions} disableActionSpacing>
						<IconButton aria-label="Add to favorites">
							<FavoriteIcon />
						</IconButton>
					</CardActions>
				</Card>
			</Grid>
		);
	}
}


export default withStyles(styles)(Movie);