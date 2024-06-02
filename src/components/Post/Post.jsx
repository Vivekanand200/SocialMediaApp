import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMoreVert } from 'react-icons/md'
import likeIcon from '../../assets/likeIcon.png'
import heartIcon from '../../assets/heartIcon.png'
import moment from 'moment';
import { getUserData, likeAndDislikePost } from '../../utils/api/api.js'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext.jsx'
const Post = ({ post }) => {
    // const user = users.find(user => user.id === post?.userId);
    // const profilePhoto = user ? user.profilePhoto : '';
    // const username = user ? user.username : "unknown user";
    const [like, setLike] = useState(post.likes?.length);
    const [isLiked, setIsLiked] = useState(false);
    const [user, setUser] = useState({});
    const { user: currentUser } = useContext(AuthContext);

    useEffect(() => {
        setIsLiked(post.likes && post.likes.includes(currentUser._id));
    }, [currentUser._id, post.likes]);

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                if (post.userId) {
                    const res = await getUserData(post.userId);
                    setUser(res.data.userInfo);
                }

            } catch (error) {
                console.log(error);
            }
        }
        getUserInfo();
    }, [post.userId]);

    const handleLike = async () => {
        try {
            await likeAndDislikePost(post._id, currentUser._id);
            setLike(isLiked ? (like - 1) : (like + 1));
            setIsLiked(!isLiked);
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }

    }
    return (
        <div className='w-full rounded-md shadow-lg mt-8 mb-8 p-3'>
            <div className='p-3'>
                <div className='flex justify-between items-center'>
                    <Link to={`/profile/${user.username}`}>
                        <div className='flex items-center'>
                            <img src={user.profilePicture} alt="profile" className='w-8 h-8 rounded-full object-cover' />
                            <span className='font-bold ml-3 mr-3'>{user.username}</span>
                        </div>
                    </Link>
                    <div className='flex justify-end'>
                        <span className='text-sm'>{moment(post.createdAt).fromNow()}</span>
                        <MdOutlineMoreVert className='text-xl cursor-pointer' />
                    </div>
                </div>
            </div>
            <div className='mt-5 mb-5 '>
                <span>{post?.desc}</span>
                {post.img && (
                    <img src={post.img} alt="postrahul" className='mt-5 w-full object-contain ' style={{
                        maxHeight: "500px"
                    }} />
                )}
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center gap-1'>
                    <img src={likeIcon} alt="likeIcon" className=' w-6 h-6 cursor-pointer' onClick={handleLike} />
                    <img src={heartIcon} alt="heartIcon" className ='w-6 h-6 cursor-pointer' onClick={handleLike} />
                    <span className='text-sm'>{like} likes</span>
                </div>
                <div>
                    <span className=' cursor-pointer border-b-[1px] border-slate-300 text-sm'>{post.comment} comments</span>
                </div>
            </div>
        </div>
    )
}

export default Post