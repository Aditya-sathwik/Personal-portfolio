import React, { useEffect } from 'react';
import Typed from 'react-typed'
import hero from '../assets/hero3.gif'
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle, AiFillInstagram, AiFillYoutube} from 'react-icons/ai'
import AOS from 'aos'
import 'aos/dist/aos.css'



 

const Hero = () => {
 useEffect(()=>{
    AOS.init({duration:1500})
  }
,[]);
  return (
    <section className='-min-h-screen flex py-10 md:flex-row  flex-col items-center' id='home' data-aos="fade-up">
      <div className='flex-1 flex items-center justify-center h-full' id='image-home' data-aos="fade-right">
        <img src={hero} alt="img" className='md : w-11/12 h-full object-cover'/>
      </div>
      <div className='flex-1 '>
 <div className='md:text-left text-center mt-5' data-aos="fade-left" >
  <h1 className='md:text-5xl text-2xl md:leading-normal leading-10 text-[#f7ae50] font-bold  gap-3 font-Roboto' >
    <span className=' ' id='namee'>Hello! <br/></span>
    <span className='text-[#ffffff]'>Iam</span> 
    <span  className=' text-[#f89a42] ' > Aditya Sathwik,</span>
   
  </h1>

  
  <div className='md:text-5xl text-lg md:leading-normal leading-5 mt-4 font-bold text-[#4ccbfd] font-Roboto '>

              <Typed
                strings={[
                    'A Web Developer',
                    'An Electronics Engineer',
                    ' An IOT Enthusiast']}
                    typeSpeed={40}  
                    backSpeed={50}
                    loop />
              </div><br/>
              <button className='btn-primary mt-6' id='mainbutton'><a href='https://drive.google.com/file/d/1tQCypAHAcKijhZzwHR8iVz1QhRrTvBp1/view?usp=sharing' className='font-bold' target={'_blank'}>Download Resume </a></button>

              <div className="mt-8 text-5xl flex items-center md:justify-start justify-center text-gray-600 cursor-pointer gap-5">
              <a href='https://github.com/Aditya-sathwik' target={'_blank'}><AiFillGithub className='hover:text-white'/></a>
                  <a href='https://www.linkedin.com/in/aditya-sathwik-dasari-venkata-553616219/'target={'_blank'}><span className='hover:text-white'><AiFillLinkedin /></span></a>
                  <a href='https://twitter.com/AdityaSathwik'target={'_blank'}><span className='hover:text-white'><AiFillTwitterCircle /></span></a>
                  <a href='https://www.instagram.com/sathusathvi17/'target={'_blank'}><span className='hover:text-white'><AiFillInstagram/></span></a>
                  
              </div>

       
 </div>
      </div>
    </section>
  )
}

export default Hero