import React from 'react'

const MarketSection = ({ imgUrl, title, price }) => {
  return (
    <div className='flex flex-col gap-3 p-3 rounded-lg bg-[#FFFFFF] drop-shadow-2xl'>
        <img src={ require(`../Assets/Images/${imgUrl}.png`) }  alt={imgUrl} />
        <h1 className='text-xl font-light'>{title}</h1>
        <h1 className='font-bold text-2xl'>{price}</h1>
    </div>
  )
}

export default MarketSection