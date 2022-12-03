import React from 'react'

import { FaArrowDown, FaFilter, FaSearch } from 'react-icons/fa'

import Arrow from '../Assets/Svgs/arrowDown.svg'
import Market from '../Components/Market/Market'

const Marketplace = () => {
  return (
    // Page container
    <div className='w-[80%] mx-auto'>
        {/* First Grid section */}
        <div className='grid grid-cols-[1fr,_3fr] items-center'>
            <div>
                <div className='flex items-center justify-center bg-[#F4F2F2] gap-3 py-[1rem] px-[1rem] rounded-xl w-[200px]'>
                    <FaSearch />
                    <input type="text" placeholder='Search' className='bg-transparent outline-0 w-[100px]' />
                </div>
            </div>
            <div>
                <div className='flex items-center justify-between p-3 bg-white drop-shadow-2xl rounded-lg'>
                    <h1>See 1-6 of 15 results</h1>
                    <div className='flex items-center gap-3 border border-black rounded-md px-[1.5rem] py-[0.5rem]'>
                        <h1>Sort by</h1>
                        <img src={Arrow} alt="" />
                    </div>
                </div>
            </div>
        </div>
        {/* Second grid section */}
        <div className='grid grid-cols-[1fr,_3fr] mt-10'>
            <div className='w-[60%]'>
                {/* Filter */}
                <div>
                    <div className='flex items-center justify-start gap-3'>
                        <FaFilter />
                        <h1>Filter</h1>
                    </div>
                    <div className='mt-3 w-3/4 h-1 bg-[#AFB091]'></div>
                </div>
                {/* Filter by category */}
                <div>
                    <div className='flex items-center justify-between mt-8'>
                        <h1 className='font-bold'>By Category</h1>
                        <FaArrowDown />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5 mt-8'>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="check" className='bg-[#D9D9D9]'/>
                            <h1>Editorials</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="check" />
                            <h1>Fashion</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="check" />
                            <h1>Optics</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="check" />
                            <h1>Arts & Museum</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" name="check" />
                            <h1>Nature</h1>
                        </div>
                    </div>
                </div>
                {/* Filter by price */}
                <div>
                    <div className='flex items-center justify-between mt-8'>
                        <h1 className='font-bold'>By Price</h1>
                        <FaArrowDown />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5 mt-8'>
                       <h1>$100.00 - $150.00</h1>
                       <input type="range" min='0' max='100' />
                    </div>
                </div>
                {/* Filter by artist */}
                <div>
                    <div className='flex items-center justify-between mt-8'>
                        <h1 className='font-bold'>By Artist</h1>
                        <FaArrowDown />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5 mt-8'>
                        <h1>All</h1>
                        <h1>Below $100.00</h1>
                        <h1>$100.00 - $150.00</h1>
                        <h1>$150.00 - $200.00</h1>
                        <h1>Above $200.00</h1>
                    </div>
                </div>
                {/* Collection Year */}
                <div>
                    <div className='flex items-center justify-between mt-8'>
                        <h1 className='font-bold'>Collection Year</h1>
                        <FaArrowDown />
                    </div>
                    <div className='flex flex-col items-start justify-center gap-5 mt-8'>
                        <h1>2018</h1>
                        <h1>2019</h1>
                        <h1>2020</h1>
                        <h1>2021</h1>
                        <h1>2022</h1>
                    </div>
                </div>
            </div>
            {/* Marketplace items */}
            <Market />
        </div>
        <div className='mt-[4rem] mb-[10rem] flex items-center justify-center'>
            <button className='border px-[3rem] py-[0.8rem] border-black rounded-lg font-medium cursor-pointer'>See More</button>
        </div>
    </div>
  )
}

export default Marketplace