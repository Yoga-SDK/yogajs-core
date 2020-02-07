import server from "../../server";
import store, { authTypes } from './../../store';

export default (data) => {
    return server().post('/auth/signup', data).then((payload) => {
        store.dispatch({ type: authTypes.SIGN_IN_WITH_IDENTITY, payload })
        return payload;
    });
}