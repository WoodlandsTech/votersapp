import React, { useContext, useEffect, useRef } from 'react';
import { TextField, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

let debounceHandler = null;

const SearchVoters = () => {
  const [state, dispatch] = useContext(RecordContext);
  const { firstName, lastName } = state.filter

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      debounceHandler = setTimeout(() => {
        if (lastName !== '') {
          dispatch({ type: "LOADING_RECORDS" })
          const url = `https://voterapi.woodlandstech.org/getVoters?LastName=${lastName.toUpperCase()}`
          fetch(url, { mode: 'cors' })
            .then(response => response.json())
            .then(data => dispatch({ type: "SET_RECORDS", payload: data }))
            .then(() => dispatch({ type: "LOADED_RECORDS" }))
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
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <Typography variant="h6" align="center">
        Enter your
        <TextField
          name="firstName"
          label="first name"
          value={firstName}
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          label="last name"
          value={lastName}
          onChange={handleChange}
        />
        to make sure your 2020 vote has been counted in Montgomery County, TX
      </Typography>
    </form>
  );
}

export default SearchVoters;
