import React from 'react'

import Arrow from '../../Assets/Svgs/Arrow 3.svg'
import Monalisa from '../../Assets/Images/Ft-Monalisa.png'

import './Upcoming.css'

const Upcoming = () => {
  return (
    <div className='gradient p-[3rem]'>
      <div className='w-[80%] mx-auto'>
        <h1 className='text-4xl font-light text-white'>See Upcoming Auctions and Exhibitions</h1>
        <img src={Arrow} alt="" className='my-5 ml-4'/>

        <div className='relative'>
          <div>
            <img src={Monalisa} alt="" />
          </div>

          <div className='absolute bottom-10 text-white grid ab-grid grid-cols-2 gap-5 px-5'>
            <div className='grid ab1-grid'>
              <div className='text-5xl font-light'>01</div>
              <div className='flex flex-col gap-5'>
                <h1 className='text-3xl font-light max-w-[80%]'>. MONALISA REDEFINED IN STYLE.</h1>
                <p className='font-light'>Start on : 08:00 GTS . Monday </p>
                <p className='font-light'>
                  GET EXCLUSIVE VIEWING OF CONTEMPORARY ART AND CONNECT 
                  WITH INVESTORS AND AUCTIONEERS ACROSS THE WORLD BRINGING 
                  THEIR HIGHEST AND LOWEST BIDS.
                </p>
              </div>
            </div>
            <div className='grid grid-cols-2 items-center justify-center'>
              <button className='underline '>See More</button>
              <button className='px-3 py-3 rounded-xl border border-white'>Set a Reminder</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Upcoming