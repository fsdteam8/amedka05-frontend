import DownloadAgent from '@/components/agent/DownloadAgent'
import ShopHero from '@/components/shop/ShopHero'
import TopProductCard from '@/components/shop/TopProductCard'
import React from 'react'

const page = () => {
  return (
    <div>
      <ShopHero />
      <div className='container py-10'>
        <h1 className='text-[#E7E7E7] font-normal text-[40px] uppercase italic pb-2'>Top Products You may like</h1>
        <p className='text-[16px] font-normal text-[#E7E7E7]'>Some Of Our <span className='text-[#7DD3DD]'>Best Talents</span>  That Will Be Deployed Among <span className='text-[#9F8700]'>Collaboration</span> </p>
      </div>
      <div className='grid bg-[#131313] sm:grid-cols-2 lg:grid-cols-4 gap-4 container py-10'>
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
        <TopProductCard />
      </div>
      <DownloadAgent />
    </div>
  )
}

export default page