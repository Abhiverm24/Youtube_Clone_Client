import React from 'react'
import LeftSidebar from '../LeftSidebar/LeftSidebar'
import "./WHL.css"
import WHLVideoLIst from './WHLVideoLIst'
import { useSelector , useDispatch} from 'react-redux';
import { clearHistory } from "../../actions/History";

import { clearLikedHistory } from '../../actions/LikedHistory';

export default function WHL({page,videoList}) {

    const CurrentUser = useSelector(state => state?.CurrentUserReducer)
    // console.log(videoList);

    const dispatch = useDispatch();
    const handleClearHistory = ()=>{
        if(CurrentUser){
            dispatch(clearHistory({
                userId:CurrentUser?.result._id
            }))
        }
    }


    const handleClearLikedHistory = () => {
        if (CurrentUser) {
          dispatch(clearLikedHistory({
            userId: CurrentUser?.result._id
          }))
        }
      }


  return (
    <div className="container_Pages_App">
        <LeftSidebar/>
        <div className="container2_Pages_App">
            <p className="container_whl">
                <div className="box_WHL leftside_whl">
                    <b>Your {page} shown here </b>
                    {
                        page==="History" && 
                        <div className="clear_history_btn" onClick={()=>handleClearHistory()}>
                            Clear History
                        </div>
                    }
                    {
                        page==="Liked History" &&
                        <div className="clear_history_btn" onClick={() => handleClearLikedHistory()}>Clear Liked History</div>
                    }
                </div>
                <div className="rightside_whl">
                    <h1>{page}</h1>
                    <div className="whl_list">
                        <WHLVideoLIst
                        page = {page}
                        CurrentUser = {CurrentUser?.result._id}
                        videoList = {videoList}
                        />
                    </div>
                </div>
            </p>
        </div>
    </div>
    
  )
}
