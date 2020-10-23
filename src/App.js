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
		marginTop: '0',
		textAlign: 'center',
	},
	main: {
		padding: theme.spacing(1, 0)
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
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
