import React from 'react'
import { useSelector } from 'react-redux'
import './Home.css'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../Components/Video/vid.mp4'
export default function Home() {

  const vids = useSelector(state =>state.videoReducer)?.data?.filter(q=>q).reverse();
  // console.log(videoFile)

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

  const NavList = [
    "All",
    "Python",
    "Java",
    "C++",
    "Movies",
    "Science",
    "Animation",
    "Gaming",
    "Comedy",
    "BGMI",
    "NULLCLASS",
    "Interview",
    "IAS",
    "DSA",
    "Elvish Yadav",
    "Astrology",
    "Wildlife",
  ]

  return (

    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
          <div className="navigation_Home">
            {
              NavList.map(m=>{
                return(
                  <p key = {m} className="btn_nav_home">
                  {m}
                  </p>
                )
              })
            }
          </div>
            <ShowVideoGrid vids = {vids}/>
        </div>
    </div>
  )
}
