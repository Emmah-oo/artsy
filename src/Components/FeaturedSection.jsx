import React from 'react'

import ava1 from '../Assets/Svgs/ava-1.svg';
import ava2 from '../Assets/Svgs/ava-2.svg';
import ava3 from '../Assets/Svgs/ava-3.svg';
import ava4 from '../Assets/Svgs/ava-4.svg';
import ava5 from '../Assets/Svgs/ava-5.svg';
import Arrow from '../Assets/Svgs/Arrow.svg';

const FeaturedSection = ({ title, desc, image }) => {
  return (
    <div className='grid lg:grid-cols-2 gap-10 my-[2rem]'>
        <div>
            <img src={require(`../Assets/Images/${image}.png`)} alt="" />
        </div> 
        <div className='flex flex-col gap-[3rem] '>
            <h1 className='font-bold text-3xl'>{title}</h1>
            <p className='font-light'>
                {desc}
            </p>
            <div className='grid grid-cols-3 gap-5 items-center'>
                <div className='grid grid-cols-5'>
                    <img src={ava1} alt="" />
                    <img src={ava2} alt="" />
                    <img src={ava3} alt="" />
                    <img src={ava4} alt="" />
                    <img src={ava5} alt="" />
                </div>
                <div>
                    <p>64 Major Creators</p>
                </div>
                <div>
                    <img src={Arrow} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturedSection