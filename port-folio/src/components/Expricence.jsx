import React from 'react'
import { experiences } from '../data/data'
import { GridLine } from '../utils/GridLine'

const Expricence = () => {
  return (
<section id='experience' className='my-20 px-6 relative  border border-[#555555] '>

<h2 className='text-3xl text-neutral-300 font-bold text-center mb-2'>
    My <span className='text-outline'>Experience</span>
</h2>
<p className='text-neutral-400 text-center mx-auto max-w-xl mb-12 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Totam 
   quae doloribus quis libero similique asperiores saepe
    quod unde veritatis deleniti.</p>
    <GridLine/>

<div className='relative max-w-5xl max-auto px-4 py-12'>
    <div className='absolute left-1/2 top-0 bottom-0 w-1 md:flex hidden transform -translate-x-1/2 '></div>
<div className='space-y-12'>
  {
    experiences.map((exp, index) => {
      const isLeft = index % 2 === 0;
      return (
        <div key={index} className={`relative flex items-start w-full ${isLeft ? "md:justify-start" : "md:justify-end"} justify-center`}>
          <div className='absolute left-1/2 md:flex hidden -translate-x-1/2 z-10'>
            <div className='w-10 h-10 rounded-full shadow-lg flex justify-center items-center bg-neutral-600'>
              <span className='text-2xl text-neutral-100'>{exp.logo}</span>
            </div>
          </div>

          <div className={`w-full md:w-[45%] p-6 rounded-xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300 ${isLeft ? "md:text-right" : "mr-12"} text-left`}>
            <h3 className='text-xl font-semibold text-neutral-200'>{exp.title}</h3>
            <p className='text-neutral-400'>{exp.company}</p>
            <p className='text-sm text-neutral-500 mb-4'>{exp.period}</p>
            <p className='text-neutral-300 mb-4'>{exp.description}</p>
            <div className={`flex flex-wrap gap-2 ${isLeft ? "justify-end" : "justify-start"}`}>
              {exp.skills.map((skill, i) => (
                <span className='bg-neutral-700 text-neutral-300 px-3 py-2 rounded-md text-sm text-light' key={i}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )
    })
  }

</div>
    </div>

</section>
  )
}

export default Expricence