import React, { useContext, useEffect, useRef } from 'react';
import { Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

const useStyles = makeStyles((theme) => ({
  question: {
    paddingTop: '10px',
  },
}));

let debounceHandler = null;

const SearchVoters = () => {
  const [state, dispatch] = useContext(RecordContext);
  const { firstName, lastName } = state.filter
  const classes = useStyles();
  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      dispatch({ type: "LOADING_RECORDS" })
      debounceHandler = setTimeout(() => {
        if (lastName !== '') {
          const url = `https://voterapi.woodlandstech.org/getVoters?LastName=${lastName.toUpperCase()}`
          fetch(url, { mode: 'cors' })
            .then(response => response.json())
            .then(data => dispatch({ type: "SET_RECORDS", payload: data }))
            .then(() => dispatch({ type: "LOADED_RECORDS" }))
        } else {
          dispatch({ type: "SET_RECORDS", payload: [] })
          dispatch({ type: "LOADED_RECORDS" })
        }
      }, 1000);

      return () => {
        clearTimeout(debounceHandler);
      };
    } else {
      didMount.current = true;
    }
  }, [lastName, dispatch]);

  const handleChange = ({
    target: { name, value }
  }) => {
    const payload = { ...state.filter }
    payload[name] = value
    dispatch({ type: `SET_FILTER`, payload });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container>
      <form
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <Typography component="h3" variant="h6" className={classes.question}>{`Enter your `}</Typography>
          </Grid>
          <Grid item>
            <TextField
              name="firstName"
              label="first"
              value={firstName}
              onChange={handleChange}
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography component="h3" variant="h6" className={classes.question}>{` & `}</Typography>
          </Grid>
          <Grid item>
            <TextField
              name="lastName"
              label="last"
              value={lastName}
              onChange={handleChange}
              size="small"
            />
          </Grid>
          <Grid item>
            <Typography component="h3" variant="h6" className={classes.question}>{` name to make sure your vote has been counted`}</Typography>
          </Grid>
        </Grid>
      </form>
    </Container >
  );
}

export default SearchVoters;
