import Image from 'next/image'
import React from 'react'

const DownloadAgent = () => {
    return (
        <div className='bg-[#131313]'>
            <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 py-11 gap-8'>
                {/* Text Section */}
                <div>
                    <h1 className='text-[#7DD3DD] font-normal text-3xl sm:text-4xl md:text-[40px] italic mb-6'>
                        Download Our Next Level App
                        <br />Trusted By 50K+ Creators
                    </h1>
                    <p className='text-[#E7E7E7] text-sm sm:text-[14px] md:text-[16px] leading-relaxed'>
                        Take your creator journey further with our all-in-one app. Manage your collaborations, track performance, and connect with brands—all from one sleek platform. Built for creators who want more freedom, more opportunities, and more control over their careers. Whether you’re just starting out or scaling to the next level, our app puts the tools you need right in your pocket.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                    </p>

                    <ul className='list-disc text-[#FFFFFF] pl-5 mt-6 flex flex-col gap-2'>
                        <li>Take your creator journey further with our all-in-one app. Manage</li>
                        <li>Take your creator journey further with our all-in-one</li>
                        <li>Take your creator journey further with our all-in-one</li>
                    </ul>

                    <div className='flex flex-col sm:flex-row gap-4 mt-8 sm:mt-20'>
                        <div className='border w-full sm:w-auto py-4 sm:py-[18px] flex items-center px-4 gap-4 border-[#E7E7E7] rounded-lg'>
                            <Image className='w-10 h-10' src="/googleplay.png" alt="playstore" width={900} height={900} />
                            <div>
                                <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] font-normal'>Get It On</p>
                                <p className='text-[#FFFFFF] font-medium text-xl sm:text-2xl'>Google Play</p>
                            </div>
                        </div>
                        <div className='border w-full sm:w-auto py-4 sm:py-[18px] flex items-center px-4 gap-4 border-[#E7E7E7] rounded-lg'>
                            <Image className='w-10 h-10' src="/apple.png" alt="apple" width={900} height={900} />
                            <div>
                                <p className='text-[#FFFFFF] text-[14px] sm:text-[16px] font-normal'>Get It On</p>
                                <p className='text-[#FFFFFF] font-medium text-xl sm:text-2xl'>Apple Store</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Image Section */}
                <div className="relative mx-auto w-[280px] sm:w-[320px] md:w-[380px] h-[550px] sm:h-[600px] md:h-[750px] overflow-hidden rounded-[3rem] border-[12px] border-[#89CFF0] shadow-xl bg-black">
                    {/* Top Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-3xl"></div>

                    {/* Image inside */}
                    <Image
                        src="/mobile.png"
                        alt="agentImage"
                        fill
                        className="object-cover rounded-[2.5rem]"
                    />
                </div>
            </div>
        </div>
    )
}

export default DownloadAgent
