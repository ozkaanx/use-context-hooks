import { NAME_ACTION_TYPES } from "../constants";

export const initialState = {
  /// initial values
  darkMode: false
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NAME_ACTION_TYPES.SET_CHANGE_THEMA:
      return {
        ...state,
        darkMode: action.payload
      };
    default:
      throw new Error();
  }
};
