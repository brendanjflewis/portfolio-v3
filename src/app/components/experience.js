import React from 'react'
import Link from 'next/link'

export default function Experience() {
    return (
        <section id="experience" className="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[60px] sm:py-[50px] sm:px-[10px]">
            <div className="md:pb-[40px] sm:pb-[20px]">
                <h2 className='text-slate-100 text-4xl relative after:h-[1px] after:bg-[#87D0E0] after:inline-block after:relative after:align-middle after:w-1/6 after:left-5'>Experience</h2>
            </div>
            <div>
                <div className="flex md:flex-row sm:flex-col gap-2 md:items-center text-slate-100">
                    <p>Associate Software Developer and Consultant</p>
                    <p className="text-slate-300 text-sm">| WayPath Consulting</p>
                    <p className="text-slate-300 text-sm">| Jul. 2022 - Dec. 2023 </p>                    
                </div>
                <div className="py-[10px]">
                    <p className="text-slate-400 max-w-[80ch]">My role at WayPath was a dual role, software developer and consultant. I worked, communicated, and demoed projects with and for clients, ranging from other engineers and developers to marketing and company leadership. Technologies I worked with included a range of CMS, CRM, and CCM platforms with the usual web development tech of JavaScript, React, etc.</p>
                </div>
                <div className="flex md:flex-row sm:flex-col md:gap-[15px] sm:gap-[5px] text-slate-400 py-[10px]">
                    <Link href="https://waypathconsulting.com/" target="_blank" className="group flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-3.5 w-3.5 fill-slate-400 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>
                        <h3 className="text-slate-400 text-sm group-hover:text-[#87D0E0] ease-in-out duration-200">WayPath Consulting</h3>
                        {/* <Image src={linkSVG} alt="Link Icon" className="h-4 w-4" /> */}
                    </Link>
                    <Link href="https://iapp.org/" target="_blank" className="group flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-3.5 w-3.5 fill-slate-400 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>
                        <h3 className="text-slate-400 text-sm group-hover:text-[#87D0E0] ease-in-out duration-200">IAPP</h3>
                        {/* <Image src={linkSVG} alt="Link Icon" className="h-4 w-4" /> */}
                    </Link>
                    <Link href="https://www.travelforteens.com/" target="_blank" className="group flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" className="h-3.5 w-3.5 fill-slate-400 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z" /></svg>
                        <h3 className="text-slate-400 text-sm group-hover:text-[#87D0E0] ease-in-out duration-200">Travel for Teens</h3>
                        {/* <Image src={linkSVG} alt="Link Icon" className="h-4 w-4" /> */}
                    </Link>
                </div>
                <div className="flex pt-[10px]">
                    <ul className="flex flex-wrap gap-2.5 text-sm text-[#87D0E0] group-hover:backdrop-brightness-125 py-[1px] rounded-xl ease-in-out duration-200">
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>ContentStack</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>Brightspot</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>React</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>JavaScript</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>CSS</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>ChakraUI</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>Wordpress</li>
                        <li className='backdrop-brightness-125 px-[8px] py-[1px] rounded-xl'>Microsoft Dynamics</li>
                    </ul>
                </div>
            </div>
            <div className="group flex pt-[40px]">
                <Link href="https://docs.google.com/document/d/1buhDS-8ka3cuGDG_vTyRMpUmolVDVIwOnrE_GoRfpbc/edit?usp=sharing" target="_blank" className="flex items-center gap-2.5">
                    <h3 className="text-slate-100 group-hover:text-[#87D0E0] ease-in-out duration-200">View my resume</h3>
                    {/* <Image src={linkSVG} alt="Link Icon" className="h-4 w-4" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"className="h-4 w-4 fill-slate-100 group-hover:fill-[#87D0E0] ease-in-out duration-200"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                </Link>
            </div>
        </section>
    )
}
