import React from 'react';
import { Container, Grid, makeStyles, Link, Typography } from '@material-ui/core';
import Contributors from './Contributors';
//import { Container, makeStyles, Link, Typography } from '@material-ui/core';

const Moco = require('./images/moco_logo.png');
const Wase = require('./images/wase_logo.png');

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			display: 'inline-block',
			verticalAlign: 'middle',
		},
	},

	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(3, 0),
		marginTop: 'auto',
		textAlign: 'center',
		width: '100%'
	},

	footerText: {
		margin: '0 20px',
	}
}));

const WaseLogo = () => {
	return (
		<div >
			<img src={Wase} alt="WASE Logo" width="219" height="80" margin-top="0" />
		</div>
	)
}

const MocoLogo = () => {
	return (
		<div>
			<img src={Moco} alt="Montgomery County Logo" width="250" height="50" />
		</div>
	)
}

const FootText = () => {
	return (
		<div>
			<Typography variant="body1" >
				Web site provided by&nbsp;
			<Link color="inherit" href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts">
					Woodlands Area Software Enthusiasts
                </Link>
			</Typography>
			<Typography variant="body2">Not responsible for accuracy of data. Use with caution.</Typography>

		</div>
	)
}

const Footer = () => {
	const classes = useStyles();

	return (
		<footer className={classes.footer}>
			<Container >
				<Grid container spacing={5}>
					<Grid item >
						<MocoLogo />
					</Grid>
					<Grid item >
						<FootText />
					</Grid>
					<Grid item >
						<WaseLogo />
					</Grid>
					<Grid item >
						<Contributors />
					</Grid>
				</Grid>
			</Container>
		</footer>
	)

	/*	
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
							<Contributors />
	
		</Container>
	  )
	
	*/
};

export default Footer;
