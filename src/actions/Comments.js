import * as api from '../api'

export const postComment = (CommentData)=>async(dispatch)=>{
    try{
        // console.log(CommentData);
        const {data} = await api.postComment(CommentData);
        // console.log(data);
        dispatch({type:"POST_COMMENT",payload:data});
        dispatch(getAllComment())
    } catch(error){
        console.log(error);
    }
}

export const editComment = (CommentData)=>async(dispatch)=>{
    // console.log(CommentData);
    try{
        const {CommentBody,id} = CommentData;
        const {data} = await api.editComment(CommentBody,id);
        // console.log(data);
        dispatch({type:"EDIT_COMMENT",payload:data});
        dispatch(getAllComment());
    } catch(error){
        console.log(error);
    }
}

export const getAllComment = ()=>async(dispatch)=>{
    try {
        const {data} = await api.getAllComment();
        // console.log(data);
        dispatch({type: 'FETCH_ALL_COMMENT', payload:data})
    } catch (error) {
        console.log(error);
    }
}

export const deleteComment = (id)=>async(dispatch)=>{
    try {
        // console.log(id)
        await api.deleteComment(id);
        dispatch(getAllComment());
    } catch (error) {
        console.log(error)
    }
}