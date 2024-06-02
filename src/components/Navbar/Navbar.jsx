import React, { useContext } from 'react'
import Logo from '../Logo/Logo'
import { Link } from 'react-router-dom'
import { IoChatboxEllipses, IoNotifications, IoPersonSharp, IoSearch } from 'react-icons/io5'
import RahulPost from '../../assets/RahulPost.jpg'
import { AuthContext } from '../../context/AuthContext'

const Navbar = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className='h-[50px] w-full bg-gray-600 flex items-center sticky top-0'>
            <div className="left" style={{ flex: 3 }}>
                <Link to={"/"}>
                    <div className="logodiv cursor-pointer">
                        <Logo />
                    </div>
                </Link>
            </div>
            <div className="center" style={{ flex: 5 }}>
                <div className="searchBar w-full h-9 bg-white rounded-md flex items-center ">
                    <IoSearch className='text-lg ml-3' />
                    <input type="text" className='search w-full focus:outline-none bg-none m-3' placeholder='Search...' />
                </div>
            </div>
            <div className="right flex items-center justify-around text-white" style={{ flex: 4 }}>
                <div className="tabLinks text-lg cursor-pointer flex gap-3 ">
                    <div className="tabLink1 font-bold">Home</div>
                    <div className="tabLink2 font-bold">Timeline</div>
                </div>
                <div className="tabIcons flex text-xl gap-3 ">
                    <div className="tabIcon1 cursor-pointer relative">
                        <IoPersonSharp className='text-2xl' />
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm'>1</span>
                    </div>
                    <div className="tabIcon2 cursor-pointer relative">
                        <IoChatboxEllipses className='text-2xl' />
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm'>1</span>
                    </div>
                    <div className="tabIcon3 cursor-pointer relative">
                        <IoNotifications className='text-2xl' />
                        <span className='w-4 h-4 bg-red-500 rounded-full text-white absolute top-[-5px] right-[-5px] flex items-center justify-center text-sm'>1</span>
                    </div>
                </div>
                {
                    user && <Link to={`/profile/${user.username}`}>
                    <div className="RahulPostPicdiv">
                        <img src={user ? user.profilePicture : RahulPost} alt="RahulPost" className='w-8 h-8 object-cover rounded-full cursor-pointer' />
                    </div>
                </Link>
                }
                
            </div>

        </div>
    )
}

export default Navbar