import { FETCH_POSTS, FETCH_COMMENTS, FETCH_ACTIVITIES } from '../constants/action-types'

export const getPosts = () => dispatch => {
    fetch(`https://panorbit.in/api/posts.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_POSTS,
            payload: users
        })
    )
    .catch(err => console.log(err))
};

export const getComments = () => dispatch => {
    fetch(`https://panorbit.in/api/comments.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_COMMENTS,
            payload: users
        })
    )
    .catch(err => console.log(err))
};

export const getActivities = () => dispatch => {
    fetch(`https://panorbit.in/api/activity.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_ACTIVITIES,
            payload: users
        })
    )
    .catch(err => console.log(err))
};

