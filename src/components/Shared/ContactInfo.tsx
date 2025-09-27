import { Mail, MapPinCheckInside, PhoneCall } from 'lucide-react'
import React from 'react'

const ContactInfo = () => {
    return (
        <div className="container mx-auto px-4 my-24">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Map Section */}
                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.860576955924!2d107.0616509756195!3d-6.786815693210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e684d2d9063d8fd%3A0xb845cb5da646595f!2sRM.%20Lembur%20Kuring!5e0!3m2!1sen!2sbd!4v1758879687324!5m2!1sen!2sbd"
                        className="w-full h-64 sm:h-80 md:h-96 rounded-lg border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

                {/* Contact Info Section */}
                <div className="flex flex-col gap-6 justify-center">
                    <h2 className="text-[#7DD3DD] italic font-normal text-3xl sm:text-4xl">Contact Information</h2>
                    <p className="text-[14px] sm:text-[16px] text-[#C0C3C1]">
                        Find all the ways to reach us, including email, phone, and our office address, so you can get the support and answers you need quickly and easily.
                    </p>

                    <div className="flex flex-col gap-6 pt-6">
                        <div className="flex gap-3 items-center">
                            <Mail className="text-[#7DD3DD] w-6 h-6 sm:w-7 sm:h-7" />
                            <p className="text-[#C0C3C1] text-[16px] sm:text-[18px] break-all">support@alhhub.com</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <PhoneCall className="text-[#7DD3DD] w-6 h-6 sm:w-7 sm:h-7" />
                            <p className="text-[#C0C3C1] text-[16px] sm:text-[18px] break-all">+1 (555) 123-4567</p>
                        </div>
                        <div className="flex gap-3 items-center">
                            <MapPinCheckInside className="text-[#7DD3DD] w-6 h-6 sm:w-7 sm:h-7" />
                            <p className="text-[#C0C3C1] text-[16px] sm:text-[18px] break-all">
                                123 Care Street, City, State, ZIP
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo
