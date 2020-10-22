import React, { useContext, useEffect, useRef } from 'react';
import { Container, Grid, makeStyles, TextField, InputAdornment, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

const useStyles = makeStyles((theme) => ({
	question: {
		paddingTop: '10px',
	},
	number: {
		max: 99999
	}
}));

let debounceHandler = null;

const SearchVoters = () => {
	const [state, dispatch] = useContext(RecordContext);
	const { firstName, lastName, zipCode } = state.filter
	const classes = useStyles();
	const didMount = useRef(false);

	// FirstName, LastName, Residence_Zipcode - field names

	useEffect(() => {
		if (didMount.current) {
			debounceHandler = setTimeout(() => {
				if (lastName !== '' && firstName !== '' && zipCode !== '') {
					console.log(lastName, zipCode)
					dispatch({ type: "LOADING_RECORDS" })
					const url = `https://voterapi.woodlandstech.org/getVoters?LastName=${lastName.toUpperCase()}`
					fetch(url, { mode: 'cors' })
						.then(response => response.json())
						.then(data => dispatch({ type: "SET_RECORDS", payload: data }))
						.then(() => dispatch({ type: "LOADED_RECORDS" }))
				} else {
					dispatch({ type: "SET_RECORDS", payload: [] })
					dispatch({ type: "LOADED_RECORDS" })
				}
			}, 1000);

			return () => {
				clearTimeout(debounceHandler);
			};
		} else {
			didMount.current = true;
		}
	}, [zipCode, firstName, lastName, dispatch]);

	const handleChange = ({
		target: { name, value }
	}) => {
		if (name === "zipCode") {
			value = value.slice(0, 5)
		}
		const payload = { ...state.filter }
		payload[name] = value
		dispatch({ type: `SET_FILTER`, payload });
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<Container>
			<form
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
			<br/>
			<br/>
			<br/>
				<Grid container spacing={2} justify="center" alignItems="center"   direction="row">

					<Grid item>
						<TextField
							InputProps={{
								startAdornment: <InputAdornment position="start">Given Name</InputAdornment>,
							}}
							name="firstName"
							value={firstName}
							onChange={handleChange}
							size="small"
						/>
					</Grid>

					<Grid item>
						<TextField
							InputProps={{
								startAdornment: <InputAdornment position="start">Last Name</InputAdornment>,
							}}
							name="lastName"
							value={lastName}
							onChange={handleChange}
							size="small"
						/>
					</Grid>
					<Grid item>
						<TextField
							className={classes.number}
							error
							type="number"
							name="zipCode"
							InputProps={{
								startAdornment: <InputAdornment position="start">Zip</InputAdornment>
							}}
							value={zipCode}
							onChange={handleChange}
							size="small"
						/>
					</Grid>

				</Grid>
			</form>
		</Container >
	);
}

export default SearchVoters;
