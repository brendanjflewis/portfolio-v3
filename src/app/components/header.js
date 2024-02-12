import { links } from '../lib/data'
import Link from 'next/link'
import React from 'react'

export default function Header() {
    return (
        <header className="top-0 left-1/2 h-[4.5rem] w-full">
            <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 px-[40px] rounded-full md:top-[1.7rem] sm:h-[initial] sm:py-4 backdrop-blur">
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-100 text-nuetral-50 sm:w-[initial] sm:flex-nowrap sm:gap-5">
                    {
                        links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.hash}>{link.name}</Link>
                            </li>
                        ))
                        
                    }
                </ul>
            </nav>
        </header>
    )
}