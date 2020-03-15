import { FETCH_TODO } from '../constants/action-types'

export const getToDolist = () => dispatch => {
    fetch(`https://panorbit.in/api/todo.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_TODO,
            payload: users
        })
    )
    .catch(err => console.log(err))
};
