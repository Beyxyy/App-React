import React from 'react';

import Header from '../Component/Header';
import Menu from '../Component/Menu';
import ProfilePicture from '../Component/ProfilePicture';

const Profile = () => {
    return (
        <div>
            <Header/>

            <ProfilePicture/>
            <div>Profile</div>
            <Menu/>
        </div>
    );
};

export default Profile;