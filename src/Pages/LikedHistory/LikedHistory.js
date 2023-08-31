import React from 'react'
import WHL from '../../Components/WHL/WHL';
import { useSelector } from "react-redux";

export default function LikedHistory() {
    const LikedHistoryList = useSelector(state => state.LikedHistoryReducer)

    return (
        <>
            <WHL page={"Liked Videos History"} videoList={LikedHistoryList} />
        </>
    )
}
