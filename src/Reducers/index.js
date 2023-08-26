import {combineReducers} from "redux"
import authReducer from "./auth";
import CurrentUserReducer from "./currentUser";
import channelReducer from "./channel";
import videoReducer from "./Video";
import likedVideoReducer from "./likedvideo"
import watchLaterReducer from './watchlater'
import HistoryReducer from './History'
import CommentReducer from './comments'

import LikedHistoryReducer from './LikedHistory'
import locationReducer from './location'



export default combineReducers({

    authReducer, 
    CurrentUserReducer,
    channelReducer, 
    videoReducer,
    likedVideoReducer,
    watchLaterReducer, 
    HistoryReducer,
    CommentReducer,
    LikedHistoryReducer,
    locationReducer
});