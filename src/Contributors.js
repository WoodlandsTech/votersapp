import React from 'react';
//import { makeStyles } from '@material-ui/core/styles';
//import Popover from '@material-ui/core/Popover';
//import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';

import { Button, Popover, makeStyles } from '@material-ui/core';
import { List, ListItemText, ListSubheader } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
	typography: {
		padding: theme.spacing(2),
	},
	listSubHeaderRoot: {
		lineHeight: "1rem",
		backgroundColor: "#E5E5E5",
		color: "#252525",
	}
}));


export default function Contributors() {
	//	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			<Button variant="outlined" color="inherit" onClick={handleClick}>
				The Developers
  			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
			>
				<PopupInner />
			</Popover>
		</div>
	);
}
const PopupInner = () => {
	const classes = useStyles();

	return (
		<List dense="true" disablePadding='true'>
			<ListSubheader classes={{ root: classes.listSubHeaderRoot }}>
				Concept</ListSubheader>
			<ListItemText inset='true'>
				Rud Merriam </ListItemText>
			<ListSubheader classes={{ root: classes.listSubHeaderRoot }}>
				Frontend Interface</ListSubheader>
			<ListItemText inset='true'>
				Rud Merriam </ListItemText>
			<ListItemText inset='true'>
				Kevin Thomson</ListItemText>
			<ListSubheader classes={{ root: classes.listSubHeaderRoot }}>
				Backend Processing</ListSubheader>
			<ListItemText inset='true'>
				Stephen Ten Eyck</ListItemText>
			<ListItemText inset='true'>
				Robert McCutchen</ListItemText>
			<ListSubheader classes={{ root: classes.listSubHeaderRoot }}>
				Moral Support</ListSubheader>
			<ListItemText inset='true'>
				Crazy Russian aka Mikhail Kozorovitskiy</ListItemText>
		</List>



		/*
	<Typography className={classes.typography} >
		<div>Contributors to Site</div>

	</Typography>
	*/
	)
}
