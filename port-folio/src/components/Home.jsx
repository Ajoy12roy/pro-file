import React from 'react';
import { HeadingHero } from '../utils/HeadingHero';
import { FaFacebook } from 'react-icons/fa';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { LiaLinkedin } from 'react-icons/lia';
import slide2 from '../assets/hero/slide-2.jpg';
import pot from '../assets/hero/pot.png';

const Home = () => {
  return (
    <section id="home" className="relative page-wrapper min-h-screen flex items-center justify-center pt-16 pb-20">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${slide2})` }} />
      <div className="absolute inset-0 bg-black/50" />
      <div className='container z-10 mx-auto px-6 flex flex-col md:flex-row items-center'>
        <div className='flex-1 text-center md:text-left'>
          <h3 className='text-lg font-light capitalize tracking-wide text-teal-500'>I'm <span className='font-bold'>AJOY ROY</span> </h3>
          <HeadingHero />
          <p className='mt-4 text-white/40 max-w-xl'>I create beautiful, functional websites and applications with modern technologies, let's work together to bring your ideas to life.</p>

          <div className='mt-6 flex flex-wrap sm:justify-start justify-center text-white/70 text-sm font-medium gap-4'>
            <button className='px-4 py-2 bg-white/10 backdrop-blur md:rounded-full cursor-pointer'>Web Design</button>
            <button className='px-4 py-2 bg-white/10 backdrop-blur md:rounded-full cursor-pointer'>Frontend Developer</button>
            <button className='px-4 py-2 bg-white/10 backdrop-blur md:rounded-full cursor-pointer'>UI/UX Designer</button>
          </div>

          <div className='flex gap-5 mt-8 justify-center md:justify-start text-white/40'>
            <button className='p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer'>
              <FaFacebook />
            </button>
            <button className='p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer'>
              <BsTwitter />
            </button>
            <button className='p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer'>
              <BsInstagram />
            </button>
            <button className='p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-teal-500 transition-colors cursor-pointer'>
              <LiaLinkedin />
            </button>
          </div>
          <div className='my-8 flex-col sm:flex-row gap-6 p-2 '>
            <button className='px-6 py-2 mr-2 cursor-pointer bg-teal-500 hover:bg-teal-800 transition-opacity rounded-full text-white font-medium'>View my work</button>
            <button className='px-6 py-2 rounded-full bg-white/10 text-white hover:opacity-90 transition-opacity cursor-pointer'>Download CV</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
