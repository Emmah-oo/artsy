import React from 'react'
import image1 from '../Assets/Images/Hero-cr1.png'
import image2 from '../Assets/Images/Hero-cr2.png'
import image3 from '../Assets/Images/Hero-cr3.png'
import image4 from '../Assets/Images/Hero-cr4.png'
import image5 from '../Assets/Images/Hero-cr5.png'

const Hero = () => {
  return (
    <div>
        <div className='text-center max-w-[75%] mx-auto'>
            <h1 className='text-[4rem] font-bold'>
                Photography is poetry & beautiful untold stories
            </h1>
            <p className='text-[1.5rem] text-center font-medium max-w-[85%] mx-auto mt-[2rem]'>
                Flip through more than 10,000 vintage shots, 
                old photograghs, historic images and captures seamlessly in one place. 
                Register to get top access.
            </p>
        </div>

        <div className='grid lg:grid-cols-5 gap-10 my-[6rem]'>
            <div className='w-full mt-10'> <img src={image1} alt="" className='w-full'/> </div>
            <div className='w-full'> <img src={image2} alt="" className='w-full'/> </div>
            <div className='w-full mt-[-2rem]'> <img src={image3} alt="" className='w-full'/> </div>
            <div className='w-full'> <img src={image4} alt="" className='w-full'/> </div>
            <div className='w-full mt-4'> <img src={image5} alt="" className='w-full'/> </div>
        </div>
    </div>
  )
}

export default Hero