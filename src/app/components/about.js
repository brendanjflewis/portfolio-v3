import React from 'react'
import Image from 'next/image'
import profilePic from '../../../public/images/profile-pic.jpg'
import { skills } from '../lib/data'

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
                    <p className="text-slate-400 max-w-[80ch]">
                        Hi! My name is Brendan, and I am a developer passionate about creating engaging, intuitive, and user-friendly applications.
                    </p>
                    <p className="text-slate-400 max-w-[80ch]">
                        In 2020, amidst the challenges of the pandemic, I seized the opportunity to delve into coding as a personal pursuit. It was a ton of fun, but I wanted to take this field more seriously and take it to the next level. By 2021, I decided to deepen my knowledge by enrolling in a full-stack web development program at the University of Richmond. Once I graduated in 2022, I transitioned into the professional realm, securing a role at WayPath Consulting as a Developer and Consultant. However, I felt the need to further improve. This year, 2024, I enrolled at Western Governors University to pursue a Bachelor of Science in Computer Science. I have always embraced, and continue to embrace, a continuous growth mindset, honing my skills through independent projects, educational courses, and hands-on experience in the field to become the best developer I can be.
                    </p>
                    <p className="text-slate-400 max-w-[80ch]">
                        In my free time, you can find me hanging out with friends, playing video games, and consuming too much of the NBA. Of course, I code a lot. I am working on some solo projects and a team project, both web and game development. One of them, I hope to share very soon.
                    </p>
                    <p className="text-slate-400">Some recent technologies I have worked with:</p>
                    <div>
                        <ul className="text-slate-400 text-sm list-none grid grid-cols-2">
                            {skills.map((skill, index) => (
                                <li key={index} className="first-letter:text-[#87D0E0]">- {skill.name}</li>
                            ))}
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
