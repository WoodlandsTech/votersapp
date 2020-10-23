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
	error: null,
	loaded: false,
};

const reducer = (state, action) => {

	switch (action.type) {
		case "SET_FILTER":
			return { ...state ,  loaded: false, filter: action.payload }

		case "SET_RECORDS":
			return { ...state, records: action.payload };

		case "LOADING_RECORDS":
			return { ...state, loading: true};

		case "LOADED_RECORDS":
			return { ...state, loading: false, loaded: true };

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

