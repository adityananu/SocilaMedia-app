
import React from 'react'

const SidebarRow = ({Icon,title}) => {
  return (
    <div className='sidebarRow'>
      <div className='sidebar__layout'>
        <Icon />
        {title}
      </div>
    </div>
  )
}

export default SidebarRow