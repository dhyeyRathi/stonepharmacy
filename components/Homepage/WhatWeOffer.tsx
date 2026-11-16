"use client"
import Image from 'next/image'
import { ButtonVar2 } from '../Button'
import { PaperBg } from '../Icons/PaperBg'
import { useEffect, useState } from 'react'
import { stepType } from '@/Types/Step'
import { IconTick } from '../Icons/IconTick'

const WhatWeOffer = () => {
    const [stepNo, setStepNo] = useState<number>(1);

    const services = [
        {
            id: 1,
            title: "Weight Management",
            text: "Personalised support to help you achieve your weight goals, your perfect diet plan including expert advice and treatment options.",
            img: "/Images/WeightManagement.png"
        },
        {
            id: 2,
            title: "Travel Vaccination",
            text: "Stay protected on your travels with essential vaccines, medicines and health advice tailored to your destination.",
            img: "/Images/TravelVaccine.png"
        },
        {
            id: 3,
            title: "Contraception Service",
            text: "Find convenient contraception services at your local pharmacy. Get personalised advice and options without a doctor visit.",
            img: "/Images/Contraception.png"
        },
    ]
    const steps = [
        {
            id: 1,
            title: "Pick your condition",
            text: "Just let us know what’s wrong, like a cough, pain, or a medication question. We’ll guide you from there.",
            img: "/Images/step1.png"
        },
        {
            id: 2,
            title: "Answer few questions",
            text: "A quick and simple form to help us understand your needs better. It won’t take long!",
            img: "/Images/step2.png"
        },
        {
            id: 3,
            title: "Schedule an appointment",
            text: "Choose a time that works best for you—it’s simple and hassle-free.",
            img: "/Images/step3.png"
        },
        {
            id: 4,
            title: "Recieve expert care",
            text: "Speak with a friendly  clinician who will help you feel better with the right advice and treatment.",
            img: "/Images/step4.png"
        },

    ]

    const currentStep = steps.find(s => s.id === stepNo);
    useEffect(() => {
        const timer = setInterval(() => {
            setStepNo(prev => prev === 4 ? 1 : prev + 1);
        }, 3000)

        return () => clearInterval(timer);
    }, [])

    return (
        <section className=' w-full flex flex-col items-center relative gap-[40px] '>
            <h2 className='font-nyght text-36 relative'>
                What We Offer to Keep You Healthy
            </h2>

            <div className='w-full flex gap-24 justify-center'>
                {
                    services.map((service) => (
                        <div key={service.id}
                            className='group flex flex-col p-[24px] w-[350px] border-1 rounded-[16px] border-button-text gap-24 hover:shadow-[0px_24px_50px_rgba(0,128,0,0.1),0px_-15px_25px_rgba(236,97,57,0.15)]
                            transition-all duration-300'>
                            <Image src={service.img} width={1000} height={1000} alt={service.title}
                                className='w-full h-[200px]' />

                            <div className='w-full flex flex-col gap-[12px]'>
                                <h3 className='font-poppins text-[24px] font-semibold'>
                                    {service.title}
                                </h3>
                                <p className='font-poppins text-16 line-clamp-3 font-[300]'>
                                    {service.text}
                                </p>
                            </div>
                            <div className='w-full group-hover:mt-[10px] transition-all duration-300'>
                                <ButtonVar2 className='self-end text-[18px] font-[400]'>Get Treatments</ButtonVar2>
                            </div>

                        </div>
                    ))
                }
            </div>

            <div className='w-full flex gap-24 justify-center'>
                <div className='relative w-3/8'>
                    <PaperBg className='absolute inset-0' />
                    <div className='flex flex-col gap-[36px] pl-[100px] pt-[60px]'>
                        {steps.map((step) => (
                            <h4 className={`text-18 font-poppins flex gap-16 ${step.id <= stepNo && "font-[600]"}`} key={step.id}>
                                {step.id}. {step.title} <span>{step.id <= stepNo && <IconTick />}</span>
                            </h4>
                        ))}
                    </div>

                </div>
                <div className='w-3/8 h-full items-center relative'>
                    {currentStep && <Image src={currentStep.img} alt={currentStep.title}
                        width={1000} height={1000} className='h-[320px] w-auto opacity-55 inset-shadow-[30px_30px_30px_30px] inset-shadow-white ' />}
                    <div className='absolute bg-radial from-transparent/80  to-white inset-0' />
                    <div className='absolute bg-radial from-transparent/80 via-white/90 to-white inset-0' />
                    <div className='absolute z-[10] bottom-20 left-5'>
                        <h4 className='text-[24px] font-nyght'>
                            {currentStep?.title}
                        </h4>
                        <p className='font-poppins text-16'>
                            {currentStep?.text}
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default WhatWeOffer