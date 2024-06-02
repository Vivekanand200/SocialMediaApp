import React from 'react'
const OnlineUsers = (user) => {
    return (
        <li className='flex items-center mb-3'>
            <div className='mr-3 relative -z-10'>
                <img src={user.profilePhoto} alt="RahulPost" className='w-10 h-10 rounded-full object-cover' />
                <span className=' w-3 h-3 rounded-full bg-green-500 absolute top-[-2px] right-0 border-[2px] border-white '></span>
            </div>
            <span className='font-bold'>{user.username}</span>
        </li>
    )
}

export default OnlineUsers