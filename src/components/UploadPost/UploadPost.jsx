import React, { useContext, useState } from 'react'
import profile from '../../assets/RahulPost.jpg'
import { MdLabel, MdPermMedia, MdEmojiEmotions, MdLocationPin } from 'react-icons/md'
import { StatusData } from '../../data/data'
import Status from '../Status/Status'
import { uploadPost } from '../../utils/api/api'
import { AuthContext } from '../../context/AuthContext'
import { toast } from 'react-toastify';

const UploadPost = () => {
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    console.log(file);
    const [loading, setLoading] = useState(false);
    const [preview, setPreview] = useState(null);
    const { user } = useContext(AuthContext);
    const handlePostUpload = async () => {
        setLoading(true);
        try {
            console.log(user);
            const res = await uploadPost(user._id, desc, file);
            toast.success("Post upload successful");
            setFile(null);
            setPreview(null);
            setDesc("");
            setLoading(false);
        } catch (error) {
            console.log(error);
            toast.error("Post upload failed");
        } finally {
            setLoading(false);
        }
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFile(file);
        if (file) {
            const url = URL.createObjectURL(file);
            setPreview(url);
        } else {
            setPreview(file);
        }
    }

    return (
        <>
            <div className='flex gap-1 mt-1 p-1 ml-2'>
                {
                    StatusData.map((status) => (
                        <Status key={status.id} profilePhoto={status.profilePhoto} />
                    ))
                }
            </div>
            <hr className='mt-2' />
            <div className='w-full h-44 rounded-lg shadow-lg'>
                <div className="wrapper p-3 ">
                    <div className="top flex items-center m-3">
                        <img src={profile} alt="profile" className=' w-12 h-12 rounded-full mr-3 object-cover' />
                        <input
                            type="text"
                            placeholder='what is on your mind?'
                            className='w-[80%] focus:outline-none'
                            onChange={(e) => {
                                setDesc(e.target.value);
                            }}
                        />
                        { preview && <img src={preview} alt='Image Preview' className='w-[50px] h-[50px] rounded-md object-cover ml-[15px]' />}
                    </div>
                    <hr className='m-5' />
                    <div className="bottom flex items-center justify-between">
                        <div className='flex ml-5'>
                            <label className='flex items-center mr-4 cursor-pointer'>
                                <MdPermMedia className='mr-1 text-orange-600' />
                                <span>Photo or Video</span>
                                <input
                                    type="file"
                                    id='file'
                                    onChange={handleFileChange}
                                    className='hidden'
                                    accept='.png, .jpg, .jpeg'
                                />
                            </label>
                            <div className='flex items-center mr-4 cursor-pointer'>
                                <MdLabel className='mr-1 text-blue-600' />
                                <span>Tags</span>
                            </div>
                            <div className='flex items-center mr-4 cursor-pointer'>
                                <MdEmojiEmotions className='mr-1 text-yellow-600' />
                                <span>Emoji</span>
                            </div>
                            <div className='flex items-center mr-4 cursor-pointer'>
                                <MdLocationPin className='mr-1 text-green-600' />
                                <span>Location</span>
                            </div>
                        </div>
                        <button
                            disabled={loading}
                            onClick={handlePostUpload} className=' bg-green-600 text-white p-2 rounded-lg font-bold'>
                            {loading ? "Uploading..." : "Upload"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UploadPost