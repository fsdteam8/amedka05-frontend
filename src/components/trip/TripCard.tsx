
import { Trip } from '@/types/tripDataType'
import { Calendar, Users } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const TripCard = ({ trip }: { trip: Trip }) => {

    console.log(trip)
    return (
        <div className="rounded-lg overflow-hidden">
            <div className="relative h-80 w-full">
                <Image
                    src={trip?.image}
                    alt="tripcard"
                    fill
                    className="object-cover"
                />
                {/* Black overlay */}
                <div className="absolute inset-0 bg-black/30" />
            </div>

            <div className="flex flex-col items-center my-4 gap-2">
                <h1 className="text-white font-bold text-2xl">{trip?.country}</h1>
                <p className="text-[#929292] flex gap-3 items-center">
                    <Users size={20} /> {trip?.participants} Participants
                </p>
                <p className="text-[#929292] flex gap-3 items-center">
                    <Calendar />
                    {trip?.startDate
                        ? new Date(trip.startDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })
                        : "N/A"}
                    {" "}-{" "}
                    {trip?.endDate
                        ? new Date(trip.endDate).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        })
                        : "N/A"}
                </p>
                <p className="text-[#929292] text-center">
                    {trip?.location}
                </p>
            </div>
        </div>

    )
}

export default TripCard