import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/profile-pic.jpg'

export default function About() {
    return (
        <section id="about" className="lg:max-w-desktop md:max-w-tablet sm:max-w-mobile mx-auto flex flex-col justify-center lg:py-[100px] md:py-[60px] sm:py-[50px] sm:px-[10px]">
            <div className="pb-[40px]">
                <h2 className='text-slate-100 text-4xl relative after:h-[1px] after:bg-[#87D0E0] after:inline-block after:relative after:align-middle after:w-1/6 after:left-5'>
                    About me
                </h2>
            </div>
            <div className="flex lg:flex-row sm:flex-col md:gap-[50px] sm:gap-[20px]">
                <div className="flex flex-col gap-[10px]">
                    <p className="text-slate-100 max-w-[80ch]">
                        Hi! I'm Brendan and I enjoy making usable and sensible products for people. I started learning to code in 2020 during the pandemic as a hobby because there wasn't a whole lot to do besides play games and zoom with friends. In 2021, I doubled down on this journey, took a full-stack web development through University of Richmond, and graduated in 2022!
                    </p>
                    <p className="text-slate-100 max-w-[80ch]">
                        In my free time I hang out with my partner and friends, play a lot of games, and consume an unhealthy of the NBA. I also (shocker) code a lot! Now that this new portfolio is up, I'm back to sharpening my fundamentals. I'm also learning the Godot Engine and using it to create a small game project!
                    </p>
                    <p className="text-slate-100">Some recent technologies I've worked with:</p>
                    <div>
                        <ul className="text-slate-400 text-sm list-none grid grid-cols-2 ">
                            <li class="first-letter:text-[#87D0E0]">- JavaScript</li>
                            <li class="first-letter:text-[#87D0E0]">- MongoDB</li>
                            <li class="first-letter:text-[#87D0E0]">- C++</li>
                            <li class="first-letter:text-[#87D0E0]">- SQL</li>
                            <li class="first-letter:text-[#87D0E0]">- React</li>
                            <li class="first-letter:text-[#87D0E0]">- Wordpress</li>
                            <li class="first-letter:text-[#87D0E0]">- Unreal Engine 5</li>
                            <li class="first-letter:text-[#87D0E0]">- Godot Enginge</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <Image src={profilePic} alt="me" className="rounded-full md:h-[240px] sm:h-[120px] md:w-[240px] sm:w-[120px]  border-2 border-[#333333]" />
                </div>
            </div>
        </section>
    )
}
