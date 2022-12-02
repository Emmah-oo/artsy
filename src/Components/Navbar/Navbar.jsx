import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { Navitems } from './NavItems';

const Navbar = () => {
  const handleNavClick = (e) => {
    
  }
  return (
    <div className='flex justify-between items-center px-[6rem] py-[2rem]'>
        <div className='font-bold text-3xl'>ARTSY.</div>
        <nav>
            <ul className='flex items-center justify-center gap-[2rem]'>
                {Navitems.map(item => {
                    return (
                    <li 
                        className='relative cursor-pointer after:content-[""] after:absolute 
                        after:bottom-[-5px] after:left-[50%] after:w-[100%] after:h-[2px] 
                        after:-translate-x-[50%] after:bg-black transition'
                    >
                        {item.name}
                    </li>
                    )
                })}
            </ul>    
        </nav>
        <div className='flex items-center justify-center gap-[1rem]'>
            <FaSearch className='text-2xl' />
            <FaShoppingCart className='text-2xl' />
            <FaBell className='text-2xl' />
        </div>
    </div>
  )
}

export default Navbar