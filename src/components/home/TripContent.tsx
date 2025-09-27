import React from 'react'

const TripContent = () => {
    return (
        <div className='bg-[#000] pb-36 '>
            <div className="mb-10">
                <h1 className="text-[40px] text-[#E7E7E7] font-bold text-center italic mb-2">
                    Our Trip Contents
                </h1>
                <p className="text-[#E7E7E7] text-center">
                    The mind shaping tomorrow’s{" "}
                    <span className="text-[#9F8700]">creator economy</span>
                </p>
            </div>

            <div className="container mx-auto  space-y-4">
                {/* First Row - 2 columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="relative rounded-xl overflow-hidden">
                        <video
                            src="https://videocdn.cdnpk.net/videos/d1dbbc37-3b8b-4a12-9735-1a4b3a7ac94c/horizontal/previews/clear/large.mp4?token=exp=1758965759~hmac=8110f889eebf6739aa74b068af67614a4617c2aa9bd2d77063e6ac855868dc6d"
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
                            src="https://videocdn.cdnpk.net/videos/e4ff3c94-cd56-4e71-a61f-172a489ed5e1/horizontal/previews/clear/large.mp4?token=exp=1758965842~hmac=8d3997362dd7008b423c8bea59857a6f2b9f382366f783497d002e81dfb68b5d"
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