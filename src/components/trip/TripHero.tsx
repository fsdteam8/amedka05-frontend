import Image from "next/image"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"

export default function TripHero() {
    return (
        <section className="relative flex justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#131313] to-black" />
            <div className="relative z-10 container mx-auto px-4 pb-60">
                <div className="flex flex-col items-center text-center">
                    {/* Content Section */}
                    <div className="space-y-6 py-16 pb-32">
                        <div className="space-y-2">
                            <h1 className="text-[40px] sm:text-3xl md:text-4xl italic font-bold text-white leading-tight">
                                <span className="text-[#7DD3DD] text-[56px] sm:text-4xl md:text-5xl">Connect</span> With
                                <br />
                                Your Team
                            </h1>
                            <p className="text-lg sm:text-[14px] md:text-[16px] text-[#E7E7E7] leading-relaxed">
                                The <span className="text-[#7DD3DD]">Most Important Rule</span> By Any Business is To Make Connections Thats Why We Encourage Our Trips For{" "}
                                <span className="text-[#9F8700]">Networking</span>
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center h-96 sm:h-64 md:h-80">
                        <div className="relative flex items-center justify-center">
                            <div className="absolute inset-0 opacity-20 bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] blur-2xl rounded-full scale-75 sm:scale-50 md:scale-125" />
                            <div className="relative w-[700px] sm:w-full md:w-[500px]">
                                <Image
                                    src={"/tripImage.png"}
                                    alt="Professional businessman with headset working on laptop"
                                    width={700}
                                    height={400}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col sm:flex-row gap-4 px-4 sm:px-0">
                        <Button className="bg-[#7DD3DD] hover:bg-[#89CFF0] text-[#131313] w-full sm:w-auto">
                            Creator Application <ArrowRight className="ml-2" />
                        </Button>
                        <Button className="bg-[#FFFFFF] hover:bg-[#89CFF0] text-[#2A2A2A] w-full sm:w-auto">Our Creator</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
