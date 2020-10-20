import React, { useContext } from 'react';
import { LinearProgress, makeStyles } from '@material-ui/core';

import { RecordContext } from './Context'

const useStyles = makeStyles((theme) => ({
  placeholder: {
    height: '4px',
  },
}));

const PageLoading = () => {
  const classes = useStyles();
  const [state] = useContext(RecordContext);
  const { loading } = state;

  return loading ?
    <LinearProgress className={classes.placeholder} /> : <div className={classes.placeholder} />
}

export default PageLoading;
