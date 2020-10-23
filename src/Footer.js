import React from 'react';
import { Container, makeStyles, Link, Typography } from '@material-ui/core';
import Contributors from './Contributors';


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
}));

// TODO: Convert Button into a drawer as an 'about' 
// TODO: add legal disclaimer about using voting information

const Footer = () => {
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
			<Contributors />
		</Container>
	)
};

export default Footer
