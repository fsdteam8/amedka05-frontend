import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ShopHero() {
    return (
        <section className="relative flex justify-center overflow-hidden">
            {/* Black overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#131313] to-black opacity-90" />

            <div className="relative z-10 container mx-auto px-4">
                <div className="flex flex-col items-center text-center space-y-8 md:space-y-12">
                    {/* Content Section */}
                    <div className="space-y-4 md:space-y-6 pt-16">
                        <div className="space-y-2">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl italic font-bold text-[#89CFF0]">
                                BREADING OF YOUR BUSINESS
                            </h2>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-snug md:leading-tight lg:leading-tight">
                                WITH US
                            </h1>
                        </div>

                        <p className="text-[#E7E7E7] text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl">
                            Meet the creators shaping trends, building influence, and inspiring collaborations worldwide.
                        </p>
                    </div>

                    {/* Image with gradient background */}
                    <div className="relative flex justify-center mt-6 md:mt-12">
                        {/* Gradient circle */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] rounded-full bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] blur-3xl opacity-40" />
                        </div>

                        {/* Image + Buttons */}
                        <div className="relative flex flex-col items-center z-10">
                            <Image
                                src="/shopImage.png"
                                alt="Professional businessman with headset working on laptop"
                                width={700}
                                height={800}
                                className="object-cover"
                                priority
                            />

                            {/* Buttons right after image */}
                            <div className="flex flex-col sm:flex-row gap-4 ">
                               <Link href="/creator-form" className="w-full sm:w-auto">
                                <Button className="bg-[#7DD3DD] hover:bg-[#86d1da] text-[#131313] w-full sm:w-auto">
                                    Creator Application <ArrowRight className="ml-2" />
                                </Button>
                               </Link>
                               <Link href="/creators" className="w-full sm:w-auto">
                                <Button className="bg-white hover:bg-white px-10 sm:px-20 text-[#2A2A2A] w-full sm:w-auto">
                                    Our Creator
                                </Button>
                               </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
