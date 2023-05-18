import React, { useEffect, useState } from 'react'
import Profile from './ProfilePage.module.css'
import { useLocation, useNavigate } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import axios from 'axios';
import ReactModal from 'react-modal';


function ProfileMain() {
  const loction = useLocation()
  const email = loction.state
  const navigate = useNavigate(); // Add useNavigate hook

  const [redirect, setRedirect] = useState(false); // State for redirection
  const [modalIsOpen, setModalIsOpen] = useState(false); // State for modal visibility
  const [editMode, setEditMode] = useState(false); // Add this line
  const [editData, setEditData] = useState({}); // Add this line

  const emailValue = localStorage.getItem('email');
  console.log(emailValue);

  const { data, loading, error } = useFetch("http://localhost:8000/api/customers/");

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch(
        `http://localhost:8000/api/customers/${emailValue}`,
        {
          method: 'DELETE',
        }
      );

      if (response.ok) {
        // Account deleted successfully, perform any necessary actions
        console.log('Account deleted successfully');

        setRedirect(true);

      } else {
        // Handle unsuccessful account deletion
        console.log('Failed to delete account');
      }
      // Refetch the updated customer list
      // refetch();
    } catch (error) {
      console.error('Error deleting account', error);
    }
  };

  useEffect(() => {
    if (redirect) {
      // Redirect to login page
      window.location.href = '/login'
    }
  }, [redirect]);

  const handleEditClick = () => {
    setEditMode(true);
    setModalIsOpen(true);
    const customer = data.find((details) => details.email === emailValue);
    setEditData(customer);
  };

  const handleEditChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setEditData({ ...editData, [name]: value });
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8000/api/customers/${emailValue}`, editData)
      .then((response) => {
        console.log(response.data);
        alert('User details updated successfully');
        setEditMode(false);
        // refetch();
      })
      .catch((error) => {
        console.log(error);
        alert('Failed to update user details');
      });
  };

  // Check if customer is logged in
  if (!emailValue) {
    return (<div>You must be logged in to view this page.</div>);
  }


  return (
    <div>
      <div className={Profile.row}>
        <div className={Profile.col}>
          <div className={Profile.buttonContainer}>
            {editMode ? ( // Render edit form if in edit mode
              <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                contentLabel="Edit Profile"
                className={Profile.editModal} // Apply the modal CSS class
              >
                <form onSubmit={handleEditSubmit}>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>First Name:</label>
                    <input
                      className={Profile.editInput}
                      type="text"
                      name="firstName"
                      value={editData.firstName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>Last Name:</label>
                    <input
                      className={Profile.editInput}
                      type="text"
                      name="lastName"
                      value={editData.lastName}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>Username:</label>
                    <input
                      className={Profile.editInput}
                      type="text"
                      name="username"
                      value={editData.username}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>Address:</label>
                    <input
                      className={Profile.editInput}
                      type="text"
                      name="address"
                      value={editData.address}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>Contact No:</label>
                    <input
                      className={Profile.editInput}
                      type="text"
                      name="contactNo"
                      value={editData.contactNo}
                      onChange={handleEditChange}
                    />
                  </div>
                  <div className={Profile.editRow}>
                    <label className={Profile.editLabel}>Email:</label>
                    <input
                      className={Profile.editInput}
                      type="email"
                      name="email"
                      value={editData.email}
                      onChange={handleEditChange}
                    />
                  </div>
                  <button type="submit" className={Profile.saveEdit}>Save</button>

                </form>
              </ReactModal>
            ) : (
              <button className={Profile.buttons} onClick={handleEditClick}>
                Edit Profile
              </button>
            )}
            <button className={Profile.buttonDelete} onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </div>
        </div>
        {data.map((details, index) => {
          console.log(details.dateOfBirth[0]);
          if (`${details.email}` === emailValue)
            return (
              <div className={Profile.col1}>
                <div className={Profile.details}>
                  <p>First-Name: {details.firstName}</p>
                  <p>Last-Name: {details.lastName}</p>
                  <p>Username: {details.username}</p>
                  <p>Contact-NO: {details.contactNo}</p>
                  <p>Address: {details.address}</p>
                  {/* <p>Date-of-Birth: {details.dateOfBirth}</p> */}
                  <p>Email: {details.email}</p>
                </div>
              </div>
            );
        })}
      </div>
    </div>
  );
}

export default ProfileMain
