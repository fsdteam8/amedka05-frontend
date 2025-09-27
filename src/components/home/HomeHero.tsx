import Image from "next/image"

export default function HomeHero() {
    return (
        <section className="relative flex justify-center flex-col overflow-hidden">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#131313] to-black opacity-90" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center  text-center space-y-8 md:space-y-12">
                    {/* Content Section */}
                    <div className="space-y-4 md:space-y-6 pt-16">
                        <div className="space-y-2">
                            <h1 className="text-3xl sm:text-4xl italic md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight lg:leading-tight">
                                Where Visionary Creators                            </h1>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-bold text-[#89CFF0]">
                                Shape the Future.
                            </h2>
                        </div>

                        <p className="text-[#E7E7E7] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                            Transforming creativity into impact, collaboration, and growth
                        </p>
                    </div>

                    {/* Image with gradient background */}
                    <div className="">
                        {/* Gradient circle */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] blur-3xl opacity-40" />
                        </div>

                        {/* Image + Buttons */}
                        <div className="relative flex flex-col items-center z-10">
                            <Image
                                src="/mainHeroImage.png"
                                alt="Professional businessman with headset working on laptop"
                                width={700}
                                height={800}
                                className="object-cover"
                                priority
                            />
                        </div>

                    </div>
                </div>
                <div className="flex flex-col sm:flex-row flex-wrap gap-4 bg-black w-full justify-center py-7 px-4">
                    {/* Card 1 */}
                    <div className="bg-[#89CFF0] flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-20 space-y-2 rounded-2xl text-center w-full sm:w-auto max-w-xs">
                        <h1 className="text-[#F3FAFE] text-3xl sm:text-[40px] italic font-bold">50K+</h1>
                        <p className="text-[#F3FAFE] text-sm">Satisfied Customers</p>
                        <p className="text-[#F3FAFE] text-xs leading-snug max-w-[200px]">
                            Helping creators turn ideas into global opportunities and success
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#F3FAFE] flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-20 space-y-2 rounded-2xl text-center w-full sm:w-auto max-w-xs">
                        <h1 className="text-[#252525] text-3xl sm:text-[40px] italic font-bold">03+</h1>
                        <p className="text-[#252525] text-sm">Years Experience</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#F3FAFE] flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-20 space-y-2 rounded-2xl text-center w-full sm:w-auto max-w-xs">
                        <h1 className="text-[#252525] text-3xl sm:text-[40px] italic font-bold">100+</h1>
                        <p className="text-[#252525] text-sm">Collaborating Brands</p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#F3FAFE] flex flex-col justify-center items-center py-6 px-6 sm:px-10 lg:px-20 space-y-2 rounded-2xl text-center w-full sm:w-auto max-w-xs">
                        <h1 className="text-[#252525] text-3xl sm:text-[40px] italic font-bold">200+</h1>
                        <p className="text-[#252525] text-sm">Events & Trips</p>
                    </div>
                </div>


            </div>

        </section>
    )
}
