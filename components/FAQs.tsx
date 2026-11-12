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
        <section className='flex flex-col gap-[40px] items-center w-full'>
            <h2 className='font-nyght text-36 relative'>
                Frequently asked questions
                <RedCircle className='absolute -top-1/10 -left-1/10 scale-85' />
            </h2>
            <div className='w-full flex flex-col gap-16'>
                {faqsData.map((question) => (
                    <div key={question.id} className={`font-poppins pb-16 p-24  w-full rounded-[8px] border-button-text border-1 flex 
                    bg-light-frost/60 duration-300 ease-in-out ${activeQuestion === question.id && 'border-0'}`} >
                        <div className=' flex flex-col gap-16 w-full justify-center'>
                            <h3 className='text-24 text-link'>
                                {question.question}
                            </h3>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${activeQuestion === question.id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                            >
                                <div className='overflow-hidden'>
                                    <p className='text-16 text-dark-bg/75 max-w-2/3'>
                                        {question.answer}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <button className='text-4xl  font-nyght self-start '
                            onClick={() => setActiveQuestion(question.id == activeQuestion ? null : question.id)}>
                            {activeQuestion == question.id ? '—' : '+'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs