import server from "../../server"
import { authTypes } from "../../store";

export default (dispatch) => {
  return server().get('/auth/me').then( payload => {
    dispatch({ type: authTypes.GET_CURRENT_USER, payload });
    return payload;
  }, err => err);
}
