import React from 'react'
import Nav from './Nav'

const Navbar = () => {
  return (
    <div className=''>
      <div className='container md:block hidden'>
        <input type="text" placeholder='Search' className='border rounded-3xl p-2 w-full'/>
      </div>
      <Nav/>
    </div>
  )
}

export default Navbar
