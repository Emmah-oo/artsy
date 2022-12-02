import React from 'react'

import Featured from '../Components/Featured/Featured'
import Hero from '../Components/Hero'
import Navbar from '../Components/Navbar/Navbar'
import Upcoming from '../Components/Upcoming/Upcoming'

import Arrow from '../Assets/Svgs/Arrowlg.svg'
import Topcreators from '../Components/Topcreators'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Featured />
        <Upcoming />
        <div className='px-[10rem] flex flex-col gap-[5rem] mt-[6rem]'>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Explore Marketplace</h1>
                <img src = {Arrow} alt="" className='mr-[4rem] w-[5%]' />
            </div>
            <div className='flex items-center justify-between'>
                <h1 className='text-2xl font-bold'>Auction</h1>
                <img src = {Arrow} alt="" className='mr-[4rem] w-[5%]' />
            </div>
        </div>
        <Topcreators />
    </div>
  )
}

export default Home