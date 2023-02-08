import React from 'react';
import Typed from 'react-typed'
import hero from '../assets/hero2.gif'
const Hero = () => {
  return (
    <section className='-min-h-screen flex py-10 md:flex-row  flex-col items-center' id='home'>
      <div className='flex-1 flex items-center justify-center h-full'>
        <img src={hero} alt="img" className='md : w-11/12 h-full object-cover'/>
      </div>
      <div className='flex-1 '>
 <div className='md:text-left text-center mt-5'  >
  <h1 className='md:text-6xl text-2xl md:leading-normal leading-10 text-white font-bold  '>
    <span>Hello! <br/></span>
    <span id='namee'>I Am Aditya Sathwik</span>
  </h1>
  
  <div className='md:text-4xl text-lg md:leading-normal leading-5 mt-4 font-bold text-sky-500 '>
              <Typed
                strings={[
                    'Web Developer',
                    'Electronics Engineer',
                    ' An IOT Enthusiast']}
                    typeSpeed={40}  
                    backSpeed={50}
                    loop />
              </div>
              <button className='btn-primary mt-4'><a href='/' target={'_blank'}>Download Resume </a></button>
 </div>
      </div>
    </section>
  )
}

export default Hero