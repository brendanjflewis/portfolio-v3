import React from 'react'
import Image from 'next/image'
import { projects } from '../lib/data'
import linkSVG from '../../../public/svgs/link.svg'
import Link from 'next/link'

export default function Projects() {
    return (
        <section id="projects" className="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[60px] sm:py-[50px] sm:px-[10px]">
            <div className="md:pb-[40px] sm:pb-[20px]">
                <h2 className='text-slate-100 text-4xl after:h-[1px] after:bg-[#87D0E0] after:inline-block after:relative after:align-middle after:w-1/6 after:left-5'>Projects</h2>
            </div>
            <div className="flex flex-col gap-6">
                {projects.slice(0, 3).map((project, index) => (
                    <a key={index} href={project.url} target="_blank" className='group md:flex sm:flex-col rounded-md border border-[#1b1b1b] hover:border hover:border-[#87D0E0] hover:border-opacity-5 hover:shadow-lg hover:shadow-inner hover:bg-zinc-500 hover:bg-opacity-5 ease-in-out duration-200'>
                        <div className="flex md:flex-row sm:flex-col justify-between py-3 md:px-2">

                            <div className="flex flex-col md:w-[50%]">
                                {/* <p className="text-sm text-[#64ffda]">{project.projectType}</p> */}
                                <div className="flex gap-2.5 items-center pb-[8px]">
                                    <h3 className="text-slate-100 text-lg group-hover:text-[#87D0E0] ease-in-out duration-200" >{project.title}</h3>
                                    {/* <Image className="h-4 w-4 " src={linkSVG} /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="md:h-4 sm:h-3 md:w-4 sm:h-3 fill-slate-200 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                                </div>
                                <p className="text-slate-400">{project.description}</p>
                                <div className="flex flex-wrap gap-2.5 justify-self-end pt-[10px]">
                                    {project.tags.map((tag, i) => (
                                        <ul key={i} className="text-sm text-[#87D0E0] bg-[#87D0E0] bg-opacity-5 px-[8px] py-[1px] rounded-xl ease-in-out duration-200">
                                            <li>{tag}</li>
                                        </ul>
                                    ))
                                    }
                                </div>
                            </div>
                            <div className="md:pr-[20px] md:pt-none sm:pt-[16px]">
                                <Image src={project.image} alt={project.imageAlt} className="md:min-h-[200px] sm:min-h-[114px] md:max-h-[200px] sm:max-h-[114px] md:min-w-[360px] sm:min-w-[200px] md:max-w-[360px] sm:max-w-[200px] object-cover rounded-[5px] border-2 border-[#262626] group-hover:border-2 group-hover:border-[#333333]" />
                            </div>
                        </div>
                    </a>
                ))
                }
            </div>
            <div className="group flex justify-end pt-[30px] md:pr-[30px]">
                <Link href="https://github.com/brendanjflewis" target="_blank" className="flex items-center gap-2.5">
                    <p className="text-slate-400 group-hover:text-[#87D0E0] ease-in-out duration-200">View more projects from my GitHub</p>
                    {/* <Image src={linkSVG} alt="Link Icon" className="h-4 w-4" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="md:h-4 sm:h-3 md:w-4 sm:h-3 fill-slate-400 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z" /></svg>
                </Link>
            </div>
        </section>
    )
}
