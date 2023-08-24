import {combineReducers} from "redux"
import authReducer from "./auth";
import CurrentUserReducer from "./currentUser";
import channelReducer from "./channel";
import videoReducer from "./Video";
import likedVideoReducer from "./likedvideo"
import watchLaterReducer from './watchlater'
import HistoryReducer from './History'
import CommentReducer from './comments'


export default combineReducers({

    authReducer, CurrentUserReducer,channelReducer, videoReducer,likedVideoReducer,watchLaterReducer, HistoryReducer,CommentReducer
});