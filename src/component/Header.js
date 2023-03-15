import React from 'react'
import logo from '../img/youtube.png'
import menuIcon from '../img/sidebar.png'
import searchIcon from '../img/search.png'
const Header = () => {
  return (
    <div className="w-full top-0 fixed bg-white h-16">
      <div className="flex">
        <div className='cursor-pointer'><img src={menuIcon} /></div>
        <div className='cursor-pointer'><img src={logo} /></div>
        <div className='mt-2 '><input type='text' className='border border-gray-800 pl-[14px] rounded-l  ml-32 h-8' placeholder='Search' /><button className='rounded-r border border-black h-8 w-12'><img src={searchIcon} className='ml-4' /></button></div>
      </div>
      <div className="text-center">

      </div>
    </div>
  )
}

export default Header