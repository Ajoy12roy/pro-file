import React from 'react'
import { skillsData } from '../data/data'
import { motion } from 'framer-motion'
import { GridLine } from '../utils/GridLine'

function Skills() {
  return (
    <section id='skills' className='py-20 px-6 page-wrapper relative'>
<div className='container mx-auto'>
<h2 className='text-3xl font-bold text-white mb-3 text-center'>My <span className='text-outline'>Skills</span></h2>
<p className='text-neutral-300 text-center amx-w-xl mx-auto mb-12'>the tools and technologies i use to bring ideas to life  </p>

<div className='grid md:grid-cols-2 gap-10'>
 {
skillsData.map((skill, i)=>(
<motion.div key={i}
whileHover={{
  rotateX: 8,
  rotateY: -8,
  scale: 1.05,
  backgroundColor: "transparent", 
  borderColor:" oklch(77.7% 0.152 181.912)",

}}
transition={{type: "spring",startOffset: 200, damping:15}}
className='backdrop-blur-lg rounded-xl px-6 shadow-lg border border-white/10 p-4'

>
  <GridLine />
  <h3 className='text-2xl font-semibold mb-4 text-teal-400'>{skill.title}</h3>
  <div className='flex flex-wrap gap-4'>
{
  skill.skills.map((item, index)=>(
<motion.div key={index}
whileHover={{
  rotateX: 8,
  rotateY: -8,
  scale: 1.05,
  rotate:5,
  backgroundColor: "transparent", 
  boxShadow:"0px 10px 20px rgba(0,255,255,0.7)",

}}
transition={{type: "spring",
  startOffset: 200,
   damping:15,
  }}

>
  <div className='flex items-center gap-2 py-1.5 px-4 z-50 relative text-white/70 text-semibold text-sm bg-black/50 backdrop-blur-md rounded-lg cursor-pointer'>
  <span className='text-xl'>{item.icon}</span>
  <span>{item.name}</span>
  </div>
</motion.div>
  ))
}
  
  </div>

</motion.div>

))
 }

</div>

</div>

    </section>
  )
}

export default Skills
