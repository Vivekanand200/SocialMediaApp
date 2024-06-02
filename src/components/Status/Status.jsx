import React from 'react'

const Status = (status) => {
    return (

        <div className='bg-green-500 rounded-full w-[70px] h-[70px] flex justify-center  items-center'>
            <div className='w-[60px] h-[60px] rounded-full'>
                <img src={status.profilePhoto} alt="RahulPost" className='w-[60px] h-[60px] rounded-full object-cover' />
            </div>
        </div>

    )
}

export default Status