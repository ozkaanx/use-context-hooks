import { NAME_ACTION_TYPES } from "../constants";

export const setChangeTema = (dispatch, darkMode) => {
  dispatch({
    type: NAME_ACTION_TYPES.SET_CHANGE_THEMA,
    payload: darkMode
  });
};
