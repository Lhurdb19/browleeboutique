import React, { useState } from "react";
import { useAuthStore } from "../Lib/store";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const navigate = useNavigate();
  const { user, updateUser, Logout } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);  
  const [editableUser, setEditableUser] = useState(user || {}); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditableUser({
      ...editableUser,
      [name]: value,
    });
  };

  const handleSave = () => {
    updateUser(editableUser);
    setIsEditing(false);
  };

  // Handle logout
  const handleLogout = () => {
    Logout();
    navigate('/');
  };

  if (!user) {
    return (
      <div>
        <h3>Please log in to view your profile.</h3>
      </div>
    );
  }

  return (
    <div className="profile-component">
      <div className="profile-container">
        <h2>Your Profile</h2>
        
        {/* Display User Info */}
        <div className="profile-info">
          <label>Name:</label>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={editableUser.name || ""}
              onChange={handleInputChange}
            />
          ) : (
            <p>{user.name}</p>
          )}
        </div>
        <div className="profile-info">
          <label>Email:</label>
          {isEditing ? (
            <input
              type="email"
              name="email"
              value={editableUser.email || ""}
              onChange={handleInputChange}
            />
          ) : (
            <p>{user.email}</p>
          )}
        </div>

        {/* Toggle between Edit and View mode */}
        <div className="profile-btn">
          <div className="profile-button">
            {isEditing ? (
              <>
                <button onClick={handleSave}>Save Changes</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
              </>
            ) : (
              <button className="edit-profile" onClick={() => setIsEditing(true)}>
                Edit Profile
              </button>
            )}
          </div>

          {/* Log Out Button */}
          <div className="profile-button">
            <button onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
