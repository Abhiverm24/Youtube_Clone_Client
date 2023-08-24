import React , {useEffect, useState} from 'react'
import './Navbar.css'
import logo from './logo.ico'
import SearchBar from './SearchBar/SearchBar'
import {RiVideoAddLine} from 'react-icons/ri'
import { IoMdNotificationsOutline} from 'react-icons/io'
import { BiUserCircle} from 'react-icons/bi'
import { Link } from 'react-router-dom'

import {GoogleLogin} from 'react-google-login'
import {gapi} from 'gapi-script'

import {useDispatch, useSelector} from 'react-redux'
import { login } from '../../actions/auth'
import Auth from '../../Pages/Auth/Auth'

export default function Navbar({toggleDrawer , setEditCreateChannelBtn}) {

  const [AuthBtn, setAuthBtn] = useState(false);

  // const CurrentUser = null;

  // const CurrentUser = {
  //   result : {
  //     email : "xyz@mail.com",
  //     joinedOn : "2222-07-15T09:57:23.489Z",
  //   },
  // };

  const CurrentUser = useSelector(state => state.CurrentUserReducer)

  // const CurrentUser=useSelector(state=>state.currentUserReducer)


  console.log(CurrentUser)

  useEffect(()=>{
    function start(){
      gapi.client.init({
        clientId: "389020969923-35pm2qdvlpmnis7m5fnh8ta3ibdkj3s7.apps.googleusercontent.com",
        scope: "email",
      })
    }
    gapi.load("client:auth2",start);
  },
  []);
  const dispatch = useDispatch();
  const onSuccess = (response) =>{
    const Email = response?.profileObj.email;
    console.log(Email);
    dispatch(login({email:Email}));
  }

  const onFailure = (response) =>{
    console.log("Failed",response);
  }


  return (
    <>
    <div className='Container_Navbar'>

        <Link to={'/'} className="Burger_Logo_Navabar">
            <div className='burger' onClick={()=>toggleDrawer()}>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div className='logo_div_Navbar'>
                <img src={logo} alt="" />           
                <p className='logo_title_navbar'>Youtube</p>
            </div>
        </Link>

        <SearchBar/>

        <RiVideoAddLine size = {22} className= {"vid_bell_Navbar"} />

        <div className="apps_Box">
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
          <p className="appBox"></p>
        </div>
        
        <IoMdNotificationsOutline size = {22} className = "vid_bell_Navbar"/>

        <div className="Auth_cont_Navbar">
          {
            CurrentUser ? (
            <>
              <div className="Channel_logo_App" onClick={() =>setAuthBtn(true)}>
                <p className="fstChar_logo_App">
                  {
                    CurrentUser?.result.name ?(
                      <>{CurrentUser?.result.name.charAt(0).toUpperCase()}</>
                      ) : (
                        <>{CurrentUser?.result.email.charAt(0).toUpperCase()}</>
                        )}
                </p>
              </div>
            </>
            ) : (
              <>
            <GoogleLogin
              clientId = {"389020969923-35pm2qdvlpmnis7m5fnh8ta3ibdkj3s7.apps.googleusercontent.com"}
              onSuccess = {onSuccess}
              onFailure = {onFailure}
              render = {(renderProps)=>(
                <p onClick = {renderProps.onClick} className="Auth_Btn">
                <BiUserCircle size = {22}/>
                <b>Sign in</b>
                </p>
              )}
              />
            </>
          )}
          
        </div>
    </div>

    {
      AuthBtn &&
      <Auth
      setEditCreateChannelBtn = {setEditCreateChannelBtn}
      setAuthBtn = {setAuthBtn}
      User = {CurrentUser}/>
    }
    </>
  )
}
