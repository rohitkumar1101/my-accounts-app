import { FETCH_ALBUM, FETCH_PHOTOS } from "../constants/action-types";

export const getAlbums = () => dispatch => {
    fetch(`https://panorbit.in/api/albums.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({ 
            type: FETCH_ALBUM,
            payload: users
        })
    )
    .catch(err => console.log(err))
};

export const getPhotos = () => dispatch => {
    fetch(`https://panorbit.in/api/photos.json`)
    .then(res => res.json())
    .then(users => 
        dispatch({
            type: FETCH_PHOTOS,
            payload: users
        })
    )
    .catch(err => console.log(err))
};