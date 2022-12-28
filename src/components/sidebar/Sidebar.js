import React from 'react';
import { useNavigate,useLocation } from 'react-router-dom';
import {AiOutlineHome,AiOutlineSearch,AiOutlineHeart,AiFillHeart,AiFillHome} from "react-icons/ai";
import {MdOutlineExplore,MdOutlineAddPhotoAlternate,MdExplore} from "react-icons/md";
import {BiMessageSquareDetail} from "react-icons/bi";
import {CgProfile} from "react-icons/cg";
import {GiHamburgerMenu} from "react-icons/gi";
function Sidebar() {
    const navigate=useNavigate();
    const location=useLocation();
    console.log("location",location);
    const handleNavigate=(data)=>{
        console.log(data);
        if(data.name==="Search")
        {
            navigate("/search")
        }
        else if(data.name==="Explore")
        {
            navigate('/explore')
        }
        else if(data.name==="Messages")
        {
            navigate("/message")
        }
        else if(data.name==="Notifications")
        {
            navigate('/notification')
        }
        else if(data.name==="Home")
        {
            navigate('/main')
        }
    }
    const sidebarData=[
        {
            name:"Home",
            imageURL:location?.pathname==="/main"?<AiFillHome/>:<AiOutlineHome/>,
            link:"/home"
        },
        {
            name:"Search",
            imageURL:<AiOutlineSearch/>,
            link:"/search"
        },
        {
            name:"Explore",
            imageURL:location?.pathname==="/explore"?<MdExplore/>:<MdOutlineExplore/>,
            link:"/explore"
        },
        {
            name:"Messages",
            imageURL:<BiMessageSquareDetail/>,
            link:"/messages"
        },
        {
            name:"Notifications",
            imageURL:location?.pathname==="/notification"?<AiFillHeart/>:<AiOutlineHeart/>,
            link:"/notifications"
        },
        {
            name:"Create",
            imageURL:<MdOutlineAddPhotoAlternate/>,
            link:"/explore"
        },
        {
            name:"Profile",
            imageURL:<CgProfile/>,
            link:"/messages"
        },
        {
            name:"More",
            imageURL:<GiHamburgerMenu/>,
            link:"/notifications"
        },
    ];
  return (
    <div  style={{backgroundColor:"#fff"}}>
       <div className='p-1'>
       <img
            src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
            alt="Instagram Logo"          
        />
       </div>
        <ul className="display-flex-column gap" style={{marginLeft:'-1rem',marginRight:"3rem"}}>
            {
                sidebarData?.map((item)=>(
                    <li className='display-flex cursor-pointer' onClick={()=>handleNavigate(item)}>
                        <p className='font-size'>{item.imageURL}</p>
                        <p className='ml-1' style={{fontSize:"1.25rem",fontWeight:"300"}}>{item.name}</p>
                    </li>
                ))
            }

        </ul>
    </div>
  )
}

export default Sidebar