"use client"
import TopProductCard from '@/components/shop/TopProductCard'
import { useShop } from '@/hooks/ApiCalling'
import { Partnership } from '@/types/shopDataType'
import React from 'react'

const ShopBody = () => {
const data = useShop().data?.data
  return (
         <div className='grid bg-[#131313] sm:grid-cols-2 lg:grid-cols-4 gap-4 container py-10'>
            {data?.data?.map((shop:Partnership) => (  
                <TopProductCard key={shop._id} shop={shop}/>
            ))
            }
        </div>
  )
}

export default ShopBody