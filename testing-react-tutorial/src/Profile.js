import React from 'react';



const Profile = ({user}) => {
    return (
        <React.Fragment>
            <div key={user.username} className="card">
                <p>{user.name}</p>
                <div>
                <img src={user.image} alt={user.name} />
                </div>
                <p>{user.email}</p>
            </div>
        </React.Fragment>
    )
}

export default Profile;