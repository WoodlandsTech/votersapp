import React from 'react';
import Container from '@material-ui/core/Container';

import { RecordProvider } from './Context';
import SearchVoters from './SearchVoters';
import ListVoters from './ListVoters';

const App = () => {
  return (
    <RecordProvider>
      <Container>
        <SearchVoters />
        <ListVoters />
      </Container>
    </RecordProvider>
  );
};

export default App;
