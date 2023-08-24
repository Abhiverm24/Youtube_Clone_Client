import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from 'react-redux';


export default function WatchHistory() {

  const HistoryList = useSelector(state=>state.HistoryReducer)
  console.log(HistoryList);


  // const history = [{
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
    <WHL page={"History"} videoList = {HistoryList}/>
  )
}
