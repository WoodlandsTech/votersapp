import React, { useContext, useEffect, useRef } from 'react';
import { Container, Grid, TextField, InputAdornment } from '@material-ui/core';

import { RecordContext } from './Context'

let debounceHandler = null;

const NameField = props => {
	return (

		<Grid item>
			<TextField
				InputProps={{
					startAdornment: <InputAdornment position="start">{props.prompt}</InputAdornment>,
				}}
				name={props.name}
				value={props.value}
				onChange={props.handler}
				//				size={(props.size === '') ?  'small' : props.size}
				type={props.type === '' ? {} : props.type}

			/>
		</Grid>
	)
}


const SearchVoters = () => {
	const [state, dispatch] = useContext(RecordContext);
	const { firstName, lastName, zipCode } = state.filter
	//	const classes = useStyles();
	const didMount = useRef(false);

	useEffect(() => {
		if (didMount.current) {
			debounceHandler = setTimeout(() => {
				if (lastName !== '' && firstName !== '' && zipCode !== '') {
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


		payload['zipCode'] ='77382'
		payload['lastName'] ='wood'
		payload['firstName'] ='shari'
		
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

				<Grid container spacing={2} justify="center" alignItems="center" direction="row">
					<NameField prompt='First Name' name='firstName' value={firstName} handler={handleChange} />
					<NameField prompt='Last Name' name='lastName' value={lastName} handler={handleChange} />
					<NameField prompt='Zip' name='zipCode' value={zipCode} handler={handleChange} type="number" />



				</Grid>
			</form>
		</Container >
	);
}

export default SearchVoters;
