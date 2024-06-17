import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorders'

const Experience = () => {
    return (
        <div className='py-20 space-y-6' id="experience">
            <h1 className="heading mb-10">
                My {' '}
                <span className="text-purple">Work Experience</span>
            </h1>

            <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
                {workExperience.map((card, index) => (
                    <Button
                        key={index}
                        duration={Math.floor(Math.random() * 10000 + 10000)}
                        borderRadius="1.75rem"
                        className="flex-1 text-white border-neutral-200 dark:border-slate-800"
                    >
                        <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                            <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16' />
                            <div className="lg:ms-5">
                                <h1 className="text-start text-xl md:text-2xl font-bold">
                                    {card.company}
                                </h1>
                                <h1 className="text-start text-xl md:text-lg text-purple font-bold mt-5">
                                    {card.position}
                                </h1>
                                <h1 className="text-start text-white-100 tracking-widest mt-3 font-semibold">
                                    {/* {card.desc} */}
                                    <ul className=''>
                                        {card.responsibilities.map((responsibility, idx) => (
                                            <li key={idx} style={{ lineHeight: '1.6' }} className='p-2 border border-1 border-white/[0.2] rounded-md'>{responsibility}</li>
                                        ))}
                                    </ul>
                                </h1>
                            </div>
                        </div>
                    </Button>
                ))}
            </div>
        </div>
    )
}

export default Experience