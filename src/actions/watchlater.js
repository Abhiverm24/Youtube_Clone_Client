import * as api from '../api'

export const addTowatchLater = (watchLaterData)=>async(dispatch)=>{
    try{
        const {data} = await api.addTowatchLater(watchLaterData);
        console.log(data);
        dispatch({type:"POST_WATCH_LATER",data});
        dispatch(getAllwatchLater())
    } catch(error){
        console.log(error);
    }
}

export const getAllwatchLater = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllwatchLater();
        console.log(data);
        dispatch({type: 'FETCH_ALL_WATCH_LATER', payload:data});
    } catch (error) {
        console.log(error); 
    }
}

export const deleteWatchLater = (watchLaterData)=>async(dispatch)=>{
    try {
        const {videoId, Viewer} = watchLaterData;
        await api.deleteWatchLater(videoId,Viewer);
        dispatch(getAllwatchLater());
    } catch (error) {
        console.log(error)
    }
}