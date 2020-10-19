import React from 'react';
import { Container, Grid, makeStyles, Link, Typography } from '@material-ui/core';
const Moco = require('./images/moco_logo.png');
const Wase = require('./images/wase_logo.jpeg');

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh',
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
	},
	main: {
		padding: theme.spacing(2)
	},
	footer: {
		backgroundColor: theme.palette.background.paper,
		padding: theme.spacing(2),
		marginTop: 'auto',
		textAlign: 'center',
		width: "90%"
	},
}));

function WaseLogo() {
	return (
		<div >
			<img src={Wase} alt="WASE Logo" width="142" height="80" />
		</div>
	)
}

function MocoLogo() {
	return (
		<div>
			<img src={Moco} alt="Montgomery County Logo" width="250" height="50" />
		</div>
	)
}

function FootText() {
	return (
		<div>
			<Typography variant="body1" >
				'Web site provided by '
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
			<Container>
				<Grid container spacing={8}>
					<Grid item >
						<MocoLogo />
					</Grid>
					<Grid item >
						<FootText />
					</Grid>
					<Grid item >
						<WaseLogo />
					</Grid>
				</Grid>
			</Container>
		</footer >
	)
};

export default Footer;
