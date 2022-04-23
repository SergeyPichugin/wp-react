import React from 'react'
import avatar from './ava.png'
import './Profile.css'

function Profile() {
    return(
        <div className='container'>
            <div className='cube'></div>
            <img className='image' src={avatar} />
        </div>
    )
}

export default Profile