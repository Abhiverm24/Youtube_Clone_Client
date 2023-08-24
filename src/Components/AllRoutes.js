import React from 'react'
import Home from '../Pages/Home/Home'

import {Routes, Route} from 'react-router-dom';
import Library from '../Pages/Library/Library';
import WatchHistory from '../Pages/WatchHistory/WatchHistory';
import WatchLater from '../Pages/WatchLater/WatchLater';
import LikedVideos from '../Pages/LikedVideos/LikedVideos';
import YourVideo from '../Pages/YourVideo/YourVideo';
import VideoPage from '../Pages/VideoPage/VideoPage';
import Channel from '../Pages/Channel/Channel';
import Search from '../Pages/Search/Search';


export default function AllRoutes({setEditCreateChannelBtn,setVidUploadPage}) {
  return (
    <div>
        <Routes>
            <Route path = '/' element  = {<Home/>}/>
            <Route path = '/library' element  = {<Library/>}/>
            <Route path = '/history' element  = {<WatchHistory/>}/>
            <Route path = '/watchlater' element  = {<WatchLater/>}/>
            <Route path = '/likedvideo' element  = {<LikedVideos/>}/>
            <Route path = '/yourvideos' element  = {<YourVideo/>}/>
            <Route path = '/videopage/:vid' element  = {<VideoPage/>}/>
            <Route path = '/search/:searchQuery' element  = {<Search/>}/>
            <Route path = '/channel/:Cid' element  = {<Channel setVidUploadPage = {setVidUploadPage} setEditCreateChannelBtn = {setEditCreateChannelBtn}/>}/>
        </Routes>
      
    </div>
  )
}
