import React, { useEffect, useState } from 'react'
import NewsFeed from '../../components/NewsFeed/NewsFeed'
import Rightbar from '../../components/Rightbar/Rightbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { getUserProfileData } from '../../utils/api/api'

const Profile = () => {
  const { username } = useParams();
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    const getUserProfileInfo = async () => {
      try {
        const res = await getUserProfileData(username);
        setUserProfile(res.data.userProfileInfo);
      } catch (error) {
        console.log(error);
      }
    }
    getUserProfileInfo();

  }, []);
  return (
    <div>
      <div className='flex'>
        <Sidebar />
        <div style={{ flex: 9 }} className=' -z-10'>
          <div>
            <div className='h-[350px] relative'>
              <div className='min-w-full min-h-[250px] object-cover space-y-4 absolute box-content'>
                <img src={userProfile.coverPicture} alt="coverPic" className='w-full h-[250px]  object-cover' />
              </div>
              <div className='w-[170px] h-[170px] flex justify-center flex-col items-center bg-slate-400  rounded-full object-cover absolute left-0 right-0 m-auto top-40 border border-slate-700 shadow-lg'>
                <img src={userProfile.profilePicture} alt="profilePic" className=' w-[155px] h-[155px] rounded-full object-cover absolute border-slate-700  m-auto ' />
              </div>
            </div>
            <div className='flex flex-col items-center'>
              <h1 className='text-2xl font-bold'>{userProfile.username }</h1>
              <span>{userProfile.desc || "I'm new here! no bio"}</span>
            </div>
          </div>
          <div className='flex'>
            <NewsFeed userProfile />
            <Rightbar userProfile={userProfile} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile