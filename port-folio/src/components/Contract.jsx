import React from 'react'
import { FaFacebook, FaLocationArrow } from 'react-icons/fa'

import { GridLine } from '../utils/GridLine'
import { MdEmail, MdMessage, MdOutlineMessage, MdPhone } from 'react-icons/md'
import { BsInstagram, BsTwitter, BsWhatsapp } from 'react-icons/bs'


const Contract = () => {
  return (
   <section id='contact' className='py-20 px-6 page-wrapper relative border border-[#555555] '>

<div className='mx-auto container'>
    <h2 className='text-3xl text-neutral-300 font-bold text-center mb-2'>
    Get In <span className='text-outline'>Touch</span>
</h2>
<p className='text-neutral-400 text-center mx-auto max-w-xl mb-12 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit.Totam 
   quae doloribus quis libero similique asperiores saepe
    quod unde veritatis deleniti.</p>
    <GridLine/>
    <div className='bg-white/10 backdrop-blur-lg rounded-2xl p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 border border-white/20 shadow-lg'>
         
         <div>
            <h3 className='text-xl font-semibold mb-6 text-white'>Contract Information</h3>
<div className='space-y-6'>
    <div className='flex items-start'>
        <div className='p-3 bg-white/10 text-white/70 backdrop-blur-lg rounded-full mr-4 border border-white/20'>
        <FaLocationArrow />

        </div>
        <div>
            <h4 className='font-semibold text-white'>Location</h4>
            <p className='text-neutral-300'>Cumilla 3210,Bangladesh</p>
        </div>
        </div>
 <div className='flex items-start'>
        <div className='p-3 bg-white/10 text-white/70 backdrop-blur-lg rounded-full mr-4 border border-white/20'>
        <MdEmail />

        </div>
        <div>
            <h4 className='font-semibold text-white'>E-mail</h4>
            <p className='text-neutral-300'>abjoyroy12@gmail.com</p>

        </div>
    </div>

     <div className='flex items-start'>
        <div className='p-3 bg-white/10 text-white/70 backdrop-blur-lg rounded-full mr-4 border border-white/20'>
        <MdPhone/>

        </div>
        <div>
            <h4 className='font-semibold text-white'>Phone</h4>
            <p className='text-neutral-300'>+8801779286469</p>
        </div>
        </div>

<div className='mt-8'>
    <h4 className='font-semibold text-white mb-4'>Follow Me</h4>
<div className='flex gap-4 text-white/60'>
    <button className='p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border-white/20 transition-colors cursor-pointer'>
<FaFacebook />
</button>
    <button className='p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border-white/20 transition-colors cursor-pointer'>
<BsInstagram />
</button>
    <button className='p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border-white/20 transition-colors cursor-pointer'>
<BsTwitter />
</button>
    <button className='p-3 rounded-full bg-white/10 backdrop-blur-lg hover:bg-teal-500 border-white/20 transition-colors cursor-pointer'>
<BsWhatsapp />
</button>
</div>
</div>
</div>
         </div>
<div>
   <div className='flex flex-items-start'>
    <h3 className='text-white text-xl font-bold mb-6 text-center'>send me a <span className='text-orange-300 '> message</span>  </h3>
 <div className='p-2 ml-4 mb-5 bg-white/10 text-white/70 backdrop-blur-lg rounded-full  border hover:bg-emerald-500 border-white/20 transition-colors cursor-pointer'>

        <MdMessage />

        </div>
</div > 
<form action="" className=' space-y-6'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
<div>
    <label htmlFor="" className='block mb-1 text-sm text-neutral-300 '>Your Full Name </label>
    <input type="text" className='w-full px-3 py-1.5 bg-white/10  ring-white/20 text-white rounded-lg ring focus:ring-teal-400 
    focus:outline-none backdrop-blur-3xl' />
</div>
<div>
    <label htmlFor="" className='block mb-1 text-sm text-neutral-300 '>E-mail</label>
    <input type="text" className='w-full px-3 py-1.5 bg-white/10  ring-white/20 text-white rounded-lg ring focus:ring-teal-400 
    focus:outline-none backdrop-blur-3xl' />
</div>
   </div>
   <div>
    <label htmlFor="" className='block mb-1 text-sm text-neutral-300 '>Subject </label>
    <input type="text" className='w-full px-3 py-1.5 bg-white/10  ring-white/20 text-white rounded-lg ring focus:ring-teal-400 
    focus:outline-none backdrop-blur-3xl' />
</div>
<div>
    <label htmlFor="" className='block mb-1 text-sm text-neutral-300 '>Message </label>
    <textarea type="text" className='w-full px-3 py-1.5 bg-white/10  ring-white/20 text-white rounded-lg ring focus:ring-teal-400 
    focus:outline-none backdrop-blur-3xl' />
</div>
<button className='px-6 py-1.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-700 font-light text-sm hover:opacity-90 w-full cursor-pointer text-white/80 '>Send Message</button>
    </form>

</div>

    </div>
    </div>

   </section>
  )
}

export default Contract