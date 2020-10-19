import React, { useContext, useEffect, useRef, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

let debounceHandler = null;

const SearchVoters = () => {
  // TODO: use loading propery of state in this component?
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(RecordContext);
  const [voter, setVoter] = useState({ firstname: '', lastname: '' });
  const { firstname, lastname } = voter

  const didMount = useRef(false);

  useEffect(() => {
    if (didMount.current) {
      debounceHandler = setTimeout(() => {
        if (lastname !== '') {
          dispatch({ type: "LOADING_RECORDS" })
          const url = `https://voterapi.woodlandstech.org/getVoters?LastName=${lastname.toUpperCase()}`
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
  }, [lastname, dispatch]);

  const handleChange = ({
    target: { name, value }
  }) => {
    const updatedVoter = { ...voter }
    updatedVoter[name] = value
    setVoter(updatedVoter);
    console.log(updatedVoter);
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
          name="firstname"
          label="first name"
          value={firstname}
          onChange={handleChange}
        />
        <TextField
          name="lastname"
          label="last name"
          value={lastname}
          onChange={handleChange}
        />
        to make sure your 2020 vote has been counted in Montgomery County, TX
      </Typography>
    </form>
  );
}

export default SearchVoters;
