"use client"
import Image from 'next/image'
import { ButtonVar2 } from '../Button'
import { PaperBg } from '../Icons/PaperBg'
import { useEffect, useState } from 'react'
import Button from '../Button'
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
            text: "Just let us know what's wrong, like a cough, pain, or a medication question. We'll guide you from there.",
            img: "/Images/step1.png"
        },
        {
            id: 2,
            title: "Answer few questions",
            text: "A quick and simple form to help us understand your needs better. It won't take long!",
            img: "/Images/step2.png"
        },
        {
            id: 3,
            title: "Schedule an appointment",
            text: "Choose a time that works best for you—it's simple and hassle-free.",
            img: "/Images/step3.png"
        },
        {
            id: 4,
            title: "Recieve expert care",
            text: "Speak with a friendly clinician who will help you feel better with the right advice and treatment.",
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
        <section className='w-full flex flex-col items-center relative gap-8 sm:gap-10 lg:gap-[40px]'>
            <h2 className='font-nyght text-2xl sm:text-3xl lg:text-36 relative text-center leading-tight'>
                What We Offer to Keep You Healthy
            </h2>

            {/* Service Cards */}
            <div className='w-full flex flex-wrap lg:flex-nowrap gap-5 lg:gap-24 justify-center'>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className='group flex flex-col p-5 sm:p-6 lg:p-[24px] w-full sm:w-[calc(50%-12px)] lg:w-[350px] border border-button-text rounded-[16px] gap-4 sm:gap-5 lg:gap-24 hover:shadow-[0px_24px_50px_rgba(0,128,0,0.1),0px_-15px_25px_rgba(236,97,57,0.15)] transition-all duration-300 bg-white'
                    >
                        <Image
                            src={service.img}
                            width={1000}
                            height={1000}
                            alt={service.title}
                            className='w-full h-[180px] sm:h-[190px] lg:h-[200px] object-cover rounded-xl'
                        />

                        <div className='w-full flex flex-col gap-[12px] flex-1'>
                            <h3 className='font-poppins text-lg sm:text-xl lg:text-[24px] font-semibold text-text-primary'>
                                {service.title}
                            </h3>
                            <p className='font-poppins text-xs sm:text-sm lg:text-16 line-clamp-3 font-[300] text-text-secondary'>
                                {service.text}
                            </p>
                        </div>
                        <div className='w-full group-hover:mt-[10px] transition-all duration-300 mt-auto'>
                            <ButtonVar2 className='self-end text-sm sm:text-base lg:text-[18px] font-[400]'>
                                Get Treatments
                            </ButtonVar2>
                        </div>
                    </div>
                ))}
            </div>

            {/* Steps Notebook Section */}
            <div className='w-full flex flex-col lg:flex-row gap-6 lg:gap-24 justify-center items-center lg:items-stretch'>
                {/* Notebook Sheet */}
                <div className='relative w-full max-w-[447px] lg:max-w-none lg:w-3/8 h-[290px] sm:h-[318px] lg:h-auto flex flex-col justify-start overflow-hidden'>
                    <PaperBg className='absolute inset-0 w-full h-full pointer-events-none' />
                    <div className='relative z-10 flex flex-col pl-[20%] sm:pl-[22%] lg:pl-[100px] pt-[38px] sm:pt-[44px] lg:pt-[60px] lg:gap-[36px]'>
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className='h-[56px] sm:h-[62px] lg:h-auto flex items-center'
                            >
                                <h4
                                    className={`text-xs sm:text-base lg:text-18 font-poppins flex items-center gap-2 sm:gap-3 lg:gap-16 transition-all duration-200 ${
                                        step.id <= stepNo ? "font-[600] text-text-primary" : "text-dark-bg/60 font-[400]"
                                    }`}
                                >
                                    <span>{step.id}. {step.title}</span>
                                    {step.id <= stepNo && <IconTick className="shrink-0" />}
                                </h4>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Step Illustration & Text */}
                <div className='w-full max-w-[447px] lg:max-w-none lg:w-3/8 border border-button-text/30 lg:border-0 rounded-2xl lg:rounded-none bg-[#F9FBFA] lg:bg-transparent p-4 sm:p-5 lg:p-0 relative flex flex-col lg:block items-center lg:items-stretch overflow-hidden'>
                    {/* Desktop layout */}
                    <div className='hidden lg:block w-full h-full relative items-center'>
                        {currentStep && (
                            <Image
                                src={currentStep.img}
                                alt={currentStep.title}
                                width={1000}
                                height={1000}
                                className='h-[320px] w-auto opacity-55 inset-shadow-[30px_30px_30px_30px] inset-shadow-white'
                            />
                        )}
                        <div className='absolute bg-radial from-transparent/80 to-white inset-0 pointer-events-none' />
                        <div className='absolute bg-radial from-transparent/80 via-white/90 to-white inset-0 pointer-events-none' />
                        <div className='absolute z-[10] bottom-20 left-5'>
                            <h4 className='text-[24px] font-nyght'>
                                {currentStep?.title}
                            </h4>
                            <p className='font-poppins text-16'>
                                {currentStep?.text}
                            </p>
                        </div>
                    </div>

                    {/* Mobile & Tablet layout (< lg) */}
                    <div className='lg:hidden flex flex-col sm:flex-row items-center gap-4 w-full'>
                        {currentStep && (
                            <div className='w-full sm:w-[140px] h-[130px] sm:h-[110px] relative rounded-xl overflow-hidden shrink-0 bg-white shadow-xs'>
                                <Image
                                    src={currentStep.img}
                                    alt={currentStep.title}
                                    fill
                                    className='object-cover'
                                />
                            </div>
                        )}
                        <div className='flex flex-col gap-1 w-full text-center sm:text-left'>
                            <h4 className='text-base sm:text-lg font-nyght font-semibold text-text-primary'>
                                {currentStep?.title}
                            </h4>
                            <p className='font-poppins text-xs sm:text-sm text-dark-bg/80 leading-relaxed'>
                                {currentStep?.text}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Button className='text-sm sm:text-base lg:text-16'>
                View all conditions
            </Button>
        </section>
    )
}

export default WhatWeOffer
