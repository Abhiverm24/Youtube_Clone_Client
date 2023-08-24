import React, { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './Comments.css'
import DisplayComment from './DisplayComment';
import { postComment } from '../../actions/Comments';

export default function Comments({videoId}) {

    const CurrentUser = useSelector(state => state?.CurrentUserReducer)

    const [commentText, setcommentText] = useState("");

    const commentsList = useSelector(s=>s.CommentReducer);
    console.log(commentsList)

    const dispatch = useDispatch();
    // const commentsList = [{
    //     _id:"1",
    //     commentsBody:"hello",
    //     userCommented:"abc",
    // },
    
    // {
    //     _id:"2",
    //     commentsBody:"hii",
    //     userCommented:"xyz",
    // }
    // ];

    const handleOnSubmit = (e)=>{
        e.preventDefault();
        if(CurrentUser){
            if(!commentText){
                alert("Please type your comment")
            }else{
                dispatch(postComment({
                    videoId:videoId,
                    userId:CurrentUser?.result._id,
                    commentsBody:commentText,
                    userCommented:CurrentUser?.result.name,
                }))
                setcommentText("");
            }
        }else{
            alert("please login to post comment")
        }
    }
  return (
    <>
        <form className="comments_sub_form_comments"
            onSubmit = {handleOnSubmit}>
            
            <input type="text"
                onChange={(e)=>setcommentText(e.target.value)}
                placeholder='add comment..' value = {commentText} className='comment_ibox'/>

            <input type="submit" value="add" className='comment_add_btn_comment' />
        </form>

        <div className="display_comment_container">
            {
                commentsList?.data?.filter(q=>videoId===q?.videoId).reverse().map((m)=>{
                    return(
                        <DisplayComment
                        cId = {m._id}
                        userId = {m.userId}
                        commentsBody = {m.commentsBody}
                        commentOn = {m.commentOn}
                        userCommented = {m.userCommented}
                        />
                    );
                })
            }
        </div>
    </>
  )
}
