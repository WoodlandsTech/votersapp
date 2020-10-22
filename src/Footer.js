import React from 'react';
import { Container, makeStyles, Link, Typography, Grid } from '@material-ui/core';
import Contributors from './Contributors';

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
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		height: '10rem',
		marginTop: '0',
	},
	question: {
		paddingTop: '10px',
		textAlign: 'center',

	},
}));

export const Footer = () => {
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
};

export const Header = () => {
	const classes = useStyles();

	return (
		<header className={classes.header}>
		<>
			<Grid spacing={3}
				container
				direction="row"
				justify="center"
				alignItems="center"
			>
				<Grid item>
					<img src={Moco} alt="Montgomery County Logo" height="40" />
				</Grid>
				<Grid item>
					<Typography variant="h4" align="center">
						&nbsp;&nbsp;&nbsp;&nbsp;Ballot Record Search 2020
			    	</Typography>
				</Grid>
				<Grid item>
					<Contributors />
				</Grid>
			</Grid>
			<Typography component="h3" variant="h6" className={classes.question}>{`To check your ballot, please enter `}</Typography>
			</>		
			</header >

	)
}

