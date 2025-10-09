import DownloadAgent from '@/components/agent/DownloadAgent'
import PageTransition from '@/components/PageTransition'
import ShopHero from '@/components/shop/ShopHero'
import React from 'react'
import ShopBody from './_components/shopBody'

const page = () => {
  return (
    <PageTransition>
      <div>
        <ShopHero />
        <div className='container py-10'>
          <h1 className='text-[#E7E7E7] font-normal text-[40px] uppercase italic pb-2'>Top Products You may like</h1>
          <p className='text-[16px] font-normal text-[#E7E7E7]'>Some Of Our <span className='text-[#7DD3DD]'>Best Talents</span>  That Will Be Deployed Among <span className='text-[#9F8700]'>Collaboration</span> </p>
        </div>

         <ShopBody />
        <DownloadAgent />
      </div>
    </PageTransition>
  )
}

export default page