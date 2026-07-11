import React from 'react'
import { useSelector } from "react-redux";
import "./profile.css"

const UserProfile = () => {

  const { isSignedIn } = useSelector((state) => state.auth);
  var user;
  if (isSignedIn) user = JSON.parse(localStorage.getItem("userData"));


  return (
    <div className='container_profile'>
      { isSignedIn && (
        <div className='profile'>
          <div className='profile_img'>
            <img src={ user.photoURL } alt="userImg" />
          </div>
          <div className='profile_content'>
            <h4>Name- { user.displayName }</h4>
            <h4>Email- { user.email }</h4>
          </div>
          
        </div>
      ) }
    </div>
  )
}

export default UserProfile;