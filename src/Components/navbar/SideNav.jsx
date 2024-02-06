import React from 'react'


const SideNav = () => {
  return (<div className='grid grid-cols-2 divide-x divide-gray-600'>
    <div>
        <ul>
      <li>
        <FaRegUser/>
      </li>
      <li>
        <LuShoppingCart/>
      </li>
        </ul>
    </div>
    <div>
        <h4>Contact Us</h4>
    </div>
    </div>
  )
}

export default SideNav
