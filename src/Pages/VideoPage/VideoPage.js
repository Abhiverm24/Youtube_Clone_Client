import React, { useEffect } from 'react'
// import vid from '../../Components/Video/vid.mp4'
import './VideoPage.css'
import LikeWatchLaterSaveBtns from './LikeWatchLaterSaveBtns'
import Comments from '../../Components/Comments/Comments'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from 'moment'
import { Link } from 'react-router-dom'
import { addToHistory } from '../../actions/History'
import {viewVideo} from '../../actions/video'


export default function VideoPage() {

    const {vid}= useParams();

    // const channels = useSelector(state =>state?.channelReducer)
    // const currentChannel = channels.filter(c=>c._id===vid)[0];
    const vids = useSelector((state) => state.videoReducer)?.data;
    // console.log(vid)
    // console.log(vids)

    const vv = vids?.filter((q) => q._id === vid)[0];
    // console.log(vv)
    const dispatch = useDispatch();

    const CurrentUser = useSelector(state => state?.CurrentUserReducer)

    const handleHistory = ()=>{
        // console.log("render");
        dispatch(
            addToHistory({
                videoId:vid,
                Viewer:CurrentUser?.result._id,
            }
            )
        )
    }

    const handleViews=()=>{
        dispatch(viewVideo(
            {id:vid}
        ))
    }

    useEffect(()=>{
        if(CurrentUser){
            handleHistory();
        }
        handleViews();
    },[]);



  return (
    <>
    <div className="container_videoPage">
        <div className="container2_videoPage">
            <div className="video_display_screen_videoPage">
            <video src = {`http://localhost:8000/${vv.filePath}`} className={"video_ShowVideo_videoPage"}
            // {/* <video src = {`https://youtube-clone-9tp3.onrender.com/${vv.filePath}`} className={"video_ShowVideo_videoPage"} */}
                controls
                autoPlay></video>
                <div className="video_details_videoPage">
                    <div className="video_btns_title_VideoPage_cont">
                        <p className="video_title_videoPage">{vv?.videoTitle}</p>
                        <div className="views_date_btns_VideoPage">
                            <div className="views_videoPage">
                                {vv?.Views} views <div className="dot"></div> {moment(vv?.createdAt).fromNow()}
                            </div>
                        <LikeWatchLaterSaveBtns vv ={vv} vid= {vid}/>
                        </div>
                    </div>
                    <Link to = {`/channel/${vv.videoChannel}`}  className="channel_details_videopage">
                        <b className="channel_logo_videoPage">
                            <p>{vv?.Uploader.charAt(0).toUpperCase()}</p>
                        </b>
                        <p className="channel_name_videoPage">{vv?.Uploader}</p>
                    </Link>

                    <div className="comments_VideoPage">
                        <h2>
                            <u>Comments</u>
                        </h2>
                        <Comments videoId={vv._id}/>
                    </div>
                </div>
            </div>
            <div className="moreVideoBar">More Video</div>
        </div>
    </div> 
    </>
  )
}
