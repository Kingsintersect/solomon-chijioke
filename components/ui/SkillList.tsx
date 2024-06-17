import { cn } from '@/utils/cn'
import React from 'react'

type skillsetType = {
    id?: number,
    img?: string,
    name: string,
    nameImg?: string,
}
const SkillList = ({ skillset, id, label, className }: { skillset: skillsetType[], id: string, label: string, className?: string }) => {
    return (
        <div id={id} className="py-10">
            <h5 className="text-lg text-center text-purple mb-5">{label}</h5>
            <div className={cn("grid grid-cols-1 px-10 gap-4 md:gap-7 max-lg:mt-10", className)}>
                {skillset.map(({ name, img }, index) => (
                    <div key={index} className="flex items-center md:max-w-60 max-w-32 gap-2">
                        {img && <img src={img} alt={name} className='md:w-10 w-10' />}
                        {name && <div className="">{name}</div>}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SkillList