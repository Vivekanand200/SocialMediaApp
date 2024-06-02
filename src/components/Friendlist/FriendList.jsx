import React from 'react'

const FriendList = (friend) => {
    return (
        <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <img src={friend.profilePhoto} alt="RahulPost" className='w-8 h-8 rounded-full object-cover' />
            <span className='ml-2'>{friend.username}</span>
        </li>
    )
}

export default FriendList