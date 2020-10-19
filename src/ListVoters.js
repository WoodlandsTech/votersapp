import React, { useContext } from 'react';
import { List, ListItem, ListItemText } from '@material-ui/core';

import { RecordContext } from './Context'

const ListVoters = () => {
  const [state] = useContext(RecordContext);
  const { records, filter: { firstName } } = state;
  return (
    <List>
      {records && records
        .filter(voter => {
          if (firstName) {
            return voter.FirstName.indexOf(firstName.toUpperCase()) >= 0
          }
          return true
        })
        .map((voter, index) => (
          <ListItem key={index}>
            <ListItemText primary={`${voter.FirstName} ${voter.LastName}`} />
          </ListItem>
        ))
      }
    </List>
  );
}

export default ListVoters;
