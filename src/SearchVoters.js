import React, { useEffect, useRef, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';

let debounceHandler = null;

const SearchWorker = () => {
  const [voter, setVoter] = useState({ firstname: '', lastname: '' });
  const { firstname, lastname } = voter

  const didMount = useRef(false);

  const fetchData = (input) => {
    if (input !== '') {
      const url = `https://voterapi.woodlandstech.org/getVoters?LastName=${input.toUpperCase()}`
      fetch(url, { mode: 'cors' })
        .then(response => response.json())
        .then(data => console.log(data));
    }
  }

  useEffect(() => {
    if (didMount.current) {
      debounceHandler = setTimeout(() => {
        fetchData(lastname);
      }, 1000);

      return () => {
        clearTimeout(debounceHandler);
      };
    } else {
      didMount.current = true;
    }
  }, [lastname]);

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

export default SearchWorker;
