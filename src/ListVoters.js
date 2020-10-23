import React, { useContext } from 'react';
import { Card, CardContent, Container, Grid, makeStyles, Typography } from '@material-ui/core';

import { RecordContext } from './Context'

//	TODO: Convert to class - for sure
//	TODO: text for records not found - what to do if now getting results after few days
//	TODO: probably need to handle voting fields similar to districts. Think 
//			the actual vote might be recorded 

const useStyles = makeStyles((theme) => ({

	card: {
		height: '100%',
		textAlign: 'center',
		padding: theme.spacing(2, 0),	// ned gap from top of card to name
		margin: theme.spacing(1, 0),	// need gap betwee top of card and header
	},
	cardContent: {
		align: 'center',
		flexGrow: 1,
		padding: theme.spacing(0, 0)
	},
	typography: {

		//		padding: theme.spacing(0, 0)

	}
}));

const NoRecord = () => {
	return (
		<Grid item key="no-records-found" xs={12}>
			<Typography  >
				Records not found
				<br /> Please check spelling and zip code are correct
				<br /> If they are correct the information may not yet have been loaded to this site
				<br /> If it has been a few days since you mailed or voted // what to say? //
            </Typography>
		</Grid>
	)
}

let districts = [];	// holds list of election districts

const Elections = () => {
	const classes = useStyles();
	return (
		districts.map((elect => (
			<CardContent className={classes.cardContent}>
				<Typography className={classes.typography}>
					{elect}
				</Typography>
			</CardContent >
		)))
	)
}

// 	Called for each record for person 
//	On each call only records the election district
//	On the last call builds the person output and appends the list of election districts

const Person = props => {
	const classes = useStyles();

	districts[props.pos.index] = props.election;

	console.log(props.pos.index)
	if (props.pos.index + 1 === props.how_many) {
		return (
			<Card className={classes.card}>
				<CardContent className={classes.cardContent}>
					<>
						<Typography variant="h5"> 						{props.names}	</Typography>
						<Typography> 						{props.street} 	</Typography>
						<Typography>
							{props.city_state}
							<br />
							<br />
							{props.date}
							<br />
							{props.vote_type}
						</Typography>
						<br />
						<Typography variant="h6">	Election Districts	</Typography>
						<Elections variant="subtitle2" />
					</>
				</CardContent>
			</Card>
		)
	}
	else
		return null
}

let vote_types = new Map([
	['A', 'Voted Absentee by Mail'],
	['E', 'Voted Early In-Person'],
	['L', 'Voted Early Limited Ballot In-Person'],
	['E1', 'Late, Death in Family'],
	['E3', 'Late, Disabled Representative'],
])

const ListVoters = () => {
	const [state] = useContext(RecordContext);
	const { loading, loaded, filter: { firstName, lastName, zipCode }, records } = state;

	if (loading) return null

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
							//							vote_type={VoteType === 'A' ? 'Voted Absentee by Mail' : 'Voted In Person'}
							vote_type={vote_types.get(VoteType)}
							election={Election_Name}
							how_many={filteredRecords.length}
						/>
					</>
				)
			)
		)
	}

	const filteredRecords = records.filter(voter => {
		if (zipCode !== voter.Residence_Zipcode) {
			return false
		}
		else if (lastName.toUpperCase() !== voter.LastName) {
			return false
		}
		return true
	})

	return (
		<Container>
			{
				loaded === true &&
				filteredRecords.length === 0 &&
					firstName !== '' &&
					lastName !== '' &&
					zipCode.length === 5
					?
					NoRecord()
					:
					RecordsDisplay()}
		</Container >
	)
}

export default ListVoters;
