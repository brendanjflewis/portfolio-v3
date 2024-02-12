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
        </div>
    </section>
  )
}
