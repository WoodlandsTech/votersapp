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
          MailAddress,
          Residence_City,
          Residence_State,
          Certificate_Number,
          Election_Name,
          DateVoted,
          VoteType,
        }) => (
            <Grid item key={Certificate_Number + Election_Name} xs={12} sm={6} md={6}>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography component="h4" variant="h6">
                    {Election_Name}
                  </Typography>
                  <Typography variant="body1">
                    {`${FirstName} ${MiddleName} ${LastName}`}
                  </Typography>
                  <Typography variant="subtitle1" color="textSecondary">
                    {`${MailAddress} ${Residence_City}, ${Residence_State}`}
                  </Typography>
                  <Typography variant="subtitle2" color="textSecondary">
                    {VoteType === 'A' ? 'Voted Absentee by Mail' : 'Voted In Person'} {DateVoted}
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
