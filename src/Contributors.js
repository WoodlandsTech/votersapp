import React from 'react';

import { Button, Popover, makeStyles } from '@material-ui/core';
import { List, ListItemText, ListSubheader } from '@material-ui/core';

//	Don't need logo here since it is in the header'	
//	const Wase = require('./images/wase_logo.png');

//	TODO: Rewrite into an About page

const useStyles = makeStyles((theme) => ({
	button: {
		margin: theme.spacing(5),
	},
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
	const classes = useStyles();
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
		<>
			<Button variant="outlined" color="inherit" onClick={handleClick} className={classes.button}>
				About
				{/* &nbsp;<img src={Wase} alt="WASE Logo" height="40" /> */}
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
		</>
	);
}

const PopupInner = () => {
	const classes = useStyles();

	return (
		<List dense="true" disablePadding='true'>
			<ListSubheader classes={{ root: classes.listSubHeaderRoot }}>
				Contributors
			</ListSubheader>
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
			<ListItemText inset='true' width={'200'}>
				Mikhail Kozorovitskiy&nbsp;&nbsp;&nbsp;&nbsp;</ListItemText>
		</List>
	)
}
