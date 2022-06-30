import { createContext, useEffect, useReducer } from "react";

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null,
    loading: false,
    error: null
};

export const AuthContex = createContext(INITIAL_STATE);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
        return {
            user: null,
            loading: true,
            error: null
        };
    case "LOGIN_SUCCESS":
        return {
            user: action.payload,
            loading: false,
            error: null
        };
    case "LOGIN_FAIL":
        return {
            user: null,
            loading: false,
            error: action.payload
        };
    case "LOGOUT": 
        return {
            user: null,
            loading: false,
            error: null
        };
    default:
        return state;

  }
};

export const AuthContexProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);


  // Save the loggedIn user to LocalStorage to not logout with page refresh
  useEffect(() => {
   localStorage.setItem("user", JSON.stringify(state.user)) 
  },[state.user]);
  
  return (
    <AuthContex.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContex.Provider>
  );
};
