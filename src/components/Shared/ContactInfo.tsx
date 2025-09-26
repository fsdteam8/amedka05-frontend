import { Mail, MapPinCheckInside, PhoneCall } from 'lucide-react'
import React from 'react'

const ContactInfo = () => {
    return (
        <div className='container pl-0 my-24'>
            <div className='grid grid-cols-2 gap-12'>
                <div className=''>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.860576955924!2d107.0616509756195!3d-6.786815693210265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e684d2d9063d8fd%3A0xb845cb5da646595f!2sRM.%20Lembur%20Kuring!5e0!3m2!1sen!2sbd!4v1758879687324!5m2!1sen!2sbd" className='w-full rounded-lg  h-96'></iframe>
                </div>
                <div className='flex flex-col gap-1 justify-center'>
                    <h2 className='text-[#7DD3DD] italic font-normal text-[40px]'>Contact Information</h2>
                    <p className='text-[16px] font-normal text-[#C0C3C1]'>Find all the ways to reach us, including email, phone, and our office address, so you can get the support and answers you need quickly and easily.</p>
                    <div className='flex flex-col gap-6 py-10'>
                        <div className='flex gap-1 items-center '>
                            <Mail className='text-[#7DD3DD]' />
                            <p className='text-[#C0C3C1] text-[18px]'>support@alhhub.com</p>
                        </div>
                        <div className='flex gap-1 items-center '>
                            <PhoneCall className='text-[#7DD3DD]' />
                            <p className='text-[#C0C3C1] text-[18px]'>+1 (555) 123-4567FGHJ</p>
                        </div>
                        <div className='flex gap-1 items-center '>
                            <MapPinCheckInside className='text-[#7DD3DD]' />
                            <p className='text-[#C0C3C1] text-[18px]'>123 Care Street, City, State, ZIP Address: 123 Care Street, City, State, ZIP</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo