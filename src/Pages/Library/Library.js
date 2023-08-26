import React from 'react'
import './Library.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import WHLVideoList from "../../Components/WHL/WHLVideoLIst"
import {FaHistory} from "react-icons/fa"
import {MdOutlineWatchLater} from "react-icons/md"
import { AiOutlineLike } from 'react-icons/ai'
import { useSelector } from 'react-redux'

export default function Library() {

  const CurrentUser = useSelector(state => state?.CurrentUserReducer)
  const watchLaterList = useSelector(state=>state.watchLaterReducer)
  const likedVideoList = useSelector(state=>state.likedVideoReducer)
  const HistoryList = useSelector(state=>state.HistoryReducer)
  const LikedHistoryList = useSelector(state=>state.LikedHistoryReducer)


  // const vids = [{
  //   _id : 1,
  //   video_src : vid,
  //   Channel : "62bafe6752cea35a6c30685f",
  //   title : "video 1",
  //   uploader : 'abc',
  //   description : "description of video 1"
  // },
  // {
  //   _id : 2,
  //   video_src : vid,
  //   Channel : "cdd",
  //   title : "video 2",
  //   uploader : 'abc',
  //   description : "description of video 2"
  // },
  // {
  //   _id : 3,
  //   video_src : vid,
  //   Channel : "add",
  //   title : "video 3",
  //   uploader : 'abc',
  //   description : "description of video 3"
  // },
  // {
  //   _id : 4,
  //   video_src : vid,
  //   Channel : "add",
  //   title : "video 4",
  //   uploader : 'abc',
  //   description : "description of video 4"
  // },];
  return (

    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">

          <div className="container_libraryPage">
              <h1 className='title_contaienr_librarypage'>
                <b>
                  <FaHistory/>
                </b>
                <b>History</b>
              </h1>
              <div className="container_videolist_librarypage">
                <WHLVideoList page = {"History"}    
                  CurrentUser = {CurrentUser?.result._id}
                  videoList={HistoryList}/>
              </div>
          </div>

          <div className="container_libraryPage">
              <h1 className='title_contaienr_librarypage'>
                <b>
                  <MdOutlineWatchLater/>
                </b>
                <b>Watch Later</b>
              </h1>
              <div className="container_videolist_librarypage">
                <WHLVideoList page = {"Watch Later"}
                 CurrentUser = {CurrentUser?.result._id}
                 videoList={watchLaterList}/>
              </div>
          </div>

          <div className="container_libraryPage">
              <h1 className='title_contaienr_librarypage'>
                <b>
                  <AiOutlineLike/>
                </b>
                <b>Liked Videos</b>
              </h1>
              <div className="container_videolist_librarypage">
                <WHLVideoList page = {"Liked Videos"}
                  CurrentUser = {CurrentUser?.result._id}
                  videoList={likedVideoList}/>
              </div>
          </div>


          <div className="container_libraryPage">
              <h1 className='title_contaienr_librarypage'>
                <b>
                  <FaHistory/>
                </b>
                <b>Liked History</b>
              </h1>
              <div className="container_videolist_librarypage">
                <WHLVideoList page = {"Liked History"}    
                  CurrentUser = {CurrentUser?.result._id}
                  videoList={LikedHistoryList}/>
              </div>
          </div>
        </div>
    </div>
  )
}
