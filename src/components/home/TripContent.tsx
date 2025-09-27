import React from 'react'

const TripContent = () => {
    return (
        <div className='bg-[#000] pb-36 '>
            <div className="mb-10">
                <h1 className="text-[40px] text-[#E7E7E7] font-bold text-center italic mb-2">
                    Our Trip Contents
                </h1>
                <p className="text-[#E7E7E7] text-center">
                    The mind shaping tomorrow’s
                    <span className="text-[#9F8700]">creator economy</span>
                </p>
            </div>

            <div className="container mx-auto  space-y-4">
                {/* First Row - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/8cd95e0b-e448-4fc7-b633-18f26c3e4f2f/horizontal/previews/clear/large.mp4?token=exp=1758968718~hmac=af6a70c4a08853b338b8ec5444bfe177757c409581dc91255722a7ca0c956bc4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/4fea3865-38b2-5c96-9b78-813dae0f9025/horizontal/previews/watermarked/large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>

                {/* Second Row - 3 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/d1dbbc37-3b8b-4a12-9735-1a4b3a7ac94c/horizontal/previews/clear/large.mp4?token=exp=1758968749~hmac=0478b3d8d62ae9f350483ac73e9b61d08a0f9d84dfa3e046e5c2e6f4c05324af"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/2059ab05-9aec-4afa-962d-2cca64c0c4ba/horizontal/previews/watermarked/large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/698a6ad4-17bc-5473-8f72-d7ad985e081b/horizontal/previews/watermarked/large.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TripContent