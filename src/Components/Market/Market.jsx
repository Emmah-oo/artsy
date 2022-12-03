import React from 'react'
import MarketSection from '../MarketSection'
import { MarketData } from './MarketData'

const Market = () => {
  return (
    <div className='grid grid-cols-3 gap-10'>
        {MarketData.map((data) => {
            return <MarketSection imgUrl = {data.imgUrl} title = {data.title} price = {data.price} />
        })}
    </div>
  )
}

export default Market