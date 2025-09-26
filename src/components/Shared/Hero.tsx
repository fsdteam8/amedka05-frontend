import Image from "next/image"

interface type {
    title: string,
    brTitle: string,
    description: string,
    image: string
}

export default function HeroSection({ title, brTitle, description, image }: type) {
    return (
        <section className="relative  flex  justify-center overflow-hidden">
            <div className="absolute inset-0 bg-[#131313] to-black" />

            <div className="relative z-10 container  mx-auto px-4 ">
                <div className="flex flex-col items-center text-center space-y-12">
                    {/* Content Section */}
                    <div className="space-y-6   py-16">
                        <div className="space-y-2">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                {title}
                            </h1>
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#89CFF0]">
                                {brTitle}
                            </h2>
                        </div>

                        <p className="text-[#E7E7E7] text-lg md:text-xl leading-relaxed">
                            {description}
                        </p>
                    </div>

                    <div className="flex justify-center ">
                        <div className="relative">
                            <div className="absolute inset-0 opacity-55 bg-[linear-gradient(135deg,#7DD3DD_0%,#89CFF0_50%,#A7C8F7_100%)] blur-2xl rounded-full scale-90" />
                            <div className="relative">
                                <Image
                                    src={image}
                                    alt="Professional businessman with headset working on laptop"
                                    width={700}
                                    height={400}
                                    className="object-contain"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
