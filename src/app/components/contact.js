import React from 'react'

export default function Contact() {
    return (
        <section id="contact" className="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[60px] sm:py-[20px] sm:px-[10px]">
            <div className="text-slate-100 text-4xl md:pb-[40px] sm:pb-[20px]">
                <h2 className="after:h-[1px] after:bg-[#87D0E0] after:inline-block after:relative after:align-middle after:w-1/6 after:left-5">Contact</h2>
            </div>
            <div className="flex flex-col text-slate-300">
                <p>Interested in learning more?</p>
                <p>Lets talk!</p>
            </div>
            <div className="flex py-[20px]">
                <a href="mailto:brendanjflewis@icloud.com"><button type="button" className="text-[#87D0E0] hover:text-[#1b1b1b] border border-[#87D0E0] hover:border-[#1b1b1b] hover:bg-[#87D0E0] py-2 px-5 rounded-full">Hello!</button></a>
            </div>
        </section>
    )
}
