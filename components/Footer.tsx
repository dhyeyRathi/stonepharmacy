import React from 'react'
import IconLink from './Icons/IconLink'
import IconHospitalLocation from './Icons/IconHospitalLocation'
import IconMessage from './Icons/IconMessage'
import IconPhone from './Icons/IconPhone'
import { FooterLogos } from './Icons/NHS'
import Link from 'next/link'
import { IconFacebook, IconInstagram, IconLinkedIn, IconX } from './Icons/IconsSocial'

const Footer = () => {
    const links = [
        {
            "title": "Quick Links",
            "links": [
                "NHS Pharmacy",
                "Private Pharmacy",
                "Health & Advice",
                "Contact Us",
                "Care Home Service"
            ]
        },
        {
            "title": "Other Links",
            "links": [
                "NHS Pharmacy",
                "Private Pharmacy",
                "Health & Advice",
                "Contact Us",
                "Care Home Service"
            ]
        },
        {
            "title": "Opening Hours",
            "hours": [
                {
                    "day": "Monday - Friday",
                    "time": "09:00AM to 06:00PM"
                },
                {
                    "day": "Saturday",
                    "time": "11:00AM to 03:00PM"
                },
                {
                    "day": "Sunday",
                    "time": "Emergency Only"
                }
            ]
        }
    ]

    return (
        <footer className='w-full bg-dark-bg order-last flex justify-center'>
            <div className='w-full max-w-[1098px] py-8 sm:py-12 lg:py-24 flex flex-col gap-6 sm:gap-8 lg:gap-[32px]'>
                <div className='w-full flex flex-col lg:flex-row gap-8 lg:gap-0'>
                    <ul className='flex flex-col gap-[12px] text-white text-14 w-full lg:w-1/3'>
                        <li className='pr-0 lg:pr-[32px] flex flex-col gap-[2px]'>
                            <h3 className='flex flex-col'>
                                <span className='text-white/50'>GPhC Registration: </span>
                                Pharmacy: 1234567
                            </h3>
                            <a className='flex items-center gap-[4px] w-full text-button-text cursor-pointer hover:underline'>
                                Verify Registration <IconLink />
                            </a>
                        </li>
                        <li className='pr-0 lg:pr-[32px] flex flex-col gap-[2px]'>
                            <h3 className='flex flex-col'>
                                <span className='text-white/50'>Superintendent Pharmacist: </span>
                                Dr. Sarah Pharmacy<br />
                                GPhC: 2345678
                            </h3>
                        </li>
                        <li className='pr-0 lg:pr-[32px] flex flex-col gap-[2px]'>
                            <h3 className='flex flex-col'>
                                <span className='text-white/50'>Pharmacy Owner: </span>
                                Digital Health Pharmacy Ltd<br />
                                GPhC: 2345678
                            </h3>
                        </li>
                    </ul>

                    <div className='w-full lg:w-2/3 flex flex-col sm:flex-row gap-8 sm:gap-4 lg:gap-0 justify-between'>
                        {links.map((title, index) => (
                            <div key={index} className='w-full text-white flex flex-col gap-3 sm:gap-4 lg:gap-[32px] justify-start'>
                                <h4 className='text-base sm:text-lg lg:text-18 font-poppins font-medium'>
                                    {title.title}
                                </h4>
                                {title.links && (
                                    <ul className='flex flex-col gap-2 lg:gap-8'>
                                        {title.links?.map((link, lIndex) => (
                                            <li key={lIndex} className='font-poppins text-xs sm:text-14'>
                                                <Link href="/" className='cursor-pointer text-white/80 hover:text-white transition-colors'>
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {title.hours && (
                                    <ul className='flex flex-col gap-2 lg:gap-8'>
                                        {title.hours?.map((time, hIndex) => (
                                            <li key={hIndex} className='font-poppins text-xs sm:text-14 text-white/80'>
                                                <div className='flex w-full justify-between gap-4'>
                                                    <span>{time.day}</span>
                                                    <span className='text-right'>{time.time}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <ul className='w-full flex flex-col sm:flex-row bg-white/5 p-4 sm:p-5 lg:p-16 justify-center gap-4 sm:gap-6 lg:gap-0 rounded-2xl'>
                    <li className='flex gap-3 lg:gap-16 w-full justify-start sm:justify-center items-center'>
                        <IconHospitalLocation className='grayscale shrink-0' />
                        <div className='text-xs sm:text-14 flex flex-col gap-[2px] text-white font-poppins'>
                            <h5 className='text-white/50 font-normal'>Pharmacy Address</h5>
                            <p>10 Mary Way, Murrayhaven, DD8 4EX</p>
                        </div>
                    </li>
                    <li className='flex gap-3 lg:gap-16 w-full justify-start sm:justify-center items-center'>
                        <IconMessage className='grayscale shrink-0' />
                        <div className='text-xs sm:text-14 flex flex-col gap-[2px] text-white font-poppins'>
                            <h5 className='text-white/50 font-normal'>Email Address</h5>
                            <p>healthya@gmail.com</p>
                        </div>
                    </li>
                    <li className='flex gap-3 lg:gap-16 w-full justify-start sm:justify-center items-center'>
                        <IconPhone className='grayscale shrink-0' />
                        <div className='text-xs sm:text-14 flex flex-col gap-[2px] text-white font-poppins'>
                            <h5 className='text-white/50 font-normal'>Phone Number</h5>
                            <p>+44 (123) 456-7890</p>
                        </div>
                    </li>
                </ul>


                <div className='w-full flex flex-col sm:flex-row py-4 sm:py-6 lg:p-16 justify-between items-center gap-4 sm:gap-0'>
                    <p className='text-xs sm:text-14 font-poppins text-white/70 text-center sm:text-left order-2 sm:order-1'>
                        Copyright 2025 / WCAG Compliant
                    </p>
                    <div className='flex gap-4 items-center justify-center order-1 sm:order-2 scale-90 sm:scale-100'>
                        <FooterLogos />
                    </div>
                    <div className='flex gap-4 sm:gap-6 items-center justify-center sm:justify-end order-3'>
                        <Link href="https://www.facebook.com/" aria-label="Facebook" className="hover:opacity-80 transition-opacity">
                            <IconFacebook />
                        </Link>
                        <Link href="https://www.x.com/" aria-label="X" className="hover:opacity-80 transition-opacity">
                            <IconX />
                        </Link>
                        <Link href="https://www.instagram.com/" aria-label="Instagram" className="hover:opacity-80 transition-opacity">
                            <IconInstagram />
                        </Link>
                        <Link href="https://in.linkedin.com/" aria-label="LinkedIn" className="hover:opacity-80 transition-opacity">
                            <IconLinkedIn />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
