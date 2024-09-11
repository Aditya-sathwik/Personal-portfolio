import React, { useEffect } from 'react'
import about from "../assets/about.gif";
import AOS from 'aos'
import 'aos/dist/aos.css'

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 })
  }
    , []);
  return (
    <section className="py10  text-white" id='about' data-aos="fade-down">
      <div className="text-center mt-8 " >
        <h3 className='text-5xl font-semibold ' id='headuu'>
          <span className=' border-b-4 border-white-500 '><span id='namee'>About</span> <span className='text-sky-500'>Me</span> </span></h3>
        <p className='text-gray-400 my-5 text-lg' id='headuu2'>Familiarizing Myself</p>
        <div className="flex md:flex-row flex-col-reverse items-center  md:gap-6 gap-12 px-10 mx-auto max-w-6xl">
          <div>
            <div className="text-white my-5">
              <p className='text-orange-400 font-Poppins text-left'> Hey there!</p>
              <p className='text-3xl font-Poppins font-semibold leading-0 text-left' id='names'> Iam  Aditya Sathwik</p>
              <p className='text-justify leading-9 '>
                Enthusiastic and detail-oriented recent graduate with a strong foundation in frontend web development. Skilled in HTML5, CSS3, JavaScript, and modern frameworks such as React.js. Proven ability to create
                responsive and user-centric web interfaces. Eager to leverage academic knowledge and hands-on experience
                to contribute effectively .
              </p>
              {/* <button className='btn-primary mt-4' id='mainbutton'><a href='https://drive.google.com/file/d/1tQCypAHAcKijhZzwHR8iVz1QhRrTvBp1/view?usp=sharing' className='font-bold' target={'_blank'}>Connect with Me</a></button> */}
            </div>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="lg:w-96 h-full relative  ">
              <img
                src={about}
                alt="about_image"
                className="w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About