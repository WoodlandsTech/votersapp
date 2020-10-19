import React, { useContext } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const ListVoters = () => {
  const classes = useStyles();
  const [state] = useContext(RecordContext);
  const { records, filter: { firstName } } = state;
  return (
    <Container className={classes.cardGrid} maxWidth="md">
      <Grid container spacing={4}>
        {records
          .filter(voter => {
            if (firstName) {
              return voter.FirstName.indexOf(firstName.toUpperCase()) >= 0
            }
            return true
          })
          .map(voter => (
            <Grid item key={voter} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography component="h5" variant="h6">
                    {`${voter.FirstName} ${voter.MiddleName} ${voter.LastName}`}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {voter.DateVoted}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
}

export default ListVoters;
