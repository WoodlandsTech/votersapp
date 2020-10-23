import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

const Moco = require('./images/moco_logo.png');
const Wase = require('./images/wase_logo.png');

// TODO: Fine tune top line / question so both texts are centered  

const useStyles = makeStyles((theme) => ({
	root: {
		'& > *': {
			display: 'inline-block',
			verticalAlign: 'middle',
		},
	},
	header: {
		backgroundColor: theme.palette.background.paper,
		width: '100%',
		height: '10rem',
		marginTop: '0',
	},
	headerText: {
		//		margin: '0 20px',
		//		textAlign: 'left',
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
				<img src={Wase} alt="WASE Logo" height="50" align="right" vertical-align='top' />

				<Typography variant="h4" className={classes.headerText}>
					Ballot Record Search 2020
			    	</Typography>
				<br />
				<Typography component="h3" variant="h6" className={classes.question}>
					To check your ballot status, please enter:
					</Typography>
			</Container>
		</>
	)
}

export default Header
