import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import { Navitems } from './NavItems';

import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-[6rem] py-[2rem]'>
        <div className='font-bold text-3xl'>ARTSY.</div>
        <nav>
            <ul className='flex items-center justify-center gap-[2rem]'>
                {Navitems.map(item => {
                    return (
                    <ul key={item.id}>
                        <li 
                            className='relative cursor-pointer after:content-[""] after:absolute 
                            after:bottom-[-5px] after:left-[50%] after:w-[100%] after:h-[2px] 
                            after:-translate-x-[50%] after:bg-black transition'
                            id={item.id} 
                        >
                            <Link to={item.path}>{item.name}</Link>
                        </li>
                    </ul>
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