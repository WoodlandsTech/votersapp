import React from 'react';
import { Container, makeStyles, Link, Typography } from '@material-ui/core';

const Moco = require('./images/moco_logo.png');
const Wase = require('./images/wase_logo.png');

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
  },
  footerText: {
    margin: '0 20px',
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <img src={Moco} alt="Montgomery County Logo" height="50" />
      <div className={classes.footerText}>
        <Typography variant="body1" >
          Web site provided by&nbsp;
              <Link color="inherit" href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts">
            Woodlands Area Software Enthusiasts
              </Link>
        </Typography>
        <Typography variant="body2">Not responsible for accuracy of data. Use with caution.</Typography>
      </div>
      <img src={Wase} alt="WASE Logo" height="50" />
    </Container>
  )
};

export default Footer;
