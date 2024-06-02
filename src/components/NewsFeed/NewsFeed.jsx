import React, {useEffect,useState} from 'react'
import UploadPost from '../UploadPost/UploadPost'
import Post from '../Post/Post'
import { getAllPosts, getTimelinePost } from '../../utils/api/api';
import { useParams } from 'react-router-dom';
 const NewsFeed = ({userProfile}) => {
  const [posts,setPosts] = useState([]);
  const {username} = useParams();
  useEffect(()=>{
    const timelinePosts = async()=>{
      try {
        const res= userProfile ? await getTimelinePost(username)  : await getAllPosts();
        setPosts(res.data?.posts);
      } catch (error) {
        console.log(error);
      }
    }
    timelinePosts();

  },[username]);
  return (
    <div style={{flex:5.5}}>
      {userProfile ?'' :<UploadPost />}
      {
        posts.map((post)=>(<Post key={post._id} post={post} /> ))
      }
      
    </div>
  )
}

export default NewsFeed