import React, { useState } from 'react'
import './Comments.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteComment, editComment } from '../../actions/Comments';
import moment from "moment";

export default function DisplayComment({cId,commentsBody,commentOn, Location, userId , userCommented}) {

    const [commentBdy, setcommentBdy] = useState("");
    const [Edit, setEdit] = useState(false);

    const [cmtId, setcmtId] = useState("");
    const dispatch = useDispatch();

    const CurrentUser = useSelector(state => state?.CurrentUserReducer)


    const handleEdit = (ctid,ctbdy)=>{
        setEdit(true);
        setcmtId(ctid);
        setcommentBdy(ctbdy);
    };

    const handleOnSubmit =(e)=>{
        e.preventDefault();
        if(!commentBdy){
            alert("Type Your Comment")
        }else{
            // console.log(commentBdy);
            dispatch(editComment({
                id:cmtId,
                CommentBody:commentBdy,
            }))
            setcommentBdy("");
        }
        setEdit(false);
    };
    const handleDel=(id)=>{
        dispatch(deleteComment(id))
    }
    return (
    <>
    {
        Edit ? (<>
            <form className="comments_sub_form_comments"
                onSubmit = {handleOnSubmit}
                >
            
                <input type="text"
                    onChange={(e)=>setcommentBdy(e.target.value)}
                    placeholder='Edit comment..' 
                    value={commentBdy}
                    className='comment_ibox'/>

                <input type="submit" value="change" className='comment_add_btn_comment' />
            </form>

        </>):(<>
            <p className="comment_body">{commentsBody}</p>
            <p className='comment_body'>{Location}</p>
        </>)
    }
    
    <p className="usercommented">{" "} - {userCommented} commented {moment(commentOn).fromNow()}</p>
    {
        CurrentUser?.result._id===userId && (
            <p className="editdel_Displaycomment">
                <i onClick={()=>handleEdit(cId,commentsBody)}>Edit</i>
                <i onClick={()=> handleDel(cId)}> Delete</i>
            </p>
        )
    }
    </>
  )
}
