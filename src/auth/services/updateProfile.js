import server from "../../server";

export default (data) => {
    return server().put('/auth/updateProfile', data).then((payload) => {
        return payload;
    });
}

// End of file
