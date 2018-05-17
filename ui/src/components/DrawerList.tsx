import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Tv from '@material-ui/icons/Tv';
import Movie from '@material-ui/icons/Movie';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';
import { Link } from 'react-router-dom';

export const mailFolderListItems = (
	<div>
		<Link to="/app/movies">
			<ListItem dense button>
				<ListItemIcon>
					<Movie />
				</ListItemIcon>
				<ListItemText primary="Movies" />
			</ListItem>
		</Link>
		<ListItem dense button>
			<ListItemIcon>
				<Tv />
			</ListItemIcon>
			<ListItemText primary="TV-shows" />
		</ListItem>
	</div>
);

export const otherMailFolderListItems = (
	<div>
		<ListItem dense button>
			<ListItemIcon>
				<Person />
			</ListItemIcon>
			<ListItemText primary="Actors" />
		</ListItem>
		<Link to="/app/directors">
			<ListItem dense button>
				<ListItemIcon>
					<PersonOutline />
				</ListItemIcon>
				<ListItemText primary="Directors" />
			</ListItem>
		</Link>
	</div>
);