'use client'
import { useState } from 'react'
import RedCircle from './Icons/RedCircle'

const FAQs = () => {
    const faqsData = [
        {
            id: 1,
            question: 'How can Pharmacy First save time?',
            answer: 'Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.'
        },
        {
            id: 2,
            question: 'What are the benefits of Pharmacy First?',
            answer: 'Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.'
        },
        {
            id: 3,
            question: 'How can Pharmacy First save time?',
            answer: 'Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.'
        },
        {
            id: 4,
            question: 'How can Pharmacy First save time?',
            answer: 'Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.'
        },
        {
            id: 5,
            question: 'How can Pharmacy First save time?',
            answer: 'Pharmacy First will help you get seen by a healthcare professional quickly. Instead of waiting for a GP appointment, going to A&E or attending out-of-hours NHS services, you can walk into your nearest Well Pharmacy and have a private consultation with one of our pharmacists whenever you need to.'
        }
    ]
    const [activeQuestion, setActiveQuestion] = useState<number | null>(1)

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center w-full'>
            <h2 className='font-nyght text-2xl sm:text-3xl lg:text-36 relative text-center leading-tight'>
                Frequently asked questions
                <RedCircle className='absolute -top-1/10 -left-1/10 scale-85 hidden sm:block pointer-events-none' />
            </h2>
            <div className='w-full flex flex-col gap-3 sm:gap-4 lg:gap-16'>
                {faqsData.map((question) => (
                    <div
                        key={question.id}
                        className={`font-poppins pb-3 sm:pb-4 lg:pb-16 p-4 sm:p-5 lg:p-24 w-full rounded-[8px]  flex bg-light-frost/60 duration-300 border-2 ease-in-out cursor-pointer 
                            ${activeQuestion === question.id ? 'border-primary/40 bg-white shadow-xs' : '  border-button-text '
                            }`}
                        onClick={() => setActiveQuestion(question.id === activeQuestion ? null : question.id)}
                    >
                        <div className='flex flex-col gap-2.5 sm:gap-3 lg:gap-16 w-full justify-center'>
                            <h3 className={`text-base sm:text-lg lg:text-24  ${activeQuestion === question.id ? 'text-[#0F759D]' : 'text-link '} font-medium leading-snug`}>
                                {question.question}
                            </h3>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${activeQuestion === question.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                                    }`}
                            >
                                <div className='overflow-hidden'>
                                    <p className='text-xs sm:text-sm lg:text-16 text-dark-bg/75 max-w-full lg:max-w-2/3 leading-relaxed pt-1'>
                                        {question.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <button
                            type="button"
                            className='text-2xl sm:text-3xl lg:text-4xl font-nyght self-start shrink-0 ml-2 text-dark-bg/70 hover:text-link transition-colors cursor-pointer'
                            aria-label={activeQuestion === question.id ? "Collapse question" : "Expand question"}
                        >
                            {activeQuestion === question.id ? '−' : '+'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs
