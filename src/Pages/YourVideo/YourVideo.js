import React from 'react'
import LeftSidebar from '../../Components/LeftSidebar/LeftSidebar'
import ShowVideoGrid from '../../Components/ShowVideoGrid/ShowVideoGrid'
// import vid from '../../Components/Video/vid.mp4'
import "./YourVideo.css"
import {useSelector} from 'react-redux'


export default function YourVideo() {

  const CurrentUser = useSelector(state => state?.CurrentUserReducer)
  const vids = useSelector(state =>state.videoReducer)?.data?.filter(q=>q?.videoChannel===CurrentUser?.result?._id).reverse();


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
          <div className="container_yourvideo">
            <h1>Your Videos</h1>
            {
              CurrentUser?(<>
                <ShowVideoGrid vids = {vids}/>
              </>):(<>
                <h3>Please login to see your Uploaded Video List</h3>
              </>)
            }
          </div>
        </div>
    </div>
  )
}
