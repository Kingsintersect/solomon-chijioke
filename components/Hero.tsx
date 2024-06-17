import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import Link from 'next/link'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className="pb-20 pt-36 relative overflow-hidden">
            <div>
                <Spotlight
                    className="-top-40 -left-10 md:left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="top-10 left-full h-[80vh] w-[50vw]"
                    fill="purple"
                />
                <Spotlight
                    className="top-28 left-80 h-[80vh] w-[50vw]"
                    fill="blue"
                />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.07] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

            </div>
            <div className="flex justify-center relative my-20 mt-0 z-10">
                <div className="max-w-[89vw] md:max-w-w2xl lg:max-w-[60vw] flex flex-col items-center">
                    {/* <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">Dynamic Web Magic With Next.js</h2> */}

                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-4xl lg:text-5xl"
                        words="Transforming Concepts into Seamless User Experiences"
                    />

                    <p className="text-center md:tracking-widest mb-4 text-sm  md:text-lg lg:text-2xl">
                        Hi, I&apos;m Solomon Chijioke, a Software Developer based in Nigeria.
                    </p>
                    <div className="flex items-center justify-center gap-10">
                        <Link href={'https://github.com/Kingsintersect'} target='_blank'>
                            <MagicButton
                                title={"Visit My Github"}
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </Link>
                        <Link href={'/docs/Solomon.pdf'} target='_blank'>
                            <MagicButton
                                title={"Download My CV"}
                                icon={<FaLocationArrow />}
                                position='right'
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero