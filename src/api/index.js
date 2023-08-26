import axios from "axios"

// const API = axios.create({baseURL : "http://localhost:8000/"})
const API = axios.create({baseURL : "https://youtube-clone-s5ep.onrender.com"})

API.interceptors.request.use((req)=>{
    if(localStorage.getItem('Profile')){
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('Profile')).token}`
    }
    return req;
})

export const login=(authData)=>API.post('/user/login',authData);

export const updateChannelData = (id,updateData)=>API.patch(`/user/update/${id}`, updateData);

export const fetchAllChannel = ()=>API.get('/user/getAllChannels');

export const uploadVideo = (fileData,fileOptions) => API.post('/video/uploadVideo', fileData,fileOptions);

export const getVideos = ()=> API.get('/video/getvideos');

export const likeVideo = (id,Like)=>API.patch(`/video/like/${id}`,{Like});

export const viewsVideo = (id)=>API.patch(`/video/view/${id}`);

export const addTolikedVideo = (likedVideoData)=>API.post('/video/likedvideos',likedVideoData)
export const getAlllikedVideo = ()=> API.get('/video/getAlllikedvideos');
export const deletelikedVideo = (videoId,Viewer)=>API.delete(`/video/deletelikedVideo/${videoId}/${Viewer}`)


export const addTowatchLater = (watchLaterData)=>API.post('/video/watchLaters',watchLaterData)
export const getAllwatchLater = ()=> API.get('/video/getAllwatchLaters');
export const deleteWatchLater = (videoId,Viewer)=>API.delete(`/video/deleteAllWatchLaters/${videoId}/${Viewer}`)



export const addToHistory = (HistoryData)=>API.post('/video/History',HistoryData)
export const getAllHistory = ()=> API.get('/video/getAllHistory');
export const clearHistory = (userId)=>API.delete(`/video/clearHistory/${userId}`)


export const postComment =(CommentData)=>API.post('/comment/post',CommentData);
export const deleteComment =(id)=>API.delete(`/comment/delete/${id}`);
export const editComment =(CommentBody,id)=>API.patch(`/comment/edit/${id}`,{CommentBody});
export const getAllComment =()=>API.get('/comment/get');


export const addToLikedHistory = (LikedHistoryData) => API.post('/video/LikedHistory', LikedHistoryData)
export const getAllLikedHistory = () => API.get('/video/getAllLikedHistory')
export const clearLikedHistory = (userId) => API.delete(`/video/clearLikedHistory/${userId}`)


export const patchlocation = (id, location) => API.patch(`/comment/location/${id}`, { location })