import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"


export default function ShopHero() {
    return (
        <section className="relative  flex  justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#131313] to-black" />

            <div className="relative z-10 container  mx-auto px-4 ">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Content Section */}
                    <div className="space-y-6   pt-16">
                        <div className="space-y-2">

                            <h2 className="text-4xl md:text-5xl italic lg:text-6xl font-bold text-[#89CFF0]">
                                BREADING OF YOUR BUSINESS
                            </h2>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                WITH US
                            </h1>
                        </div>

                        <p className="text-[#E7E7E7] text-lg md:text-xl leading-relaxed">
                            Meet the creators shaping trends, building influence, and inspiring collaborations worldwide.
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <div className="relative">
                            <div className="absolute inset-0 opacity-30 bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] blur-2xl rounded-full scale-75" />
                            <div className="relative ">
                                <Image
                                    src={"/shopImage.png"}
                                    alt="Professional businessman with headset working on laptop"
                                    width={700}
                                    height={800}
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-4">
                        <Button className="bg-[#7DD3DD] text-[#131313]">
                            Creator Application <ArrowRight className="ml-2" />
                        </Button>
                        <Button className="bg-[#FFFFFF] text-[#2A2A2A]">Our Creator</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
