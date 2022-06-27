import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  city: undefined,
  dates: [],
  option: {
    adult: undefined,
    children: undefined,
    room: undefined,
  },
};

export const SearchContex = createContext(INITIAL_STATE);

const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const SearchContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchReducer, INITIAL_STATE);

  return (
    <SearchContex.Provider
      value={{
        city: state.city,
        dates: state.dates,
        option: state.option,
        dispatch,
      }}
    >
      {children}
    </SearchContex.Provider>
  );
};
