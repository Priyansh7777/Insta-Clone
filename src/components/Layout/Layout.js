import React from 'react'
import Header from '../header/Header'
import Sidebar from '../sidebar/Sidebar'

function Layout({children}) {
  return (
    <div className='display-flex flex-direction-column width-100' style={{ flexBasis:"100%",backgroundColor:"#f4f5f7"}} >
   {/* <Header/>  */}
    <div className='display-flex'>
        <Sidebar/>
        <div className="ml-1" >
            {children}
        </div>
    </div>
</div>

  )
}

export default Layout