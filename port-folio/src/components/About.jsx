import React from 'react'
import { GridLine } from '../utils/GridLine'
import user from '../assets/about/img-1.jpg';

function About() {
    return (
        <section id='about' className='relative w-full border border-[rgba(102,102,102,0.3)] text-white flex justify-center items-center py-36 overflow-hidden'>
            <GridLine />
            <div className='relative z-10 flex flex-col md:flex-row items-center gap-48 max-w-6xl w-full'>
                <div className='relative w-72 h-72 group cursor-pointer '>
                    <img src={user}  className='w-full h-full object-cover grayscale rounded-xl group-hover:grayscale-0 duration-500 ' alt="" />
                    
                    <div className='absolute top-1/2 left-1/2 w-80 h-80 border border-natural-300 transform -translate-x-1/2 -translate-y-1/2 rotate-45 z-0 transition-all duration-500 group-hover:scale-110 group-hover:border-blue-500 '/>

                    <div className='absolute top-1/2 left-1/2 w-72 h-72 border border-natural-300 transform -translate-x-1/2 -translate-y-1/2 rotate-3 z-0 transition-all duration-500 group-hover:scale-110 group-hover:border-pink-500 '/>

                    </div>
                    <div className='flex-1 max-w-xl px-3'>
                        <h2 className='text-3xl font-bold-bold border-b-2 border-natural-500 mb-4 w-fit'>About <span className='text-outline'>Me</span> </h2>
                        <p className='text-natural-300 mb-8 text-normal text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Ab et earum reprehenderit amet totam inventore hic odio nihil sint
                              ea excepturi quasi quia placeat odit maxime impedit,
                               omnis sit minima.</p>
                        
                        <p className='text-natural-300 mb-8 text-normal text-justify'> Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                             Ab et earum reprehenderit amet totam inventore hic odio nihil sint
                              ea excepturi quasi quia placeat odit maxime impedit,
                               omnis sit minima.</p>

                               <button className='px-6 py-2 border-neutral-400 rounded-full cursor-pointer hover:bg-white transition hover:text-neutral-700'>Download Resume</button>

                    </div>
                </div>
           
        </section>
    );
}

export default About
