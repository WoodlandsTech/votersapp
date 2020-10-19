import React from 'react';
import { Container, makeStyles, Link, Typography } from '@material-ui/core';

import { RecordProvider } from './Context';
import SearchVoters from './SearchVoters';
import ListVoters from './ListVoters';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    textAlign: 'center',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <RecordProvider>
      <div className={classes.root}>
        <Container>
          <SearchVoters />
          <ListVoters />
        </Container>
        <footer className={classes.footer}>
          <Container>
            <Typography variant="body1" color="textSecondary">
              {'Web site provided by '}
              <Link color="inherit" href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts">
                Woodlands Area Software Enthusiasts
              </Link>
            </Typography>
            <Typography variant="body2">Not responsible for accuracy of data. Use with caution.</Typography>
          </Container>
        </footer>
      </div>
    </RecordProvider>
  );
};

export default App;
