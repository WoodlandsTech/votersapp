import React, { useReducer, createContext } from "react";

export const RecordContext = createContext();

const initialState = {
	records: [],
	filter: {
		firstName: "",
		lastName: "",
		zipCode: "",
	},
	loading: false,
	error: null
};

const reducer = (state, action) => {
	console.log(action.type)

	switch (action.type) {
		
		case "SET_FILTER":
			var v = { ...state, filter: action.payload }
			return v;
		
		case "SET_RECORDS":
			return { ...state, records: action.payload };
			
		case "LOADING_RECORDS":
			return { ...state, loading: true };
		
		case "LOADED_RECORDS":
			return { ...state, loading: false };
		
		default:
			throw new Error();
	}
};

export const RecordProvider = props => {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<RecordContext.Provider value={[state, dispatch]}>
			{props.children}
		</RecordContext.Provider>
	);
};
