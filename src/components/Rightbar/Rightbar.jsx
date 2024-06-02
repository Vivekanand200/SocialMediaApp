import React, { useContext, useEffect, useState } from 'react'
import gifticon from '../../assets/giftIcon.png'
import RahulPost from '../../assets/RahulPost.jpg'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import { users } from '../../data/data'
import { toast } from 'react-toastify'
import { getUserFriendsData } from '../../utils/api/api'
import {AuthContext} from '../../context/AuthContext'
const Rightbar = ({ userProfile }) => {


  const RightbarHome = () => {
    return (
      <>
        <div className='flex items-center '>
          <img src={gifticon} alt="gifticon" className=' w-10 h-10 mr-3' />
          <span className='font-semibold text-md'>
            <b>Anshu</b>and<b>32 others</b> have birthday today
          </span>
        </div>
        <div className='mt-5'>
          <h1 className='font-bold text-lg mb-5'>Sugested for you</h1>
          <ul>
            <li className='p-0 m-0 flex items-center mb-5 text-xl'>
              <img src={RahulPost} alt="RahulPost" className='w-8 h-8 rounded-full object-cover' />
              <span >Lavkush Raj</span>
            </li>
          </ul>
        </div>
        <h1 className='font-bold text-lg mb-5'>Online</h1>
        <ul className='m-0 p-0 '>
          {
            users.map((user) => (
              <OnlineUsers key={user.id} profilePhoto={user.profilePhoto} username={user.username} />
            ))
          }
        </ul>
      </>)
  }




  const RightbarProfile = () => {
    const [friends, setFriends] = useState([]);
    const [isFollowed,setIsFollowed] = useState(false);
    const {user:currentUser} = useContext(AuthContext);

    useEffect(() => {
      setIsFollowed(currentUser.followings.includes(userProfile?._id))
    
      
    }, [currentUser,userProfile._id])
    
    useEffect(() => {
      const getFriends = async () => {
        try {
          const res = await getUserFriendsData(userProfile._id);
          setFriends(res.data.friends);
          console.log(res.data.friends);
        } catch (error) {
          console.log(error);
          toast.error("Failed to get friends")
        }
      }
      getFriends();
    }, [userProfile._id]);

    const handleFollow = async( )=>{
try {
  
} catch (error) {
  console.log(error);
}
    }
    return (
      <>
      {
        userProfile.username !== currentUser.username &&
 (
<button onClick={handleFollow} className='bg-blue-400 rounded-md px-2 py-2 cursor-pointer'>
  {
    isFollowed ? "Following" : "Follow"
  }
</button>
        )
      }
        <h1 className='font-bold text-xl mb-[10px]'>User Information</h1>
        <div className=' mb-[30px]'>
          <div className=' mb-[10px]'>
            <span className='font-semibold mr-4 text-slate-500'>City:</span>
            <span>{userProfile.city}</span>
          </div>
          <div className=' mb-[10px]'>
            <span className='font-semibold mr-4 text-slate-500'>From:</span>
            <span>{userProfile.from}</span>
          </div>
          <div className=' mb-[10px]'>
            <span className='font-semibold mr-4 text-slate-500'>Relationship:</span>
            <span>{userProfile.relationship === 1 ? "Single" : userProfile.relationship === 2 ? "Married" : "Other"}</span>
          </div>
          <h1 className='font-bold text-xl mb-[10px]'>Friends</h1>
          <div className='grid grid-cols-3 gap-4'>
            {
              friends.map(
                (friend) => (
                  <div key={friend._id}>
                    <img src={friend.profilePicture} alt={`${friend.username}`} className=' w-24 h-24 object-cover rounded-md' />
                    <span>{friend.username}</span>
                  </div>
                )
              )
            }
          </div>
        </div>
      </>
    )
  }
  return (
    <div style={{ flex: 3.5 }}>
      <div className='pt-5 pr-5 static'>
        {
          userProfile ? <RightbarProfile /> : <RightbarHome />
        }
      </div>
    </div>
  )
}

export default Rightbar