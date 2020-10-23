import React from 'react';
import { makeStyles } from '@material-ui/core';

import {RecordProvider} from './Context';
import Loading from './PageLoading';
import SearchVoters from './SearchVoters';
import ListVoters from './ListVoters';
import Footer from './Footer';
import Header from './Header';

const useStyles = makeStyles((theme) => ({

	footer: {
		backgroundColor: theme.palette.background.paper,
		marginTop: 'auto',
		textAlign: 'center',
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		marginTop: '0',
		textAlign: 'center',
		padding: theme.spacing(1, 0)
	},
	main: {
		padding: theme.spacing(1, 1)
	},
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
}));

const App = () => {
	const classes = useStyles();
	return (
		<RecordProvider >
			<div className={classes.root}>
				<Loading />
				<header className={classes.header}>
					<Header />
				</header>

				<main className={classes.main}>
					<SearchVoters />
					<ListVoters />
				</main>
				<footer className={classes.footer}>
					<Footer />
				</footer>
			</div>
		</RecordProvider >
	);
};

export default App;
