import * as React from 'react';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Tv from '@material-ui/icons/Tv';
import Movie from '@material-ui/icons/Movie';
import Person from '@material-ui/icons/Person';
import PersonOutline from '@material-ui/icons/PersonOutline';

export const mailFolderListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<Movie />
			</ListItemIcon>
			<ListItemText primary="Movies" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<Tv />
			</ListItemIcon>
			<ListItemText primary="TV-shows" />
		</ListItem>
	</div>
);

export const otherMailFolderListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<Person />
			</ListItemIcon>
			<ListItemText primary="Actors" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PersonOutline />
			</ListItemIcon>
			<ListItemText primary="Directors" />
		</ListItem>
	</div>
);