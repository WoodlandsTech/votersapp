import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import { RecordProvider } from './Context';
import Loading from './PageLoading';
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
    padding: theme.spacing(2, 0),
  },
  main: {
    padding: theme.spacing(2, 0)
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
        <footer className={classes.footer}>
          <Footer />
        </footer>
      </div>
    </RecordProvider >
  );
};

export default App;
