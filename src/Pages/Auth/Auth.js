import React from 'react'

import './Auth.css'
import { GoogleLogout } from 'react-google-login'
import { BiLogOut } from 'react-icons/bi'
import { useDispatch } from 'react-redux'
import { setCurrentUser } from '../../actions/currentUser'
import { Link } from 'react-router-dom'

export default function Auth({User , setAuthBtn , setEditCreateChannelBtn}) {

    const dispatch = useDispatch();
    const onLogoutSuccess = ()=>{
        dispatch(setCurrentUser(null));
        alert("Log Out Successfully");
    };

  return (
    <div className="Auth_container" onClick={()=>setAuthBtn(false)}>
        <div className="Auth_container2">
            <p className="user_details">
                <div className="Channel_logo_App">
                    <p className="fstChar_logo_App">
                        {
                            User?.result.name?(
                                <>
                                    {User?.result.name.charAt(0).toUpperCase()}
                            </>):(
                                <>
                                    {User?.result.email.charAt(0).toUpperCase()}
                                </>
                            )}
                    </p>
                </div>
                <div className="email_auth">
                    {User?.result.email}
                </div>
            </p>
            
            <div className="btns_auth">
                {
                    User?.result.name?<>
                    {
                        <Link to = {`/channel/${User?.result._id}`} className='btn_Auth'>Your Channel</Link>
                    }
                    </> : <>
                        <input type="submit" className='btn_auth' value="Create Your Channel" 
                        onClick={()=>setEditCreateChannelBtn(true)}/>
                    </>
                }
            
                <div>
                    <GoogleLogout
                        clientId = {"389020969923-35pm2qdvlpmnis7m5fnh8ta3ibdkj3s7.apps.googleusercontent.com"}   
                        onLogoutSuccess={onLogoutSuccess}                 
                        render={(renderProps)=>(
                            <div onClick={renderProps.onClick} className='btn_auth'>
                                <BiLogOut/>
                                Log Out
                            </div>
                        )}
                        />
                </div>
            </div>
        </div>
    </div>
  )
}
