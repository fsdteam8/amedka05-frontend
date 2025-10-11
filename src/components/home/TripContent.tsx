"use client";

import { useGetContentTrip } from "@/hooks/ApiCalling";
import React from "react";

const TripContent = () => {
    const { data } = useGetContentTrip();
    const content = Array.isArray(data?.data?.data)
        ? data.data.data.slice(0, 5) // show only first 5 videos
        : [];

    const firstRow = content.slice(0, 2);
    const secondRow = content.slice(2, 5);

    // helper to detect if link is embeddable or direct video
    const renderVideo = (url: string) => {
        const videoUrl = url.trim();
        const isYouTube =
            videoUrl.includes("youtube.com") || videoUrl.includes("youtu.be");
        const isVimeo = videoUrl.includes("vimeo.com");
        const isDirectVideo =
            videoUrl.endsWith(".mp4") ||
            videoUrl.includes("cloudinary.com") ||
            videoUrl.includes("cdn") ||
            videoUrl.includes("media") ||
            videoUrl.includes("file") ||
            videoUrl.includes("storage") ||
            videoUrl.includes("video");

        if (isYouTube) {
            return (
                <iframe
                    src={
                        videoUrl.includes("embed")
                            ? videoUrl
                            : videoUrl
                                .replace("watch?v=", "embed/")
                                .replace("youtu.be/", "www.youtube.com/embed/")
                    }
                    title="Trip Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
                ></iframe>
            );
        } else if (isVimeo) {
            return (
                <iframe
                    src={videoUrl.replace("vimeo.com", "player.vimeo.com/video")}
                    title="Trip Video"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
                ></iframe>
            );
        } else if (isDirectVideo) {
            return (
                <video
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
                />
            );
        } else {
            // fallback for unknown platforms
            return (
                <iframe
                    src={videoUrl}
                    title="Trip Video"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover"
                ></iframe>
            );
        }
    };

    return (
        <div className="bg-[#000] pb-36">
            {/* Heading */}
            <div className="mb-10">
                <h1 className="text-[40px] text-[#E7E7E7] font-bold text-center italic mb-2">
                    Our Trip Contents
                </h1>
                <p className="text-[#E7E7E7] text-center">
                    The mind shaping tomorrow’s{" "}
                    <span className="text-[#9F8700]">creator economy</span>
                </p>
            </div>

            <div className="container mx-auto space-y-4">
                {/* First Row - 2 videos */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {firstRow.map((item) => (
                        <div key={item._id} className="relative rounded-xl overflow-hidden">
                            {renderVideo(item.video)}
                        </div>
                    ))}
                </div>

                {/* Second Row - 3 videos */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {secondRow.map((item) => (
                        <div key={item._id} className="relative rounded-xl overflow-hidden">
                            {renderVideo(item.video)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TripContent;
