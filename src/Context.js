import React, { useReducer, createContext } from "react";

export const RecordContext = createContext();

const initialState = {
  records: [],
  loading: false,
  error: null
};

const reducer = (state, action) => {
  switch (action.type) {
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
