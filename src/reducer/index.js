import { combineReducers } from 'redux';
import getUsersReducer from './users_reducer'
import getPostsReducer from './posts_reducer';
import getCommentsReducer from './comments_reducer';
import getActivitiesReducer from './activities_reducer'
import getAlbumsReducer from './album_reducer';
import getPhotosReducer from './photos_reducer';
import getToDoReducer from './todo_reducer';
import dropdownReducer from './dropdown_reducer';

const rootReducer = combineReducers({
   usersData: getUsersReducer, 
   postsData: getPostsReducer,
   commentsData: getCommentsReducer,
   activityData: getActivitiesReducer,
   albumData: getAlbumsReducer,
   photosData: getPhotosReducer,
   todoData: getToDoReducer,
   dropdown: dropdownReducer,
});

export default rootReducer 