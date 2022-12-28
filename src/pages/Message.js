import React from "react";
import {TbBrandTelegram} from "react-icons/tb";

function Message() {
  const messageList = [
    {
      id: 1,
      name: "Aditya Singh",
      last_chat_time: "42m",
      last_activity: "Sent you a message",
    },
    {
      id: 2,
      name: "Abhishek Singh",
      last_chat_time: "1h",
      last_activity: "Active 2h ago",
    },
    {
      id: 3,
      name: "Vibhu Singh",
      last_chat_time: "1h",
      last_activity: "Active Now",
    },
    {
      id: 4,
      name: "Anirudh Singh",
      last_chat_time: "1h",
      last_activity: "Active Now",
    },
    {
      id: 5,
      name: "Anirudh Singh",
      last_chat_time: "1h",
      last_activity: "Active Now",
    },
    {
      id: 6,
      name: "Abhinav Singh",
      last_chat_time: "1h",
      last_activity: "Active 2h ago",
    },

    // {
    //   id: 7,
    //   name: "Sunny Singh",
    //   last_chat_time: "1h",
    //   last_activity: "Active Now",
    // },
    // {
    //   id: 8,
    //   name: "Anirudh Singh",
    //   last_chat_time: "1h",
    //   last_activity: "Active Now",
    // },
    // {
    //   id: 9,
    //   name: "Anirudh Singh",
    //   last_chat_time: "1h",
    //   last_activity: "Active Now",
    // },
    // {
    //   id: 10,
    //   name: "Abhinav Singh",
    //   last_chat_time: "1h",
    //   last_activity: "Active 2h ago",
    // },

    // {
    //   id: 11,
    //   name: "Sunny Singh",
    //   last_chat_time: "1h",
    //   last_activity: "Active Now",
    // },
  ];
  return (
    <div className="p-2  width-100">
     <div className=" p-2 bgcolor-white border-radius-1 mr-3 display-flex">
      <div className="overflow-scroll">
      <p className="font-size font-bold">Messages  <span className="font-size font-bold color-blue ml-10 mr-1">1 Request</span></p>
        <div className="display-flex flex-direction-column gap">
          {messageList?.map((item) => (
            <div className="display-flex gap">
              <div className=" display-flex justify-content-evenly border-radius-100 p-05">
               <div style={{position:"relative"}}>
               <img
                  src="/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png"
                  alt="story"
                />
                <div className="image_status_icon_active"></div>
               </div>
              </div>
              <div>
                <p>{item.name}</p>
                <p>{item.last_activity} <span className="ml-1">{item.last_chat_time}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" ml-10 display-flex flex-direction-column justify-content-center align-items-center">
        <div className="p-2 border-black text-align-center border-radius-100 w-4">
          <TbBrandTelegram fontSize="3rem"/>
        </div>
        <p className=" font-size-2 text-align-center">Your Messages</p>
        <p>Send Private photos and messages to a friend or group.</p>
        <div className="p-1 font-size-2 font-bold text-align-center" style={{backgroundColor:"#0095f6",color:"white"}}>Send Messages</div>
      </div>
     </div>
    </div>
  );
}

export default Message;
