import React, { useContext } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

const useStyles = makeStyles((theme) => ({
	cardGrid: {
//		paddingTop: theme.spacing(4),
//		paddingBottom: theme.spacing(4),
	},
	card: {
		height: '100%',
		//		width: '90%',
		//		display: 'flex',
		//		flexDirection: 'column',
		//		align: 'center',
		textAlign: 'center',

	},
	cardContent: {
		align: 'center',
		flexGrow: 1,
		
	},
	typo: {
		height: '2',
		      fontSize: 12,

	}
}));

const NoRecord = () => {
	return (
		<Grid item key="no-records-found" xs={12}>
			<Typography component="h3" variant="h4" align="center">
				Records not found
				<br /> Please check spelling and zip code are correct
				<br /> If they are correct the information may not yet have been loaded to this site
				<br /> If it has been a few days since you mailed or voted // what to say? //
            </Typography>
		</Grid>
	)
}

let elects = [];

const Elections = () => {
	const classes = useStyles();
	console.log(elects)
	return (
		elects.map((elect => (
			<CardContent className={classes.cardContent}>
				<Typography variant="body1" color="textSecondary" className={classes.typo}>
					{elect}
				</Typography>
			</CardContent >
		)
		)
		)
	)
}

const Person = props => {
	const classes = useStyles();

	console.log(props.names, props.how_many)
	let e = props.election
	elects[props.pos.index] = e;

	console.log(props.pos.index)
	if (props.pos.index + 1 === props.how_many) {
		return (
			<Card className={classes.card}>

				<CardContent className={classes.cardContent}>
					<>
						<Typography component="h4" variant="h6" >
							{props.names}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" className={classes.typo}>
							{props.street}
						</Typography>
						<Typography variant="subtitle1" color="textSecondary" className={classes.typo}>
							{props.city_state}
							<br />
							<br />
							{props.date}
							<br />
							{props.vote_type}
						</Typography>
						<br />
						<Typography component="h4" variant="h6" color="textSecondary">
							Election Districts
				</Typography>
						<Elections />

					</>
				</CardContent>
			</Card>
		)
	}
	else
		return null
}

const ListVoters = () => {
	const classes = useStyles();
	const [state] = useContext(RecordContext);
	const { loading, filter: { firstName, lastName, zipCode }, records } = state;

	if (loading) return null
	console.log({ state })

	const RecordsDisplay = () => {

		return (
			filteredRecords.map(({
				FirstName,
				MiddleName,
				LastName,
				MailAddress,
				Residence_City,
				Residence_State,
				Residence_Zipcode,
				Election_Name,
				DateVoted,
				VoteType,
			}, index) => (
					<>
						<Person
							pos={{ index }}
							names={FirstName + ' ' + MiddleName + ' ' + LastName}
							street={MailAddress}
							city_state={Residence_City + ", " + Residence_State + ' ' + Residence_Zipcode}
							date={DateVoted}
							vote_type={VoteType === 'A' ? 'Voted Absentee by Mail' : 'Voted In Person'}
							election={Election_Name}
							how_many={filteredRecords.length}
						/>
					</>
				)
			)
		)
	}

	const filteredRecords = records.filter(voter => {
		console.log({ firstName, lastName, zipCode })

		console.log(voter.Residence_Zipcode === zipCode)
		console.log(voter.LastName === lastName.toUpperCase())


		if (zipCode !== voter.Residence_Zipcode) {
			return false
		}
		else if (lastName.toUpperCase() !== voter.LastName) {
			return false
		}
		console.log(voter.Election_Name, { voter })
		return true
	})

	return (
		<Container className={classes.cardGrid}>
			{filteredRecords.length === 0 && firstName !== '' && lastName !== '' && zipCode.length !== 5 ? NoRecord() : RecordsDisplay()}
			{console.log(elects, "#####################")}
		</Container >
	)
}

export default ListVoters;
