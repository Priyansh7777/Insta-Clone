import React from 'react';
import {HiOutlineDotsHorizontal} from "react-icons/hi"
import {AiOutlineHeart} from "react-icons/ai";
import {TbMessageCircle2,TbBrandTelegram} from "react-icons/tb";
import {CiSaveDown2} from "react-icons/ci";
import {FcLike} from "react-icons/fc";
function PostCard({name,postTitle,postImage}) {
  return (
    <div className='round-border-grey cursor-pointer pl-1 mt-1'>
        <div className='display-flex gap p-1'>
          <p>{name}</p>
          <img src="/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png" className="h-4 w-4" alt="UserIcon"/>
          <p style={{textAlign:"right"}} className="fontSize-1 text-align-right">
            <HiOutlineDotsHorizontal/>
          </p>
        </div>
        <div className='display-flex flex-direction-column justify-content-center align-items-center'>
          <img src={postImage} alt="PostImage" className='height-15'/>
          <p>{postTitle}</p>
        </div>
        <div className='display-flex gap-1 p-1'>
          <p className='font-size-3'><AiOutlineHeart/></p>
          <p className='font-size-3'><TbMessageCircle2/></p>
          <p className='font-size-3'><TbBrandTelegram/></p>
          <p className='font-size-3'><CiSaveDown2/></p>
        </div>

      
    </div>
  )
}

export default PostCard;