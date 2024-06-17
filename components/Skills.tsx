import { OtherSkills, apiSkills, backendSkills, companies, fromtendSkills } from '@/data'
import React from 'react'
import { GlareCard } from './ui/GlareCard'
import SkillList from './ui/SkillList'

const Skills = () => {
    return (
        <div className='py-20 space-y-6' id="skills">
            <h1 className="heading mb-10">
                My {' '}
                <span className="text-purple">Skills & Technologies</span>
            </h1>
            {/* <p className="mt-7 text-center">Skills of my specialization, used in projects</p> */}

            <div className="w-full mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                <GlareCard className="flex flex-col items-center justify-center">
                    <SkillList skillset={fromtendSkills} id={'frontend'} label={'Frontend Tecknologies'} />
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SkillList skillset={backendSkills} id={'backend'} label={'Backend Tecknologies'} />
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SkillList skillset={apiSkills} id={'api'} label={'API Integrations'} />
                </GlareCard>
                <GlareCard className="flex flex-col items-center justify-center">
                    <SkillList skillset={OtherSkills} id={'other'} label={'Other skills'} />
                </GlareCard>
            </div>
        </div>
        // <div className='py-20 space-y-6' id="experience">
        //     <h1 className="heading">
        //         My {' '}
        //         <span className="text-purple">Skills & Technologies</span>
        //     </h1>
        //     <p className="mt-7 text-center">Skills of my specialization, used in projects</p>

        //     <div className="w-full mt-12 grid gap-10">
        //         <div className="frontend">
        //             <h5 className="text-lg text-left text-purple">Frontend Tecknologies</h5>
        //             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 max-lg:mt-10">
        //                 {fromtendSkills.map(({ id, name, img, nameImg }) => (
        //                     <div key={id} className="flex items-center md:max-w-60 max-w-32 gap-2">
        //                         <img src={img} alt={name} className='md:w-10 w-5' />
        //                         <div className="">{name}</div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="backend">
        //             <h5 className="text-lg text-left text-purple">Backend Tecknologies</h5>
        //             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 max-lg:mt-10">
        //                 {backendSkills.map(({ id, name, img, nameImg }) => (
        //                     <div key={id} className="flex items-center md:max-w-60 max-w-32 gap-2">
        //                         <img src={img} alt={name} className='md:w-10 w-5' />
        //                         <div className="">{name}</div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="api">
        //             <h5 className="text-lg text-left text-purple">API Integrations</h5>
        //             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 max-lg:mt-10">
        //                 {apiSkills.map(({ id, name, img, nameImg }) => (
        //                     <div key={id} className="flex items-center md:max-w-60 max-w-32 gap-2">
        //                         <img src={img} alt={name} className='md:w-10 w-5' />
        //                         <div className="">{name}</div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //         <div className="otherskill">
        //             <h5 className="text-lg text-left text-purple">Other Skills</h5>
        //             <div className="flex flex-wrap items-center justify-center gap-4 md:gap-7 max-lg:mt-10">
        //                 {OtherSkills.map(({ id, name }) => (
        //                     <div key={id} className="flex items-center md:max-w-60 max-w-32 gap-2">
        //                         <div className="">{name}</div>
        //                     </div>
        //                 ))}
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Skills