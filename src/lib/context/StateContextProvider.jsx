import React, { createContext, useContext, useReducer } from "react";
const initialValue = {
  namegame: "",
  desc: "",
  date: "",
  time: "",
};
const StateContext = createContext(initialValue);
const reducer = (state, action) => {
  switch (action.type) {
    case "setNameGame":
      return { ...state, namegame: action.payload };
    case "setDesc":
      return { ...state, desc: action.payload };
    case "setDate":
      return { ...state, date: action.payload };
    case "setTime":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};
const StateContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValue);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};
export default StateContextProvider;
export const useStateContext = () => useContext(StateContext);
