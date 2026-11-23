'use client'
import { useEffect, useState } from 'react'
import RedCircle from './Icons/RedCircle'
import { faqType, getFaqs } from '@/actions/faqs'

const FAQs = () => {
    const [faqsData, setFaqsData] = useState<faqType[]>([]);
    const [activeQuestion, setActiveQuestion] = useState<any | null>(null)

    useEffect(() => {
        async function getData() {
            const data = await getFaqs();
            setFaqsData(data ?? [])
        }

        getData()
    }, [])

    return (
        <section className='flex flex-col gap-6 sm:gap-8 lg:gap-[40px] items-center w-full'>
            <h2 className='font-nyght text-2xl sm:text-3xl lg:text-36 relative text-center leading-tight'>
                Frequently asked questions
                <RedCircle className='absolute -top-1/10 -left-1/10 scale-85 hidden sm:block pointer-events-none' />
            </h2>
            <div className='w-full flex flex-col gap-3 sm:gap-4 lg:gap-16'>
                {faqsData.map((question) => (
                    <div
                        key={question._id}
                        className={`font-poppins pb-3 sm:pb-4 lg:pb-16 p-4 sm:p-5 lg:p-24 w-full rounded-[8px]  flex bg-light-frost/60 duration-300 border-2 ease-in-out cursor-pointer 
                            ${activeQuestion === question._id ? 'border-primary/40 bg-white shadow-xs' : '  border-button-text '
                            }`}
                        onClick={() => setActiveQuestion(question._id === activeQuestion ? null : question._id)}
                    >
                        <div className='flex flex-col gap-2.5 sm:gap-3 lg:gap-16 w-full justify-center'>
                            <h3 className={`text-base sm:text-lg lg:text-24  ${activeQuestion === question._id ? 'text-[#0F759D]' : 'text-link '} font-medium leading-snug`}>
                                {question.question}
                            </h3>
                            <div
                                className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${activeQuestion === question._id ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
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
                            aria-label={activeQuestion === question._id ? "Collapse question" : "Expand question"}
                        >
                            {activeQuestion === question._id ? '−' : '+'}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default FAQs
