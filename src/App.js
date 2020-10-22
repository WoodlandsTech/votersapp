import React from 'react';
import { makeStyles } from '@material-ui/core';

import { RecordProvider } from './Context';
import Loading from './PageLoading';
import SearchVoters from './SearchVoters';
import ListVoters from './ListVoters';
import { Footer, Header } from './Footer';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		height: '10rem',
		marginTop: '0',
	},
	main: {
		//		padding: theme.spacing(2, 0)
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2, 0),
		marginTop: 'auto',
		textAlign: 'center',
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<RecordProvider>
			<div className={classes.root}>
				<Loading />
				<header >
					<Header />
				</header>

				<main className={classes.main}>
					<SearchVoters />
					<ListVoters />
				</main>
				
{/*
				<footer className={classes.footer}>
					<Footer />
				</footer>
*/}
			</div>
		</RecordProvider >
	);
};

export default App;
