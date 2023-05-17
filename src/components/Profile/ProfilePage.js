import React, { useState } from 'react'
import Profile from './ProfilePage.module.css'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
// import Img1 from './images/IMGprofile/profile.png'

function ProfileMain() {
  const loction = useLocation()
  const email = loction.state

  const emailValue = localStorage.getItem('email');
  console.log(emailValue);
  // const [profilePicture, setProfilePicture] = useState(Img1)

  // const handleProfilePictureChange = () => {
  //   const newProfilePicture = "new-profile-picture-jpg"
  //   setProfilePicture(newProfilePicture)
  // }

  const { data, loading, error } = useFetch("http://localhost:8000/api/customers/");
  
  return (
    <div>
      <div className={Profile.row}>
        <div className={Profile.col}>
          {/* <img className={Profile.img1} src="./images/IMGprofile/profile.png" alt='Profile Picture' width={200} height={200}/> */}
          <div className={Profile.buttonContainer}>
            {/* <button className={Profile.buttons} >Change Profile Picture</button> */}
            <button className={Profile.buttons}>Edit Profile</button>
            <button className={Profile.buttonDelete}>Delete Account</button>
          </div>
        </div>
        {
          data.map((details, index) => {
            console.log(details.dateOfBirth[0])
            if(`${details.email}` === emailValue)
            return (
              <div className={Profile.col1}>
                <div className={Profile.details}>
                  <p>First-Name:     {details.firstName}</p>
                  <p>Last-Name:      {details.lastName}</p>
                  <p>Username:       {details.username}</p>
                  <p>Contact-NO:     {details.contactNo}</p>
                  <p>Address:     {details.address}</p>
                  {/* <p>Date-of-Birth:  {details.dateOfBirth}</p> */}
                  <p>Email:          {details.email}</p>
                </div>
              </div>
            )

          })
        }

      </div>
    </div>
  )
}

export default ProfileMain
