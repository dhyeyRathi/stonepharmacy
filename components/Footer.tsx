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
        <section className='w-full bg-dark-bg order-last flex justify-center'>
            <div className='w-full max-w-[1440px] py-24 flex flex-col gap-[32px]'>
                <div className='w-full flex'>
                    <ul className='flex flex-col gap-[12px] text-white text-14 w-1/3'>
                        <li className=' pr-[32px] flex flex-col gap-[2px] '>
                            <h3 className='flex flex-col '>
                                <span className='text-white/50'>GPhC Registration: </span>
                                Pharmacy: 1234567
                            </h3>
                            <a className='flex items-center gap-[4px] w-full text-button-text cursor-pointer'>
                                Verify Registration <IconLink />
                            </a>
                        </li>
                        <li className=' pr-[32px] flex flex-col gap-[2px] '>
                            <h3 className='flex flex-col '>
                                <span className='text-white/50'>Superintendent Pharmacist: </span>
                                Dr. Sarah Pharmacy<br />
                                GPhC: 2345678
                            </h3>
                        </li>
                        <li className=' pr-[32px] flex flex-col gap-[2px] '>
                            <h3 className='flex flex-col '>
                                <span className='text-white/50'>Pharmacy Owner: </span>
                                Digital Health Pharmacy Ltd<br />
                                GPhC: 2345678
                            </h3>
                        </li>
                    </ul>
                    <div className='w-2/3 flex jusityf-between'>
                        {
                            links.map((title, index) => (
                                <div key={index} className='w-full text-white flex flex-col gap-[32px] justify-start'>
                                    <h1 className='text-18 font-poppins'>
                                        {title.title}
                                    </h1>
                                    {title.links && <ul className='flex flex-col gap-8'>
                                        {title.links?.map((link, index) => (
                                            <li key={index} className='font-poppins text-14 '>
                                                <Link href="/" className='cursor-pointer'>
                                                    {link}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>}
                                    <ul className='flex flex-col gap-8'>
                                        {title.hours?.map((time, index) => (
                                            <li key={index} className='font-poppins text-14 '>
                                                <Link href='/' className='cursor-pointer flex w-full justify-between'>
                                                    {time.day}
                                                    <span>{time.time}</span>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <ul className='w-full flex bg-white/5 p-16 justify-center '>
                    <li className='flex gap-16 w-full justify-center'>
                        <IconHospitalLocation className='grayscale' />
                        <div className='text-14 flex flex-col gap-[4px] text-white font-poppins'>
                            <h4 className='text-white/50'>
                                Pharmacy Address
                            </h4>
                            <p>
                                10 Mary Way, Murrayhaven, DD8 4EX
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-16 w-full  justify-center'>
                        <IconMessage className='grayscale' />
                        <div className='text-14 flex flex-col gap-[4px] text-white font-poppins'>
                            <h4 className='text-white/50'>
                                Email Address
                            </h4>
                            <p>
                                healthya@gmail.com
                            </p>
                        </div>
                    </li>
                    <li className='flex gap-16 w-full  justify-center'>
                        <IconPhone className='grayscale' />
                        <div className='text-14 flex flex-col gap-[4px] text-white font-poppins'>
                            <h4 className='text-white/50'>
                                Phone Number
                            </h4>
                            <p>
                                +44 (123) 456-7890
                            </p>
                        </div>
                    </li>
                </ul>

                <ul className='w-full flex p-16 justify-between items-center '>
                    <li className='flex gap-16 w-full '>
                        <h4 className='text-14 font-poppins text-white'>
                            Copyright 2025/ WCAG Compliant
                        </h4>
                    </li>
                    <li className='flex gap-16 w-full  justify-center'>

                        <FooterLogos />
                    </li>
                    <li className='flex gap-16 w-full justify-end'>

                        <Link href={`https://www.facebook.com/`}>
                            <IconFacebook />
                        </Link>
                        <Link href={`https://www.x.com/`}>
                            <IconX />
                        </Link>
                        <Link href={`https://www.instagram.com/`}>
                            <IconInstagram />
                        </Link>
                        <Link href={`https://in.linkedin.com/`}>
                            <IconLinkedIn />
                        </Link>

                    </li>
                </ul>

            </div>

        </section>
    )
}

export default Footer