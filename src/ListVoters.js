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
  const { loading, filter: { firstName, lastName }, records } = state;

  if (loading) return null

  const filteredRecords = records.filter(voter => {
    if (firstName) {
      return voter.FirstName.indexOf(firstName.toUpperCase()) >= 0
    }
    return true
  })
  return (
    <Container className={classes.cardGrid}>
      <Grid container spacing={4}>
        {filteredRecords.length === 0 && lastName !== '' ? (
          <Grid item key="no-records-found" xs={12}>
            <Typography component="h4" variant="h4" align="center">
              No Records found
            </Typography>
          </Grid>
        ) : filteredRecords.map(({
          FirstName,
          MiddleName,
          LastName,
          Certificate_Number,
          Election_Name,
          DateVoted
        }) => (
            <Grid item key={Certificate_Number + Election_Name} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography component="h5" variant="h6">
                    {`${FirstName} ${MiddleName} ${LastName}`}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {DateVoted}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))
        }
      </Grid>
    </Container >
  );
}

export default ListVoters;
