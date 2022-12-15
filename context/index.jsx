import React, {
  useEffect,
  useReducer,
  createContext,
  useContext,
  useMemo
} from "react";
import { setChangeTema } from "./actinos";
import { initialState, reducer } from "./reducer";

export const ContentDataContext = createContext();
export const ContentAPIContext = createContext();

export const ContentProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const api = useMemo(() => {
    const changeThema = (darkMode) => setChangeTema(dispatch, darkMode);
    return {
      changeThema
    };
  }, []);

  useEffect(() => {
    console.log("ListContextProvider >>> :", state);
  }, [state]);

  return (
    <ContentAPIContext.Provider value={api}>
      <ContentDataContext.Provider value={state}>
        {children}
      </ContentDataContext.Provider>
    </ContentAPIContext.Provider>
  );
};

export const useContenttAPI = () => useContext(ContentAPIContext);
export const useContentState = () => useContext(ContentDataContext);
