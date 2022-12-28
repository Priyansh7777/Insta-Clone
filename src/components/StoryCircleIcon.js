import React from 'react'

function StoryCircleIcon(props) {
  return (
    <div className='display-flex-column gap align-items-center justify-content-center ml-1'>
      <div className='border-radius-100 border-color p-05'>
        <img src="/kisspng-computer-icons-avatar-business-computer-software-user-av-2@2x.png" alt="story"/>
    </div>
        <div className='text-align-center'>
        <p>{props.name}</p>
        </div>
    </div>
  )
}

export default StoryCircleIcon;