import React from 'react'
import { portfolioItems } from '../data/data'

const Portfolio = () => {
  return (
    <section id='portfolio' className='py-20 px-6 page-wrapper  relative'>
        <div className='mx-auto container'>
    <h2 className='text-3xl font-bold text-center text-neutral-300 mb-2 '>
        My <span className='text-outline'>portfolio</span>
    </h2>
    <p className='text-neutral-400 text-center mx-auto max-w-xl mb-12'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.Totam
    </p>

<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

{
  portfolioItems.map((item,index)=>(
    <div className='bg-white/10 rounded-lg overflow-hidden backdrop-blur-lg border border-white/20 transition-transform hover:translate-y-1'>
<div className='h-48 overflow-hidden '>
    <img src={item.image} className='w-full h-full object-cover transition-transform hover:scale-110  ' 
    alt={item.title} />

</div>
<div className='p-4'>
  <h3 className='font-semibold text-lg text-white '>
    {item.title}
  </h3>
 <p className='text-white/40 mt-2'>{item.category}</p>
    </div>
  </div>
  ))
}

</div>
<div className='mt-12 text-center'>
  <button className='px-6 py-2 rounded-full bg-white/10 backdrop-blur-lg text-white border border-white/20 cursor-pointer hover:bg-cyan-600 hover:font-bold transition-colors '>View more project</button>
</div>
  </div>

    </section>
  )
}

export default Portfolio
