import React from 'react';
import Container from '@material-ui/core/Container';

import SearchVoters from './SearchVoters.js';

const App = () => {
  return (
    <Container maxWidth="sm">
      <SearchVoters />
    </Container>
  );
};

export default App;
