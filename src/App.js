import React from 'react';
//import { Container, makeStyles, Link, Typography } from '@material-ui/core';
import { makeStyles, Typography } from '@material-ui/core';

import { RecordProvider } from './Context';
import SearchVoters from './SearchVoters';
import ListVoters from './ListVoters';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
	},
	main: {
		padding: theme.spacing(2)
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
		marginTop: 'auto',
		textAlign: 'center',
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<RecordProvider>
			<div className={classes.root}>

				<header className={classes.header}>
					<Typography component="h1" variant="h4" align="center" gutterBottom>
						Voter Record Search 2020
          </Typography>
					<Typography component="h2" variant="h5" align="center">
						Montgomery County, TX
          </Typography>
				</header>
				<main className={classes.main}>
					<SearchVoters />
					<ListVoters />
				</main>
				<Footer />
			</div>
		</RecordProvider >
	);
};

export default App;
