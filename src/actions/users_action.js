import {FETCH_USERS } from "../constants/action-types";

export const getUsers = () => dispatch => {
    fetch(`https://panorbit.in/api/users.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_USERS,
            payload: users
        })
    )
    .catch(err => console.log(err))
};
