import React, { useEffect, useRef, useState } from 'react';
import { TextField, Typography } from '@material-ui/core';

let debounceHandler = null;

const SearchWorker = () => {
  const [lastname, setLastName] = useState('');

  const didMount = useRef(false);

  const fetchData = (input) => {
    if (input !== '') {
      fetch(`https://voterapi.woodlandstech.org/getVoters?LastName=${input}`, { mode: 'cors' })
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
    target: { value }
  }) => {
    setLastName(value);
  };

  return (
    <form noValidate autoComplete="off">
      <Typography variant="h6" align="center">
        Enter your
        <TextField
          id="last-name"
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
