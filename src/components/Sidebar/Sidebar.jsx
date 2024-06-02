import React from 'react'
import { SiFeedly } from 'react-icons/si'
import { BiSolidVideos } from 'react-icons/bi'
import { FaUserGraduate, FaCalendarDay } from 'react-icons/fa'
import { BsFillQuestionSquareFill } from 'react-icons/bs'
import { MdGroups } from 'react-icons/md'
import { IoChatboxEllipsesSharp, IoBookmarks, IoBriefcase } from 'react-icons/io5'
import FriendList from '../Friendlist/FriendList'
import { friends } from '../../data/data.js'
const Sidebar = () => {
  return (
  
    <div style={{ flex: 3, height: "calc(100vh - 50px)" }} className='custom-scrollbar  overflow-y-auto sticky top-[50px]'>
      <div className='p-5 '>
        <ul>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <SiFeedly />
            <span className='ml-3'>Feeds</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <BiSolidVideos />
            <span className='ml-3'>Videos</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <MdGroups />
            <span className='ml-3'>Groups</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <IoChatboxEllipsesSharp />
            <span className='ml-3'>Chats</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <IoBookmarks />
            <span className='ml-3'>Bookmarks</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <BsFillQuestionSquareFill />
            <span className='ml-3'>Questions</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <IoBriefcase />
            <span className='ml-3'>Jobs</span>
          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <FaUserGraduate />
            <span className='ml-3'>Courses</span>

          </li>
          <li className='p-0 m-0 flex items-center mb-5 text-xl'>
            <FaCalendarDay />
            <span className='ml-3'>Events</span>
          </li>

        </ul>
        <div className="button">
          <button className='rounded-md bg-slate-400 w-[150px] p-2'>See More</button>
        </div>
        <hr className='mt-5' />
      </div>
      <div className='mt-5 p-5'>
        <h1 className='font-bold text-lg mb-5'>Your Friends</h1>
        <ul>
          {
            friends.map((friend) => (
              <FriendList key={friend.id} profilePhoto={friend.profilePhoto} username={friend.username} />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Sidebar