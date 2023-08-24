import React,{ useEffect, useState } from 'react';
import './App.css';
import AllRoutes from './Components/AllRoutes';
import DrawerSidebar from './Components/LeftSidebar/DrawerSidebar';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router} from 'react-router-dom';
import CreateEditChannel from './Pages/Channel/CreateEditChannel';
import { useDispatch } from 'react-redux';
import { fetchAllChannel } from './actions/channelUser';
import VideoUpload from './Pages/VideoUpload/VideoUpload';
import { getAllVideo} from './actions/video';
import { getAlllikedVideo } from './actions/likedVideo';
import { getAllwatchLater } from './actions/watchlater';
import { getAllHistory } from './actions/History';
import { getAllComment } from './actions/Comments';

function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchAllChannel());
    dispatch(getAllVideo());
    dispatch(getAlllikedVideo());
    dispatch(getAllwatchLater());
    dispatch(getAllHistory());
    dispatch(getAllComment());
    },[dispatch]
  )
  const [toggleDrawerSidebar, settoggleDrawerSidebar] = useState({
    display : "none",
  })

  const toggleDrawer=()=>{
    if(toggleDrawerSidebar.display === "none"){
      settoggleDrawerSidebar({
        display : "flex",
      })
    }

    else{
      settoggleDrawerSidebar({
        display : "none",
      })
    }
  }

  const [videUploadPage,setVidUploadPage] = useState(false)
  const [EditCreateChannelBtn , setEditCreateChannelBtn]  = useState(false)
  return (
    <>
    <Router>
      {videUploadPage && <VideoUpload setVidUploadPage = {setVidUploadPage}/>}
      {
        EditCreateChannelBtn &&
        <CreateEditChannel setEditCreateChannelBtn = {setEditCreateChannelBtn}/>
      }
      <Navbar setEditCreateChannelBtn = {setEditCreateChannelBtn} toggleDrawer = {toggleDrawer}/>
      
        <DrawerSidebar toggleDrawer = {toggleDrawer} toggleDrawerSidebar = {toggleDrawerSidebar}/>
      
      <AllRoutes setVidUploadPage = {setVidUploadPage} setEditCreateChannelBtn = {setEditCreateChannelBtn}/>
    </Router>
    </>
  );
}

export default App;
