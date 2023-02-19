import React from 'react';

const StudentProfile = ({ name, pictureUrl, email,score }) => {
  return (
    
    <div > 
      <div className="profile-container">
      <img className="profile-picture" src={pictureUrl}  />
      <div className="profile-info">
        <h1>{name}</h1>
        <p>{score}</p>
        <p>{email}</p>


        
      </div>
    </div>

    </div>
  );
};

export default StudentProfile;
