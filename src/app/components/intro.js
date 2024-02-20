import React from 'react'
import Image from 'next/image'

export default function Intro() {
  return (
    <section className="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[100px] sm:py-[100px] sm:px-[10px]">
        <div>
            <div className="flex flex-col gap-[10px]">
                <h1 className='text-slate-100 text-6xl pb-[10px]'>
                    Brendan Lewis
                </h1>
                <h2 className='text-slate-200 text-2xl'>
                    Software Developer
                </h2>
                <h3 className='text-slate-400 text-sm'>
                    I build stuff for the internet.
                </h3>
            </div>
            <div className="flex py-[48px]">
                <a href="mailto:brendanjflewis@icloud.com"><button type="button" className="hover:text-[#1b1b1b] hover:bg-[#87D0E0] font-medium border-b-[4px] border-t-[1px] border-l-[1px] border-r-[4px] hover:border-[#1b1b1b] ease-in-out duration-200 border-[#87D0E0] bg-[#1b1b1b] text-[#87D0E0] hover:border-b-[4px] hover:border-r-[4px] py-2 px-8 rounded-lg">Get in touch</button></a>
            </div>
        </div>
    </section>
  )
}
