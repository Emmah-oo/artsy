import React from 'react'

import { FeaturedData } from './FeaturedData';

import FeaturedSection from '../FeaturedSection';

const Featured = () => {
  return (
    <div className='w-[80%] mx-auto'>
        <h1 className='font-normal text-4xl mb-[1rem]'>Featured Products</h1>
        <hr className=''/>
        <div className='my-8' >
        {FeaturedData.map((data) => {
          return <FeaturedSection title = {data.title} desc = {data.desc} image = {data.image} key={data.id}/>
        })}
        </div>
    </div>
  )
}

export default Featured