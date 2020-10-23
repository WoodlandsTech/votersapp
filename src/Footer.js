import React from 'react';
import { Container, makeStyles, Link, Typography } from '@material-ui/core';
//import Contributors from './Contributors';

const Moco = require('./images/moco_logo.png');
const Wase = require('./images/wase_logo.png');

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			display: 'inline-block',
			verticalAlign: 'middle',
			horizontalAlign: 'center',
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
		paddingBottom: '10px',
		textAlign: 'center',

	},
}));


export const Header = () => {
	const classes = useStyles();

	return (
		<>
			<Container className={classes.root}>
				<img src={Moco} alt="Montgomery County Logo" height="40" align="left" />

				<div className={classes.footerText}>
					<Typography variant="h4" align="center">
						Ballot Record Search 2020
			    	</Typography>
				</div>
				<img src={Wase} alt="WASE Logo" height="50" align="right" />

			</Container>
			<br />
			<Typography component="h3" variant="h6" className={classes.question}>{`To check your ballot, please enter `}</Typography>
		</>

	)
}
//			<Contributors />

export const Footer = () => {
	const classes = useStyles();
	return (
		<Container className={classes.root}>

			<div className={classes.footerText}>
				<Typography variant="body1" >
					Web site provided by&nbsp;
		              <Link color="inherit" href="https://www.meetup.com/Woodlands-Area-Software-Enthusiasts">
						Woodlands Area Software Enthusiasts
		              </Link>
				</Typography>
				<Typography variant="body2">Not responsible for accuracy of data. Use with caution.</Typography>
			</div>

		</Container>
	)
};


